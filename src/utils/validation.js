import { FORM_CONFIG, INTEREST_OTHER } from '../data/siteData'

export const formatFileSize = (bytes) =>
  bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / 1024 / 1024).toFixed(2)} MB`

// Accepts 10 digits (starting 6-9), optionally prefixed by the country code or a leading 0.
export const normaliseMobile = (raw) => {
  let v = raw.replace(/[\s-]/g, '')
  const cc = FORM_CONFIG.countryCode
  const ccDigits = cc.replace('+', '')
  if (v.startsWith(cc)) v = v.slice(cc.length)
  else if (v.startsWith(ccDigits) && v.length === 10 + ccDigits.length) v = v.slice(ccDigits.length)
  else if (v.startsWith('0') && v.length === 11) v = v.slice(1)
  return v
}

export const validateFile = (file) => {
  if (!file) return 'Upload your payment receipt.'
  const ext = file.name.split('.').pop().toLowerCase()
  if (!FORM_CONFIG.allowedExtensions.includes(ext) || (file.type && !FORM_CONFIG.allowedMimeTypes.includes(file.type)))
    return 'Unsupported file type. Upload a PDF, JPG, JPEG or PNG file.'
  if (file.size === 0) return 'This file is empty. Choose a different file.'
  if (file.size > FORM_CONFIG.maxFileSizeMB * 1024 * 1024)
    return `File is too large (${formatFileSize(file.size)}). The maximum size is ${FORM_CONFIG.maxFileSizeMB} MB.`
  return ''
}

export const validateForm = (v) => {
  const e = {}
  if (!v.fullName.trim()) e.fullName = 'Enter your full name.'
  else if (v.fullName.trim().length < 2) e.fullName = 'Full name must be at least 2 characters.'
  if (!v.department) e.department = 'Select your department.'
  if (!v.interest) e.interest = 'Select your area of interest.'
  if (v.interest === INTEREST_OTHER && !v.otherInterest.trim()) e.otherInterest = 'Tell us your area of interest.'
  if (!v.mobile.trim()) e.mobile = 'Enter your mobile number.'
  else if (!/^[6-9]\d{9}$/.test(normaliseMobile(v.mobile)))
    e.mobile = 'Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9.'
  const fileErr = validateFile(v.file)
  if (fileErr) e.file = fileErr
  if (!v.agreed) e.agreed = 'You must agree to the full-year commitment to register.'
  return e
}
