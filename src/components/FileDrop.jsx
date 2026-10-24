import { useRef, useState } from 'react'
import { UploadCloud, FileText, X } from 'lucide-react'
import { FORM_CONFIG } from '../data/siteData'
import { formatFileSize } from '../utils/validation'

// Local-only file picker: the file is validated and shown in the browser, never uploaded.
export default function FileDrop({ id, file, error, onSelect, onRemove }) {
  const inputRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const describedBy = `${id}-hint${error ? ` ${id}-error` : ''}`

  const pick = (f) => f && onSelect(f)

  return (
    <div>
      <input ref={inputRef} id={id} type="file" className="sr-only" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
        aria-describedby={describedBy} aria-invalid={Boolean(error)}
        onChange={(e) => { pick(e.target.files?.[0]); e.target.value = '' }} />
      {file ? (
        <div className="flex items-center gap-3 rounded-2xl border border-line bg-offwhite p-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-apricot text-terra-dark"><FileText size={20} aria-hidden="true" /></span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-ink">{file.name}</p>
            <p className="text-sm text-muted">{formatFileSize(file.size)} · selected on this device only</p>
          </div>
          <button type="button" onClick={() => inputRef.current?.click()} className="rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold text-ink hover:bg-peach">Replace</button>
          <button type="button" onClick={onRemove} aria-label="Remove selected file" className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-ink hover:bg-peach"><X size={16} /></button>
        </div>
      ) : (
        <label htmlFor={id}
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); pick(e.dataTransfer.files?.[0]) }}
          className={`flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed px-5 py-8 text-center transition focus-within:outline focus-within:outline-3 focus-within:outline-terra ${dragging ? 'border-terra bg-apricot/50' : error ? 'border-red-700/60 bg-red-50/40' : 'border-line bg-offwhite hover:border-terra/50'}`}>
          <UploadCloud className="text-terra" size={28} aria-hidden="true" />
          <span className="font-semibold text-ink">Drag and drop your receipt, or <span className="text-terra-dark underline">browse</span></span>
        </label>
      )}
      <p id={`${id}-hint`} className="mt-2 text-sm text-muted">
        Allowed: PDF, JPG, JPEG, PNG · Max {FORM_CONFIG.maxFileSizeMB} MB. Receipt storage and submission to the organisers will only be enabled after a backend is connected.
      </p>
    </div>
  )
}
