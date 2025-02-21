import { cn } from '@/lib/utils'
import { Upload } from 'lucide-react'
import React, { forwardRef } from 'react'

interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  accept?: string
  className?: string
  labelClassName?: string
  containerClassName?: string
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ 
    label = 'Upload file', 
    helperText,
    accept, 
    // className, 
    labelClassName,
    containerClassName,
    onChange,
    disabled,
    ...props 
  }, ref) => {
    return (
      <div className={cn("space-y-2", containerClassName)}>
        <label 
          className={cn(
            "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer",
            "hover:bg-gray-700/10 bg-gray-800/20",
            disabled ? "opacity-50 cursor-not-allowed" : "border-gray-600 hover:border-gray-500",
            labelClassName
          )}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-8 h-8 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-400">
              <span className="font-semibold">{label}</span>
            </p>
            {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept={accept} 
            onChange={onChange}
            disabled={disabled}
            ref={ref}
            {...props}
          />
        </label>
      </div>
    )
  }
)

FileUpload.displayName = 'FileUpload'