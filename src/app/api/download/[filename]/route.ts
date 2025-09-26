// src/app/api/download/[filename]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { ALLOW_FILES } from '@/consts/upload'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params

  if (!ALLOW_FILES.includes(filename)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }

  try {
    // Readfile from public/uploads
    const filePath = join(process.cwd(), 'public/uploads', filename)
    const fileBuffer = await readFile(filePath)

    // Set appropriate headers
    const headers = new Headers()
    headers.set('Content-Type', 'application/pdf')
    headers.set('Content-Disposition', `attachment; filename="${filename}"`)

    return new NextResponse(new Uint8Array(fileBuffer), { headers })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }
}
