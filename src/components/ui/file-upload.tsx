
import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface FileUploadProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  onFilesSelected?: (files: FileList) => void
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, label = 'Upload file', accept, onChange, disabled, ...props }, ref) => {
    return (
      <label className="w-full cursor-pointer">
        <div
          className={cn(
            'flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-600 p-6 transition-all',
            'hover:border-purple-500 hover:bg-gray-800/50',
            disabled && 'cursor-not-allowed opacity-50',
            className
          )}
        >
          <svg
            className="h-8 w-8 text-gray-400 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          
          <span className="text-gray-400 text-sm font-medium">{label}</span>
          <span className="text-gray-500 text-xs mt-1">PDF files only</span>
        </div>

        <input
          ref={ref}
          type="file"
          accept={accept}
          onChange={onChange}
          disabled={disabled}
          className="hidden"
          {...props}
        />
      </label>
    )
  }
)

FileUpload.displayName = 'FileUpload'

export { FileUpload }