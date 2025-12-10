import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getReadableTextColor(hex: string) {
  // Convert hex to RGB to calculate luminance
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Calculate YIQ ratio
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

  // Return black for light backgrounds, white for dark backgrounds
  return yiq >= 128 ? '#000000' : '#FFFFFF';
}
