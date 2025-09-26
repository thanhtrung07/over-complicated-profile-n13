import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import {
  SUPPORTED_FILE_TYPES,
  MAX_FILE_SIZE,
  UPLOAD_SECRET,
} from '@/consts/upload'
import { getFileExtension } from '@/utils/fileUtils'

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get('x-upload-secret')
    if (authHeader !== UPLOAD_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    // Validate file size (max 10MB)
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File too large. Max size is 10MB' },
        { status: 400 }
      )
    }

    // Get file extension and validate
    const fileExtension = getFileExtension(file.name)

    if (!SUPPORTED_FILE_TYPES.includes(fileExtension)) {
      return NextResponse.json(
        { error: 'File type not allowed' },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Save file to public/uploads directory
    const uploadPath = join(process.cwd(), 'public/uploads', file.name)
    await writeFile(uploadPath, buffer)

    return NextResponse.json({
      message: 'File uploaded successfully',
      filename: file.name,
      size: file.size,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Upload endpoint is active' },
    { status: 200 }
  )
}
