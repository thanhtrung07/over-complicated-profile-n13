/**
 * Format file size from bytes to human readable format
 * @param bytes - File size in bytes
 * @returns Formatted file size string (e.g., "1.5 MB", "512 KB")
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Get file extension from filename
 * @param filename - Name of the file
 * @returns File extension with dot (e.g., ".pdf", ".jpg")
 */
export const getFileExtension = (filename: string): string => {
  return filename.toLowerCase().substring(filename.lastIndexOf('.'))
}
