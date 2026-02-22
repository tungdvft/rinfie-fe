"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Calendar, Users, Phone, Heart } from "lucide-react"
import type { UserProfile } from "@/hooks/use-onboarding"
import { GENDER_OPTIONS, validationUtils } from "@/lib/common-utils"

interface BasicInfoStepProps {
  profile: UserProfile
  updateProfile: (updates: Partial<UserProfile>) => void
}

export default function BasicInfoStep({ profile, updateProfile }: BasicInfoStepProps) {
  return (
    <div className="space-y-6">
<div className="text-center">
  <User className="h-12 w-12 text-blue-500 mx-auto mb-4" />
  <h3 className="text-xl font-bold text-gray-800 mb-2">Let's get to know you</h3>
  <p className="text-gray-600">Tell us a bit about yourself so we can personalize your experience.</p>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center space-x-2 text-gray-700 font-medium">
            <User className="h-4 w-4 text-primary" />
            <span>Full Name</span>
          </Label>
          <Input
            id="name"
            value={profile.name}
            onChange={(e) => updateProfile({ name: e.target.value })}
            placeholder="Enter your full name"
            className="border-gray-300 focus:border-primary focus:ring-primary rounded-xl h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age" className="flex items-center space-x-2 text-gray-700 font-medium">
            <Calendar className="h-4 w-4 text-primary" />
            <span>Age</span>
          </Label>
          <Input
            id="age"
            type="number"
            min="18"
            max="100"
            value={profile.age || ''}
            onChange={(e) => {
              const value = e.target.value;
              if (value === '') {
                updateProfile({ age: 0 });
              } else {
                const numValue = Number.parseInt(value);
                if (validationUtils.isValidAge(numValue)) {
                  updateProfile({ age: numValue });
                }
              }
            }}
            onBlur={(e) => {
              if (!validationUtils.isValidAge(profile.age)) {
                updateProfile({ age: 18 });
              }
            }}
            placeholder="Your age"
            className="border-gray-300 focus:border-primary focus:ring-primary rounded-xl h-12"
          />
          {!validationUtils.isValidAge(profile.age) && profile.age > 0 && (
            <p className="text-sm text-red-500">Must be 18 or older</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label className="flex items-center space-x-2 text-gray-700 font-medium">
          <Users className="h-4 w-4 text-primary" />
          <span>Gender</span>
        </Label>
        <Select value={profile.gender} onValueChange={(value) => updateProfile({ gender: value })}>
          <SelectTrigger className="border-gray-300 focus:border-primary rounded-xl h-12">
            <SelectValue placeholder="Select your gender" />
          </SelectTrigger>
          <SelectContent>
            {GENDER_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.icon} {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center space-x-2 text-gray-700 font-medium">
          <Phone className="h-4 w-4 text-primary" />
          <span>Phone Number</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          value={profile.phone}
          onChange={(e) => updateProfile({ phone: e.target.value })}
          placeholder="+1 (555) 123-4567"
          className="border-gray-300 focus:border-primary focus:ring-primary rounded-xl h-12"
        />
        {profile.phone && !validationUtils.isValidPhone(profile.phone) && (
          <p className="text-sm text-red-500">Please enter a valid phone number</p>
        )}
      </div>
    </div>
  )
}