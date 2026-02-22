"use client";

import { useState } from "react";
import type { User } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useDiscovery } from "@/hooks/useDiscovery";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import SwipeableCard from "@/components/SwiperCard";
import { getOrCreateConversation } from "@/hooks/firebase-chat";
import { UserProfile } from "@/hooks/use-onboarding";
import { DISCOVERY_CONSTANTS, PLACEHOLDERS } from "@/lib/common-utils";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface DiscoveryPageProps {
  user: User;
  onSelectMatch: () => void;
}

export default function DiscoveryPage({
  user,
  onSelectMatch,
}: DiscoveryPageProps) {
  const {
    profiles,
    loading,
    handleSwipeAction,
    loadProfiles,
    likesUsedToday,
    dailyLikeLimit,
  } = useDiscovery(user);

  const atDailyLikeLimit = likesUsedToday >= dailyLikeLimit;
  const t = useTranslations("discovery");

  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [animatingCards, setAnimatingCards] = useState<Set<string>>(new Set());

  // Enhanced profiles with actual profile photos (not using action button images)
  const enhancedProfiles = profiles.map((profile) => ({
    ...profile,
    photos: profile.photos.length > 0 ? profile.photos : [PLACEHOLDERS.AVATAR], // Use placeholder if no photos
  }));

  const handleButtonAction = async (
    action: "pass" | "like" | "superlike" | "rewind" | "message",
    profile?: UserProfile
  ) => {
    if (actionLoading || enhancedProfiles.length === 0) return;

    setActionLoading(action);

    try {
      if (action === "message" && profile) {
        await getOrCreateConversation(user.uid, profile.uid);
        await handleSwipeAction(profile, "like");
        // Navigate to chat
        onSelectMatch();
      }

      if (action === "rewind") {
        // Handle rewind logic here
        console.log("Rewind action");
        setActionLoading(null);
        return;
      }

      // Get the current top profile (first in the array)
      const currentProfile = enhancedProfiles[0];

      // Animate the card out
      setAnimatingCards((prev) => new Set(prev).add(currentProfile.uid));

      if (action === "like" || action === "superlike") {
        if (atDailyLikeLimit) {
          toast(t("dailyLimitToast"));
          setActionLoading(null);
          return;
        }
      }
      if (action === "like") {
        await handleSwipeAction(currentProfile, "like");
      } else if (action === "superlike") {
        await handleSwipeAction(currentProfile, "superlike");
      } else if (action === "pass") {
        await handleSwipeAction(currentProfile, "dislike");
      }

      // Remove the card after animation
      setTimeout(() => {
        setAnimatingCards((prev) => {
          const newSet = new Set(prev);
          newSet.delete(currentProfile.uid);
          return newSet;
        });
      }, 300);
    } catch (error) {
      console.error(`Error handling ${action}:`, error);
      // Remove animation state on error
      if (enhancedProfiles.length > 0) {
        const currentProfile = enhancedProfiles[0];
        setAnimatingCards((prev) => {
          const newSet = new Set(prev);
          newSet.delete(currentProfile.uid);
          return newSet;
        });
      }
    } finally {
      setActionLoading(null);
    }
  };

  // Get only the first 3 profiles for display (stacking effect)
  const visibleProfiles = enhancedProfiles.slice(0, DISCOVERY_CONSTANTS.MAX_VISIBLE_PROFILES);

  if (loading) {
    return (
      <div className="h-full bg-gradient-to-br flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4" />
          <p className="text-lg">{t("findingPeople")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full text-white flex flex-col relative">
      {/* Main Card Stack */}
      <div className="flex-1 flex items-center justify-center p-4 relative min-h-0">
        <div
          className="relative w-full max-w-[400px]"
          style={{ height: "calc(100vh - 160px)" }}
        >
          {visibleProfiles.length === 0 ? (
            <Card className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-2xl">
              <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-full p-6 mb-6">
                  <Heart className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{t("noMoreProfiles")}</h3>
                <p className="text-gray-400 text-base mb-6 leading-relaxed">
                  {t("noMoreProfilesDesc")}
                </p>
                <Button
                  onClick={loadProfiles}
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  {t("refresh")}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              {visibleProfiles.map((profile, index) => {
                const zIndex = visibleProfiles.length - index + DISCOVERY_CONSTANTS.Z_INDEX_BASE;
                const scale = 1 - index * DISCOVERY_CONSTANTS.SCALE_FACTOR;
                const translateY = index * DISCOVERY_CONSTANTS.TRANSLATE_Y_FACTOR;
                const isAnimating = animatingCards.has(profile.uid);

                return (
                  <SwipeableCard
                    key={profile.uid}
                    profile={profile}
                    isAnimating={isAnimating}
                    style={{
                      zIndex,
                      transform: `scale(${scale}) translateY(${translateY}px)`,
                      opacity: isAnimating ? 0 : 1,
                    }}
                  />
                );
              })}

              {/* Floating Action Buttons */}
              {visibleProfiles.length > 0 && (
                <>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                    <div className="px-4 py-2 rounded-full bg-black/50 text-white/90 text-sm">
                      {t("likesToday", { used: likesUsedToday, limit: dailyLikeLimit })}
                    </div>
                    <LanguageSwitcher />
                  </div>
                  <FloatingActionButtons
                    onAction={handleButtonAction}
                    actionLoading={actionLoading}
                    disabled={animatingCards.size > 0}
                    currentProfile={visibleProfiles[0]}
                    likeButtonsDisabled={atDailyLikeLimit}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Optional: Action hints */}
      {visibleProfiles.length > 0 && (
        <div className="absolute bottom-24 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white/40 text-sm">{t("useButtonsHint")}</p>
        </div>
      )}
    </div>
  );
}
