"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useOnboarding } from "@/hooks/use-onboarding";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, ArrowLeft, ArrowRight, Heart } from "lucide-react";
import toast from "react-hot-toast";
import { ONBOARDING_STEPS } from "@/lib/common-utils";
import BasicInfoStep from "@/components/onboarding/basic-info-step";
import InterestsStep from "@/components/onboarding/interests-step";
import PhysicalStep from "@/components/onboarding/physical-step";
import LifestyleStep from "@/components/onboarding/lifestyle-step";
import PhotosStep from "@/components/onboarding/photos-step";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useRouter } from "next/navigation";
import LocationStep from "@/components/onboarding/location-step";
import JobEducationBioStep from "@/components/onboarding/job-and-bio-step";
import Loader from "@/components/Loader";

export default function Page() {
  const [saving, setSaving] = useState(false);
  const { user } = useFirebaseAuth();
  const {
    currentStep,
    profile,
    updateProfile,
    nextStep,
    prevStep,
    goToStep,
    getStepCompletion,
    getOverallCompletion,
  } = useOnboarding(user?.uid);
  const router = useRouter();

  const steps = ONBOARDING_STEPS;

  const handleSaveProfile = async () => {
    setSaving(true);
    try {
      await setDoc(doc(db, "users", user.uid), {
        ...profile,
        profileComplete: true,
        createdAt: new Date(),
        uid: user.uid,
        email: user.email,
      isOnline: true, 
      lastSeen: new Date()
      });

      // Clear onboarding data from localStorage after successful save
      localStorage.removeItem("onboarding_step");
      localStorage.removeItem("onboarding_profile");
      localStorage.removeItem("last_onboarding_user_id");
      
      toast.success("Welcome to the dating world!");
      router.push("/app");
    } catch (error) {
      console.error("Error saving profile:", error);
      toast.error("Failed to save profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoStep profile={profile} updateProfile={updateProfile} />;
      case 2:
        return <InterestsStep profile={profile} updateProfile={updateProfile} />;
      case 3:
        return <PhysicalStep profile={profile} updateProfile={updateProfile} />;
      case 4:
        return <LifestyleStep profile={profile} updateProfile={updateProfile} />;
      case 5:
        return <LocationStep profile={profile} updateProfile={updateProfile} />;
      case 6:
        return <JobEducationBioStep profile={profile} updateProfile={updateProfile} />;
      case 7:
        return <PhotosStep profile={profile} updateProfile={updateProfile} />;
      default:
        return null;
    }
  };

  const canProceed = getStepCompletion(currentStep);
  const isLastStep = currentStep === 7; // updated to step 7

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Mobile Sidebar */}
      <div className="md:hidden bg-white border-b shadow-sm">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <Heart className="h-6 w-6 text-red-500 fill-current" />
            <h1 className="text-lg font-bold text-gray-900">Complete Profile</h1>
            <span className="text-sm font-medium text-primary">{getOverallCompletion()}%</span>
          </div>
          <Progress value={getOverallCompletion()} className="h-2" />
        </div>

        <div className="flex justify-between p-4">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => {
                const isAccessible = step.id === 1 || getStepCompletion(step.id - 1);
                if (isAccessible) goToStep(step.id);
              }}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${
                currentStep === step.id
                  ? "bg-primary text-white shadow-glow"
                  : getStepCompletion(step.id)
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {getStepCompletion(step.id) ? <Check className="h-4 w-4" /> : step.id}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-start">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-80 bg-gradient-to-b from-pink-500 to-red-500 min-h-screen p-6 text-white">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Complete Your Profile</h1>
            <div className="flex items-center space-x-2 mb-4">
              <Progress value={getOverallCompletion()} className="flex-1 bg-white/20" />
              <span className="text-sm font-medium">{getOverallCompletion()}%</span>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.id}
                onClick={() => {
                  const isAccessible = step.id === 1 || getStepCompletion(step.id - 1);
                  if (isAccessible) goToStep(step.id);
                }}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
                  currentStep === step.id ? "bg-white/20 shadow-lg" : "hover:bg-white/10"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                    getStepCompletion(step.id)
                      ? "bg-green-500 text-white"
                      : currentStep === step.id
                      ? "bg-white text-pink-500"
                      : "bg-white/20"
                  }`}
                >
                  {getStepCompletion(step.id) ? <Check className="h-5 w-5" /> : step.icon}
                </div>
                <div>
                  <p className="font-medium">{step.title}</p>
                  <p className="text-xs opacity-75">
                    {getStepCompletion(step.id) ? "Completed" : "Incomplete"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:p-8 p-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                {renderStep()}

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center space-x-2 bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </Button>

                  {isLastStep ? (
                    <Button
                      onClick={handleSaveProfile}
                      disabled={!canProceed || saving || profile.photos.length < 2}
                      className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8"
                    >
                      {saving ? "Saving..." : "Complete Profile"}
                    </Button>
                  ) : (
                    <Button
                      onClick={nextStep}
                      disabled={!canProceed}
                      className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white flex items-center space-x-2"
                    >
                      <span>Next</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
