'use client'
import { useState, useEffect, useRef } from 'react'
import { AUTH_KEY } from '@/consts/upload'

export function useUploadAuth() {
  const [isAllowUpload, setIsAllowUpload] = useState(false)
  const storedAuth = useRef<string>('')

  useEffect(() => {
    const rawValue = sessionStorage.getItem(AUTH_KEY) || ''
    storedAuth.current = rawValue.trim()
    setIsAllowUpload(!!storedAuth.current)
  }, [])

  return {
    isAllowUpload,
    secretKey: storedAuth.current,
  }
}
