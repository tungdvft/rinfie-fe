"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
  Wine,
  Cigarette,
  Dumbbell,
  Utensils,
  Heart,
} from "lucide-react"
import type { UserProfile } from "@/hooks/use-onboarding"

import {
  DRINKING_OPTIONS,
  SMOKING_OPTIONS,
  WORKOUT_OPTIONS,
  DIET_OPTIONS,
  PETS_OPTIONS,
} from "@/lib/common-utils"

interface LifestyleStepProps {
  profile: UserProfile
  updateProfile: (updates: Partial<UserProfile>) => void
}

export default function LifestyleStep({ profile, updateProfile }: LifestyleStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Tell us about your lifestyle</h3>
        <p className="text-gray-600">This helps us find compatible matches</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LifestyleSelect
          label="Drinking"
          icon={<Wine className="h-4 w-4 text-pink-500" />}
          placeholder="Select drinking habits"
          options={DRINKING_OPTIONS}
          value={profile.drinking}
          onChange={(value) => updateProfile({ drinking: value })}
        />

        <LifestyleSelect
          label="Smoking"
          icon={<Cigarette className="h-4 w-4 text-pink-500" />}
          placeholder="Select smoking habits"
          options={SMOKING_OPTIONS}
             value={profile.smoking}
          onChange={(value) => updateProfile({ smoking: value })}
        />

        <LifestyleSelect
          label="Workout"
          icon={<Dumbbell className="h-4 w-4 text-pink-500" />}
          placeholder="Select workout frequency"
          options={WORKOUT_OPTIONS}
           value={profile.workout}
          onChange={(value) => updateProfile({ workout: value })}
        />

        <LifestyleSelect
          label="Diet"
          icon={<Utensils className="h-4 w-4 text-pink-500" />}
          placeholder="Select diet preference"
          options={DIET_OPTIONS}
           value={profile.diet}
          onChange={(value) => updateProfile({ diet: value })}
        />

        <LifestyleSelect
          label="Pets"
          icon={<Heart className="h-4 w-4 text-pink-500" />}
          placeholder="Do you have pets?"
          options={PETS_OPTIONS}
           value={profile.pets}
          onChange={(value) => updateProfile({ pets: value })}
          className="md:col-span-2"
        />
      </div>
    </div>
  )
}

interface LifestyleSelectProps {
  label: string
  icon: React.ReactNode
  placeholder: string
  options: { value: string; label: string; icon: string }[]
  onChange: (value: string) => void
  className?: string
  value?:string
}

function LifestyleSelect({
  label,
  icon,
  placeholder,
  options,
  onChange,
  className = "",
  value
}: LifestyleSelectProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label className="flex items-center space-x-2 text-gray-700">
        {icon}
        <span>{label}</span>
      </Label>
      <Select value={value}  onValueChange={onChange}>
        <SelectTrigger className="border-gray-300 focus:border-pink-500">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.icon} {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
