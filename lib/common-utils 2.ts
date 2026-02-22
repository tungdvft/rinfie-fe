// Common utility functions used across the application

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility for combining class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// LocalStorage management utilities
export const STORAGE_KEYS = {
  ONBOARDING_STEP: "onboarding_step",
  ONBOARDING_PROFILE: "onboarding_profile", 
  ACTIVE_TAB: "activeTab",
} as const

export const localStorageUtils = {
  get: (key: string) => {
    if (typeof window === "undefined") return null
    return localStorage.getItem(key)
  },
  
  set: (key: string, value: string) => {
    if (typeof window === "undefined") return
    localStorage.setItem(key, value)
  },
  
  remove: (key: string) => {
    if (typeof window === "undefined") return
    localStorage.removeItem(key)
  },
  
  getJSON: (key: string) => {
    const item = localStorageUtils.get(key)
    if (!item) return null
    try {
      return JSON.parse(item)
    } catch {
      return null
    }
  },
  
  setJSON: (key: string, value: any) => {
    localStorageUtils.set(key, JSON.stringify(value))
  }
}

// Error logging utility
export const logger = {
  error: (message: string, error?: any) => {
    console.error(message, error)
  },
  
  warn: (message: string, data?: any) => {
    console.warn(message, data)
  },
  
  info: (message: string, data?: any) => {
    console.log(message, data)
  }
}

// Distance calculation utility (moved from useDiscovery)
export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371 // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c
  
  return Math.round(distance) // Return distance in km
}

// File validation utilities
export const fileUtils = {
  isValidImage: (file: File): boolean => {
    return file.type.startsWith("image/")
  },
  
  isValidSize: (file: File, maxSizeMB: number = 10): boolean => {
    return file.size <= maxSizeMB * 1024 * 1024
  },
  
  getFileSizeMB: (file: File): number => {
    return Math.round((file.size / (1024 * 1024)) * 100) / 100
  }
}

// Profile completion calculation
export const calculateProfileCompletion = (profile: any): number => {
  const fields = [
    profile.name,
    profile.additionalInfo?.bio,
    profile.additionalInfo?.jobTitle,
    profile.additionalInfo?.educationLevel,
    profile.additionalInfo?.university,
    profile.additionalInfo?.company,
    profile.photos?.length > 0,
    profile.interests?.length > 0,
    profile.height,
    profile.drinking,
    profile.smoking,
    profile.workout,
  ]
  const completed = fields.filter(Boolean).length
  return Math.round((completed / fields.length) * 100)
}
