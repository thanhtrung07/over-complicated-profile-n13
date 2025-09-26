// Shared constants for file upload functionality
export const SUPPORTED_FILE_TYPES = [
  '.pdf',
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.svg',
  '.ico',
]
export const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
export const UPLOAD_SECRET = process.env.UPLOAD_SECRET || 'trung07-admin-secret'
export const AUTH_KEY = 'upload-auth'
export const ALLOW_FILES = [
  'NguyenThanhTrung_Resume_Frontend_en.pdf',
  'NguyenThanhTrung_Resume_Frontend_vi.pdf',
]
