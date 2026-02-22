"use client"

import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import type { UserProfile } from "@/hooks/use-onboarding"
import { INTERESTS_OPTIONS } from "@/lib/common-utils"

interface InterestsStepProps {
  profile: UserProfile
  updateProfile: (updates: Partial<UserProfile>) => void
}


export default function InterestsStep({ profile, updateProfile }: InterestsStepProps) {
  const handleInterestToggle = (interest: string) => {
    const currentInterests = profile.interests
    const newInterests = currentInterests.includes(interest)
      ? currentInterests.filter((i) => i !== interest)
      : [...currentInterests, interest]

    updateProfile({ interests: newInterests })
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">What are you passionate about?</h3>
        <p className="text-gray-600">Select up to 8 interests that represent you</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {INTERESTS_OPTIONS.map((interest) => (
          <Badge
            key={interest.name}
            variant={profile.interests.includes(interest.name) ? "default" : "outline"}
            className={`cursor-pointer p-3 text-center justify-center transition-all hover:scale-105 ${
              profile.interests.includes(interest.name)
                ? "bg-gradient-to-r from-pink-500 to-red-500 text-white border-0"
                : "border-gray-300 hover:border-pink-400 hover:bg-pink-50"
            }`}
            onClick={() => handleInterestToggle(interest.name)}
          >
            <span className="text-lg mr-2">{interest.icon}</span>
            <span className="text-sm font-medium">{interest.name}</span>
          </Badge>
        ))}
      </div>

      {profile.interests.length > 8 && (
        <p className="text-amber-600 text-sm text-center">
          You can select up to 8 interests. Please deselect some to continue.
        </p>
      )}
    </div>
  )
}
