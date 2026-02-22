"use client"

import { useState } from "react"

export const useCloudinaryAudio = () => {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const uploadAudio = async (audioBlob: Blob): Promise<string> => {
    setUploading(true)
    setUploadProgress(0)

    try {
      const formData = new FormData()

      // Convert blob to file with proper extension
      const audioFile = new File([audioBlob], `audio-${Date.now()}.webm`, {
        type: "audio/webm",
      })

      formData.append("file", audioFile)
      formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "dating_app")
      formData.append("resource_type", "video") // Cloudinary uses 'video' for audio files

      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
      if (!cloudName) throw new Error("Missing CLOUDINARY_CLOUD_NAME")

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`, {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        console.error("Cloudinary error:", data)
        throw new Error(data.error?.message || "Upload failed")
      }

      return data.secure_url
    } catch (error) {
      console.error("Error uploading audio:", error)
      throw error
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  return {
    uploadAudio,
    uploading,
    uploadProgress,
  }
}
