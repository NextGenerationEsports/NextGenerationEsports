import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const rawBasePath = import.meta.env.BASE_URL || "/"
const normalizedBasePath = rawBasePath.endsWith("/") ? rawBasePath : `${rawBasePath}/`

export function assetPath(path: string) {
  return `${normalizedBasePath}${path.replace(/^\/+/, "")}`
}
