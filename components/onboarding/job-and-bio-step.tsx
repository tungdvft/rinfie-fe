"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, BookOpen, MessageSquare } from "lucide-react"
import type { UserProfile } from "@/hooks/use-onboarding"

interface JobEducationBioStepProps {
  profile: UserProfile
  updateProfile: (updates: Partial<UserProfile>) => void
}

export default function JobEducationBioStep({ profile, updateProfile }: JobEducationBioStepProps) {
  // Helper to update nested additionalInfo
  const handleAdditionalInfoUpdate = (key: keyof UserProfile["additionalInfo"], value: string) => {
    updateProfile({
      additionalInfo: {
        ...profile.additionalInfo,
        [key]: value,
      },
    })
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Briefcase className="h-12 w-12 text-pink-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Tell us about yourself</h3>
        <p className="text-gray-600">Your career, education, and a short bio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Job Title */}
        <div className="space-y-2">
          <Label className="flex items-center space-x-2 text-gray-700">
            <Briefcase className="h-4 w-4 text-pink-500" />
            <span>Job Title</span>
          </Label>
          <Input
            placeholder="Enter your job title"
            value={profile.additionalInfo.jobTitle}
            onChange={(e) => handleAdditionalInfoUpdate("jobTitle", e.target.value)}
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label className="flex items-center space-x-2 text-gray-700">
            <Briefcase className="h-4 w-4 text-pink-500" />
            <span>Company</span>
          </Label>
          <Input
            placeholder="Enter your company"
            value={profile.additionalInfo.company}
            onChange={(e) => handleAdditionalInfoUpdate("company", e.target.value)}
          />
        </div>

        {/* Education Level */}
        <div className="space-y-2">
          <Label className="flex items-center space-x-2 text-gray-700">
            <BookOpen className="h-4 w-4 text-pink-500" />
            <span>Education Level</span>
          </Label>
          <Input
            placeholder="e.g., Bachelor, Master"
            value={profile.additionalInfo.educationLevel}
            onChange={(e) => handleAdditionalInfoUpdate("educationLevel", e.target.value)}
          />
        </div>

        {/* University / College */}
        <div className="space-y-2">
          <Label className="flex items-center space-x-2 text-gray-700">
            <BookOpen className="h-4 w-4 text-pink-500" />
            <span>University / College</span>
          </Label>
          <Input
            placeholder="Enter your university/college"
            value={profile.additionalInfo.university}
            onChange={(e) => handleAdditionalInfoUpdate("university", e.target.value)}
          />
        </div>

        {/* Bio */}
        <div className="md:col-span-2 space-y-2">
          <Label className="flex items-center space-x-2 text-gray-700">
            <MessageSquare className="h-4 w-4 text-pink-500" />
            <span>Short Bio</span>
          </Label>
          <Textarea
            placeholder="Write a short bio about yourself..."
            value={profile.additionalInfo.bio}
            onChange={(e) => handleAdditionalInfoUpdate("bio", e.target.value)}
            rows={4}
            className="border-gray-300 focus:border-pink-500 focus:ring-pink-200"
          />
        </div>
      </div>
    </div>
  )
}
