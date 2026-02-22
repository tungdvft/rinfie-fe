// components/FloatingActionButtons.tsx
import { Button } from "@/components/ui/button";
import { DislikeIcon, SuperLikeIcon, LikeIcon, MessageIcon, RewindIcon } from "./ActionIcons";
import { UserProfile } from "@/hooks/use-onboarding";

interface FloatingActionButtonsProps {
  onAction: (action: "pass" | "like" | "superlike" | "message" | "rewind" ,profile?: UserProfile) => void;
  actionLoading: string | null;
  disabled?: boolean;
  currentProfile?: UserProfile;
  /** When true, like & superlike are disabled (e.g. daily limit reached) */
  likeButtonsDisabled?: boolean;
}

export default function FloatingActionButtons({
  onAction,
  actionLoading,
  disabled = false,
  currentProfile,
  likeButtonsDisabled = false,
}: FloatingActionButtonsProps) {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-50">
      <div className="flex items-center justify-center space-x-4  rounded-full p-4 ">
        {/* Rewind Button */}
        <Button
          onClick={() => onAction("rewind")}
          size="sm"
          variant="outline"
          disabled={disabled || actionLoading === "rewind"}
          className="rounded-full h-12 w-12 border-2 border-yellow-500/50 bg-yellow-900/20 hover:bg-yellow-800/40 text-yellow-400 hover:text-yellow-300 transition-all duration-200 hover:scale-110 shadow-lg"
        >
          {actionLoading === "rewind" ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400"></div>
          ) : (
            <RewindIcon />
          )}
        </Button>

       {/* Dislike Button - using cancel.png */}
        <Button
          onClick={() => onAction("pass")}
          size="lg"
          variant="outline"
          disabled={disabled || actionLoading === "pass"}
          className="rounded-full h-16 w-16 border-2 border-red-500/50 bg-red-900/20 hover:bg-red-800/40  transition-all duration-200 hover:scale-110 shadow-lg p-3"
        >
          {actionLoading === "pass" ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-400"></div>
          ) : (
            <DislikeIcon />
          )}
        </Button>

        {/* Super Like Button - using star.png */}
        <Button
          onClick={() => onAction("superlike")}
          size="lg"
          disabled={disabled || likeButtonsDisabled || actionLoading === "superlike"}
          className="rounded-full h-16 w-16 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-110 shadow-lg p-3"
        >
          {actionLoading === "superlike" ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            <SuperLikeIcon />
          )}
        </Button>

        {/* Like Button - using heart.png */}
        <Button
          onClick={() => onAction("like")}
          size="lg"
          disabled={disabled || likeButtonsDisabled || actionLoading === "like"}
          className="rounded-full h-16 w-16 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-600 hover:to-gray-600 text-white transition-all duration-200 hover:scale-110 shadow-lg p-3"
        >
          {actionLoading === "like" ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            <LikeIcon />
          )}
        </Button>

        {/* Boost Button - using message.png */}
        <Button
          onClick={() => onAction("message", currentProfile)}
          size="sm"
          disabled={disabled || actionLoading === "message"}
          className="rounded-full h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-200 hover:scale-110 shadow-lg p-2"
        >
          {actionLoading === "boost" ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            <MessageIcon />
          )}
        </Button>
      </div>
    </div>
  );
}