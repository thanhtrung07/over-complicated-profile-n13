'use client'
import clsx from 'clsx'
import { AlertCircle, CheckCircle, Upload, X } from 'lucide-react'
import { ChangeEvent, DragEvent, useMemo, useRef, useState } from 'react'
import { SUPPORTED_FILE_TYPES } from '@/consts/upload'
import { formatFileSize } from '@/utils/fileUtils'
import { useUploadAuth } from '@/hooks/useUploadAuth'

interface IUploadResponse {
  message: string
  filename: string
  size: number
  error?: string
}

interface IFileUploaderProps {
  onClose?: () => void
}

export default function FileUploader({ onClose }: IFileUploaderProps) {
  const { secretKey } = useUploadAuth()
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadResult, setUploadResult] = useState<IUploadResponse | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const uploadFile = async (file: File) => {
    setIsUploading(true)
    setUploadResult(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'x-upload-secret': secretKey,
        },
        body: formData,
      })

      const result: IUploadResponse = await response.json()
      setUploadResult(result)
    } catch (error) {
      setUploadResult({
        message: '',
        filename: '',
        size: 0,
        error: 'Upload failed: ' + (error as Error).message,
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      uploadFile(files[0])
    }
  }

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      uploadFile(files[0])
    }
  }

  const supportFileTypesText = useMemo(() => {
    return `Supports: ${SUPPORTED_FILE_TYPES.map((type) =>
      type.toUpperCase().replace('.', '')
    ).join(', ')} (Max 10MB)`
  }, [])

  const _onCloseClick = () => {
    onClose?.()
  }

  return (
    <div className="bg-foreground dark:bg-dark-foreground border-border dark:border-dark-border rounded-lg border p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">File Upload</h3>
        <button
          onClick={_onCloseClick}
          className="text-copy-light hover:text-copy-lighter"
          aria-label="Close file uploader"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Upload Area */}
      <div
        className={clsx(
          'rounded-lg border-2 border-dashed p-8 text-center transition-colors duration-200',
          isDragging
            ? 'border-primary bg-primary/10'
            : 'border-border dark:border-dark-border hover:border-primary/50',
          isUploading && 'pointer-events-none opacity-50'
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileSelect}
          accept={SUPPORTED_FILE_TYPES.join(',')}
          aria-label="Choose file to upload"
          title="Choose file to upload"
        />

        <Upload className="text-copy-light mx-auto mb-4 h-12 w-12" />
        <p className="mb-2 text-lg font-medium">
          {isUploading ? 'Uploading...' : 'Drop files here or click to browse'}
        </p>
        <p className="text-copy-light text-sm">{supportFileTypesText}</p>
      </div>

      {/* Upload Result */}
      {uploadResult && (
        <div
          className={clsx(
            'mt-4 flex items-center space-x-3 rounded-lg p-4',
            uploadResult.error
              ? 'bg-error/10 border-error/20 border'
              : 'bg-success/10 border-success/20 border'
          )}
        >
          {uploadResult.error ? (
            <AlertCircle className="text-error h-5 w-5 flex-shrink-0" />
          ) : (
            <CheckCircle className="text-success h-5 w-5 flex-shrink-0" />
          )}
          <div className="flex-1">
            {uploadResult.error ? (
              <p className="text-error text-sm">{uploadResult.error}</p>
            ) : (
              <div>
                <p className="text-success text-sm font-medium">
                  {uploadResult.message}
                </p>
                <p className="text-copy-light text-xs">
                  {uploadResult.filename} ({formatFileSize(uploadResult.size)})
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="text-copy-lighter mt-4 text-xs">
        <p>• Files will be uploaded to the public uploads directory</p>
        <p>• Files with the same name will be overwritten</p>
      </div>
    </div>
  )
}
