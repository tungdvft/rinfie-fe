"use client"

import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import  { UserProfile } from "@/hooks/use-onboarding"
import { SelectedConversation } from "@/lib/types"
const ChatPage = dynamic(() => import("@/components/ChatPage/Chat"), { ssr: false })
import ConversationList from "@/components/ChatPage/ConversationList"
import { User } from "firebase/auth"


interface ResponsiveChatLayoutProps {
  user: User
}

export default function ResponsiveChatLayout({ user }: ResponsiveChatLayoutProps) {
  const [selectedConversation, setSelectedConversation] = useState<SelectedConversation | null>(null)
  const scrollPositionRef = useRef(0)

  const handleSelectConversation = (conversationId: string, otherUser: UserProfile) => {
    // Save scroll position before navigating to chat
    scrollPositionRef.current = window.scrollY
    setSelectedConversation({ conversationId, otherUser })
  }

  const handleBackToList = () => {
    setSelectedConversation(null)
    // Restore scroll position after navigating back
    setTimeout(() => {
      window.scrollTo({ top: scrollPositionRef.current, behavior: 'instant' })
    }, 0)
  }

  // Restore scroll position when returning to conversation list
  useEffect(() => {
    if (!selectedConversation && scrollPositionRef.current > 0) {
      window.scrollTo({ top: scrollPositionRef.current, behavior: 'instant' })
    }
  }, [selectedConversation])

  return (
    <div className="h-screen flex bg-gradient-to-br from-pink-50 to-red-50">
      {/* Desktop Layout: Side-by-side */}
      <div className="hidden md:flex w-full">
        {/* Left Sidebar - Conversation List */}
        <div className="w-1/3 min-w-[320px] max-w-[400px] border-r border-pink-100 bg-white/50 backdrop-blur-sm">
          <ConversationList user={user} onSelectConversation={handleSelectConversation} />
        </div>

        {/* Right Panel - Chat or Empty State */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <ChatPage
              user={user}
              conversationId={selectedConversation.conversationId}
              otherUser={selectedConversation.otherUser}
              onBack={handleBackToList}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-pink-50 to-red-50">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-12 w-12 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Select a conversation</h3>
                <p className="text-gray-600 max-w-sm">Choose a conversation from the sidebar to start chatting</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout: Full screen navigation */}
      <div className="md:hidden w-full">
        {selectedConversation ? (
          <ChatPage
            user={user}
            conversationId={selectedConversation.conversationId}
            otherUser={selectedConversation.otherUser}
            onBack={handleBackToList}
          />
        ) : (
          <ConversationList user={user} onSelectConversation={handleSelectConversation} />
        )}
      </div>
    </div>
  )
}
