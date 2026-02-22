"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Ruler,
  Cigarette,
  Wine,
  Dumbbell,
  Heart,
  Edit3,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  MessageCircle,
  Camera,
  DessertIcon,
  Cat,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Mail,
  Loader,
} from "lucide-react";
import { UserProfile } from "@/hooks/use-onboarding";
import { EditProfileModal } from "@/components/EditProfileModal";
import { signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import toast from "react-hot-toast";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { calculateProfileCompletion, STORAGE_KEYS, localStorageUtils } from "@/lib/common-utils";

interface ProfilePageProps {
  profile: UserProfile;
  onUpdate?: (updates: Partial<UserProfile>) => void;
  isOwnProfile?: boolean;
  onBack?: () => void;
  onStartChat?: () => void;
}

export default function ProfilePage({
  profile,
  onUpdate,
  isOwnProfile = false,
  onBack,
  onStartChat,
}: ProfilePageProps) {
  if (!profile) {
    return <Loader />;
  }
  const [showDetails, setShowDetails] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingField, setEditingField] = useState<string>("");
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleEditField = (field: string) => {
    if (!isOwnProfile) return;
    setEditingField(field);
    setEditModalOpen(true);
  };


  const nextPhoto = () => {
    if (profile?.photos?.length) {
      setCurrentPhotoIndex((prev) => (prev + 1) % profile.photos.length);
    }
  };

  const prevPhoto = () => {
    if (profile?.photos?.length) {
      setCurrentPhotoIndex(
        (prev) => (prev - 1 + profile.photos.length) % profile.photos.length
      );
    }
  };

  const handleSignOut = async () => {
    try {
      // Optional: mark offline before signing out
      const user = auth.currentUser
      if (user) {
        const userRef = doc(db, "users", user.uid)
        try {
          await updateDoc(userRef, {
            isOnline: false,
            lastSeen: serverTimestamp(),
          })
        } catch (err) {
          console.warn("Failed to mark offline before logout:", err)
        }
      }
  
      await signOut(auth)
  
      // Reset tab state after logout
      localStorageUtils.set(STORAGE_KEYS.ACTIVE_TAB, "discovery")
  
      toast.success("You have been successfully signed out.")
    } catch (error) {
      console.error("Error signing out:", error)
      toast.error("Failed to sign out. Please try again.")
    }
  }
  

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 ">
      <div className="w-full max-w-sm">
        {/* Back Button */}
        {onBack && (
          <div className="mb-4">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-white hover:bg-gray-800 p-2"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
          </div>
        )}

        {/* Main Profile Card */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
          <div className="relative h-[550px]">
            {profile?.photos?.length > 0 && (
              <>
                <img
                  src={profile.photos[currentPhotoIndex]}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
                {/* Photo navigation areas with swipe icons */}
                {profile?.photos?.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </>
                )}
                {/* Top overlay with name and age */}
                <div className="absolute top-0 left-0 right-0 bg-gray-900  p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <h1 className="text-2xl font-bold text-white">
                        {profile.name}
                      </h1>
                      <span className="text-xl text-white">{profile.age}</span>
                      {profile.isVerifiedProfile && (
                        <img
                          src="/images/verify.png"
                          alt="verify"
                          className="h-6 w-6"
                        />
                      )}
                    </div>
                    {isOwnProfile && (
                      <div className="flex justify-end ">
                        <Button
                          onClick={handleSignOut}
                          variant="outline"
                          className=" bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-2 rounded-full"
                        >
                          <LogOut className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="p-4 space-y-3">
            <div className="flex space-x-3">
              <Button
                onClick={() => setShowDetails(!showDetails)}
                className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 rounded-full"
              >
                {showDetails ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Hide Profile
                  </>
                ) : (
                  <>
                    View Profile
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
              {isOwnProfile ? (
                <Button
                  onClick={() => handleEditField("photos")}
                  variant="outline"
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent py-3 rounded-full"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Add Photos
                </Button>
              ) : (
                onStartChat && (
                  <Button
                    onClick={onStartChat}
                    variant="outline"
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent py-3 rounded-full"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Expanded Profile Details */}
        {showDetails && (
          <div className="mt-4 space-y-4 animate-in slide-in-from-bottom-4 duration-300">
            {/* Edit Button - Only for own profile */}
            {isOwnProfile && (
              <div className="flex justify-center">
                <Button
                  onClick={() => handleEditField("Profile")}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile ({calculateProfileCompletion(profile)}% complete)
                </Button>
              </div>
            )}
            <div className="bg-gray-900 rounded-xl p-4 transition-colors border border-gray-800">
              <h3 className="text-lg font-semibold mb-3">
                Account Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300 text-sm">
                    {profile.email || "Not provided"}
                  </span>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div
              className={`bg-gray-900 rounded-xl p-4 transition-colors border border-gray-800 ${
                isOwnProfile ? "cursor-pointer hover:bg-gray-800" : ""
              }`}
              onClick={() => isOwnProfile && handleEditField("bio")}
            >
              <h3 className="text-lg font-semibold mb-3">
                About {profile.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {profile.additionalInfo?.bio ||
                  (isOwnProfile
                    ? "Add a bio to tell others about yourself"
                    : "No bio available")}
              </p>
            </div>

            {/* Job & Education */}
            <div
              className={`bg-gray-900 rounded-xl p-4 transition-colors border border-gray-800 ${
                isOwnProfile ? "cursor-pointer hover:bg-gray-800" : ""
              }`}
              onClick={() => isOwnProfile && handleEditField("work")}
            >
              <h3 className="text-lg font-semibold mb-3">Job & Education</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300 text-sm">
                    {profile.additionalInfo?.jobTitle ||
                      (isOwnProfile ? "Add your job" : "Not specified")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300 text-sm">
                    {profile.additionalInfo?.educationLevel ||
                      (isOwnProfile ? "Add your education" : "Not specified")}
                  </span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div
              className={`bg-gray-900 rounded-xl p-4 transition-colors border border-gray-800 ${
                isOwnProfile ? "cursor-pointer hover:bg-gray-800" : ""
              }`}
              onClick={() => isOwnProfile && handleEditField("interests")}
            >
              <h3 className="text-lg font-semibold mb-3">Interests</h3>
              {profile.interests.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <Badge
                      key={interest}
                      className="bg-pink-500/20 text-pink-400 border border-pink-500/30 hover:bg-pink-500/30 text-xs"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">
                  {isOwnProfile ? "Add your interests" : "No interests listed"}
                </p>
              )}
            </div>

            {/* Lifestyle */}
            <div
              className={`bg-gray-900 rounded-xl p-4 transition-colors border border-gray-800 ${
                isOwnProfile ? "cursor-pointer hover:bg-gray-800" : ""
              }`}
              onClick={() => isOwnProfile && handleEditField("lifestyle")}
            >
              <h3 className="text-lg font-semibold mb-3">Lifestyle</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Ruler className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Height</span>
                  </div>
                  <span className="text-sm text-gray-300">
                    {profile.height ||
                      (isOwnProfile ? "Add height" : "Not specified")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Dumbbell className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Exercise</span>
                  </div>
                  <span className="text-sm text-gray-300">
                    {profile.workout ||
                      (isOwnProfile ? "Add workout" : "Not specified")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wine className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Drinking</span>
                  </div>
                  <span className="text-sm text-gray-300">
                    {profile.drinking ||
                      (isOwnProfile ? "Add drinking" : "Not specified")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Cigarette className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Smoking</span>
                  </div>
                  <span className="text-sm text-gray-300">
                    {profile.smoking ||
                      (isOwnProfile ? "Add smoking" : "Not specified")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DessertIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Diet</span>
                  </div>
                  <span className="text-sm text-gray-300">
                    {profile.diet ||
                      (isOwnProfile ? "Add smoking" : "Not specified")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Cat className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Pets</span>
                  </div>
                  <span className="text-sm text-gray-300">
                    {profile.pets ||
                      (isOwnProfile ? "Add smoking" : "Not specified")}
                  </span>
                </div>
              </div>
            </div>

            {/* Looking For */}
            <div
              className={`bg-gray-900 rounded-xl p-4 transition-colors border border-gray-800 ${
                isOwnProfile ? "cursor-pointer hover:bg-gray-800" : ""
              }`}
              onClick={() => isOwnProfile && handleEditField("lookingFor")}
            >
              <h3 className="text-lg font-semibold mb-3">Looking for</h3>
              {profile.lookingFor.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {profile.lookingFor.map((lf) => (
                    <Badge
                      key={lf}
                      className="bg-pink-500/20 text-pink-400 border border-pink-500/30 flex items-center space-x-1 text-xs"
                    >
                      <Heart className="w-3 h-3 text-pink-500" />
                      <span>{lf}</span>
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">
                  {isOwnProfile
                    ? "Add what you're looking for"
                    : "Not specified"}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Edit Modal - Only for own profile */}
        {isOwnProfile && onUpdate && (
          <EditProfileModal
            isOpen={editModalOpen}
            onClose={() => setEditModalOpen(false)}
            field={editingField}
            currentData={profile}
            onUpdate={onUpdate}
          />
        )}
      </div>
    </div>
  );
}
