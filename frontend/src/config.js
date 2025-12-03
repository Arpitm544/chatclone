const DEFAULT_BACKEND_URL = "https://chatui-1-ffr2.onrender.com"

const envBackendUrl = import.meta.env?.VITE_BACKEND_URL?.trim()

export const BACKEND_URL = envBackendUrl || DEFAULT_BACKEND_URL

