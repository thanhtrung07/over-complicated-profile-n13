'use client'
import { Upload } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import FileUploader from './FileUploader'
import { useUploadAuth } from '@/hooks/useUploadAuth'

interface IUploadButtonProps {
  className?: string
}

const UploadButton = ({ className }: IUploadButtonProps) => {
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false)
  const { isAllowUpload } = useUploadAuth()

  if (!isAllowUpload) {
    return null
  }

  return (
    <>
      <button
        onClick={() => setShowUploadModal(true)}
        className={
          className ||
          'text-copy-light hover:text-copy transition-colors duration-200'
        }
        aria-label="Open file uploader"
        title="File Upload"
      >
        <Upload className="h-5 w-5" />
      </button>

      {/* Upload Modal */}
      <Dialog
        open={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 p-4">
          <DialogPanel className="mx-auto w-full max-w-lg">
            <FileUploader onClose={() => setShowUploadModal(false)} />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default UploadButton
