"use client"

import { useState, useEffect } from "react"
import type { User } from "firebase/auth"
import { subscribeToConversations, getUserProfile, type Conversation } from "@/hooks/firebase-chat"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PLACEHOLDERS } from "@/lib/common-utils"
import { Search, MessageCircle, Mic } from "lucide-react"
import { UserProfile } from "@/hooks/use-onboarding"

interface ConversationWithProfile extends Conversation {
  otherUser?: UserProfile
}

interface ConversationListProps {
  user: User
  onSelectConversation: (conversationId: string, otherUser: UserProfile) => void
}

export default function ConversationList({ user, onSelectConversation }: ConversationListProps) {
  const [conversations, setConversations] = useState<ConversationWithProfile[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

useEffect(() => {
  const unsubscribe = subscribeToConversations(user.uid, async (newConversations) => {
    // Get other user profiles for each conversation
    const conversationsWithProfiles: ConversationWithProfile[] = await Promise.all(
      newConversations.map(async (conversation) => {
        const otherUserId = conversation.participants.find((id) => id !== user.uid)
        const otherUser = otherUserId ? await getUserProfile(otherUserId) : undefined
       return { ...conversation, otherUser: otherUser ?? undefined }
      })
    )

    setConversations(conversationsWithProfiles)
    setLoading(false)
  })

  return unsubscribe
}, [user.uid])


  const filteredConversations = conversations.filter((conversation) =>
    conversation.otherUser?.name?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const formatLastMessageTime = (timestamp: any) => {
    if (!timestamp) return ""

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

    if (diffInHours < 1) {
      return "now"
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h`
    } else if (diffInHours < 168) {
      // 7 days
      return `${Math.floor(diffInHours / 24)}d`
    } else {
      return date.toLocaleDateString()
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-red-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 overflow-x-hidden">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-10 will-change-scroll">
        <div className="p-4 max-w-full">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 truncate">Messages</h1>
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 ml-2">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white border-gray-200 focus:border-pink-300 focus:ring-pink-200 w-full"
            />
          </div>
        </div>
      </div>

      {/* Conversations List */}
      <div className="p-4 max-w-full overflow-x-hidden">
        {filteredConversations.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-10 w-10 text-pink-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No conversations yet</h3>
            <p className="text-gray-600">Start matching to begin conversations!</p>
          </div>
        ) : (
          <div className="space-y-2 max-w-full">
            {filteredConversations.map((conversation) => (
              <Button
                key={conversation.id}
                variant="ghost"
                className="w-full p-3 sm:p-4 h-auto justify-start bg-white/60 hover:bg-white/80 border border-white/50 rounded-xl transition-all duration-200 overflow-hidden"
                onClick={() => conversation.otherUser && onSelectConversation(conversation.id, conversation.otherUser)}
              >
                <div className="flex items-center space-x-3 sm:space-x-4 w-full min-w-0">
                  {/* Profile Avatar */}
                  <div className="relative flex-shrink-0">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-white shadow-md">
                      <AvatarImage
                        src={conversation.otherUser?.photos?.[0] || PLACEHOLDERS.AVATAR_SMALL}
                        alt={conversation.otherUser?.name || "User"}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-pink-400 to-red-400 text-white font-semibold text-base sm:text-lg">
                        {conversation.otherUser?.name?.charAt(0) || "?"}
                      </AvatarFallback>
                    </Avatar>
                    {/* Online indicator */}
                    {conversation?.otherUser?.isOnline && <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-white rounded-full"></div>}
                  </div>

                  {/* Conversation Info */}
                  <div className="flex-1 min-w-0 text-left overflow-hidden">
                    <div className="flex items-center justify-between mb-1 gap-2">
                      <h3 className="font-semibold text-gray-800 truncate text-sm sm:text-base">
                        {conversation.otherUser?.name || "Unknown User"}
                      </h3>
                      <span className="text-xs text-gray-500 flex-shrink-0 whitespace-nowrap">
                        {formatLastMessageTime(conversation.lastMessageTime)}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1 overflow-hidden">
                      {conversation.lastMessageType === "audio" && (
                        <Mic className="h-3 w-3 text-gray-400 flex-shrink-0" />
                      )}
                      <p className="text-xs sm:text-sm text-gray-600 truncate">{conversation.lastMessage || "Say hello! 👋"}</p>
                    </div>
                  </div>

                  {/* Unread indicator */}
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-500 rounded-full flex-shrink-0"></div>
                </div>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

