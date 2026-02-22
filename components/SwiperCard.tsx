// components/SwipeableCard.tsx
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PLACEHOLDERS, formatUtils, LOOKING_FOR_OPTIONS } from "@/lib/common-utils";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { UserProfile } from "@/hooks/use-onboarding";
import { useTranslations } from "next-intl";



interface SwipeableCardProps {
  profile: UserProfile;
  style?: React.CSSProperties;
  isAnimating?: boolean;
}

export default function SwipeableCard({ profile, style, isAnimating = false }: SwipeableCardProps) {
  const t = useTranslations("discovery");
  const tOptions = useTranslations("options.lookingFor");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      Math.min(prev + 1, profile.photos.length - 1)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
  };

  const cardStyle = {
    ...style,
    transition: isAnimating ? 'transform 0.3s ease-out, opacity 0.3s ease-out' : 'none',
  };

  return (
    <div
      className="absolute w-full h-full"
      style={cardStyle}
    >
      <Card className="w-full h-full shadow-2xl bg-gray-900 border-gray-700 overflow-hidden rounded-xl">
        <div className="relative h-full">
          {/* Image indicators */}
          {profile.photos.length > 1 && (
            <div className="absolute top-4 left-4 right-4 z-20 flex space-x-2">
              {profile.photos.map((_, photoIndex) => (
                <div
                  key={photoIndex}
                  className={`flex-1 h-1 rounded-full ${
                    photoIndex === currentImageIndex
                      ? "bg-white"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Main profile image */}
          <img
            src={profile.photos[currentImageIndex] || PLACEHOLDERS.AVATAR}
            alt={profile.name}
            className="w-full h-full object-cover"
            draggable={false}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Navigation arrows */}
          {profile.photos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                disabled={currentImageIndex === 0}
                className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-white transition-all duration-200 z-20
                  ${
                    currentImageIndex === 0
                      ? "bg-black/20 cursor-not-allowed opacity-50"
                      : "bg-black/40 hover:bg-black/60 hover:scale-110"
                  }`}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                disabled={currentImageIndex === profile.photos.length - 1}
                className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-white transition-all duration-200 z-20
                  ${
                    currentImageIndex === profile.photos.length - 1
                      ? "bg-black/20 cursor-not-allowed opacity-50"
                      : "bg-black/40 hover:bg-black/60 hover:scale-110"
                  }`}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Profile Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
            <div className="flex items-center space-x-3 mb-1">
              <h2 className="text-3xl font-bold">{profile.name}</h2>
              <span className="text-2xl font-light">{profile.age}</span>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            {profile.lookingFor && profile.lookingFor.length > 0 && (
              <p className="text-sm opacity-90 mb-1 text-pink-200">
                {t("lookingFor")}: {profile.lookingFor
                  .map((val) => tOptions(val))
                  .join(", ")}
              </p>
            )}
            {profile.additionalInfo.bio && (
              <p className="text-base opacity-90 mb-2 line-clamp-3">
                {profile.additionalInfo.bio}
              </p>
            )}

            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-base">
                {profile.location.city}, {profile.location.state}
                {profile.distance !== undefined && profile.distance > 0 && (
                  <span className="ml-2 font-semibold">• {formatUtils.formatDistance(profile.distance)} away</span>
                )}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {profile.interests.slice(0, 4).map((interest) => (
                <Badge
                  key={interest}
                  variant="secondary"
                  className="text-sm bg-white/20 text-white border-white/30 px-3 py-1"
                >
                  {interest}
                </Badge>
              ))}
              {profile.interests.length > 4 && (
                <Badge
                  variant="secondary"
                  className="text-sm bg-white/20 text-white border-white/30 px-3 py-1"
                >
                  +{profile.interests.length - 4}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}