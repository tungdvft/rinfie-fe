import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  getDocs,
  getDoc,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore"
import { db } from "@/lib/firebase"
import type { UserProfile } from "@/hooks/use-onboarding"
import type { ChatMessage, Conversation } from "@/lib/types"

// Re-export for backward compatibility
export type { ChatMessage, Conversation }

// Create or get existing conversation between two users
export const getOrCreateConversation = async (userId1: string, userId2: string): Promise<string> => {
  const conversationsRef = collection(db, "conversations")

  // Check if conversation already exists
  const q = query(conversationsRef, where("participants", "array-contains", userId1))

  const querySnapshot = await getDocs(q)
  let existingConversation = null

  querySnapshot.forEach((doc) => {
    const data = doc.data()
    if (data.participants.includes(userId2)) {
      existingConversation = { id: doc.id, ...data }
    }
  })
  console.log(existingConversation)

  if (existingConversation) {
    return existingConversation
  }

  // Create new conversation
  const newConversation = await addDoc(conversationsRef, {
    participants: [userId1, userId2],
    createdAt: serverTimestamp(),
    lastMessage: null,
    lastMessageTime: null,
    lastMessageType: null,
  })

  return newConversation.id
}

// Send a message
export const sendMessage = async (
  conversationId: string,
  senderId: string,
  receiverId: string,
  content: string,
  type: "text" | "audio" = "text",
  audioUrl?: string,
  audioDuration?: number,
) => {
  const messagesRef = collection(db, "messages")

  const messageData = {
    conversationId,
    senderId,
    receiverId,
    content,
    type,
    timestamp: serverTimestamp(),
    read: false,
    ...(audioUrl && { audioUrl }),
    ...(audioDuration && { audioDuration }),
  }

  await addDoc(messagesRef, messageData)

  // Update conversation with last message
  const conversationRef = doc(db, "conversations", conversationId)
  await updateDoc(conversationRef, {
    lastMessage: type === "audio" ? "🎵 Voice message" : content,
    lastMessageTime: serverTimestamp(),
    lastMessageType: type,
  })
}


// Get messages for a conversation
export const subscribeToMessages = (conversationId: string, callback: (messages: ChatMessage[]) => void) => {
  const messagesRef = collection(db, "messages")
  const q = query(messagesRef, where("conversationId", "==", conversationId), orderBy("timestamp", "asc"))

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ChatMessage[]

    callback(messages)
  })
}

// Get user's conversations
export const subscribeToConversations = (userId: string, callback: (conversations: Conversation[]) => void) => {
  const conversationsRef = collection(db, "conversations")
  const q = query(conversationsRef, where("participants", "array-contains", userId), orderBy("lastMessageTime", "desc"))

  return onSnapshot(q, (snapshot) => {
    const conversations = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Conversation[]

    callback(conversations)
  })
}

// Get user profile
export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  const userDoc = await getDoc(doc(db, "users", userId))
  if (userDoc.exists()) {
    return { uid: userId, ...userDoc.data() } as UserProfile
  }
  return null
}

// Mark messages as read
export const markMessagesAsRead = async (conversationId: string, userId: string) => {
  const messagesRef = collection(db, "messages")
  const q = query(
    messagesRef,
    where("conversationId", "==", conversationId),
    where("receiverId", "==", userId),
    where("read", "==", false),
  )

  const querySnapshot = await getDocs(q)
  const updatePromises = querySnapshot.docs.map((doc) => updateDoc(doc.ref, { read: true }))

  await Promise.all(updatePromises)
}

// Delete a message
export const deleteMessage = async (messageId: string) => {
  const messageRef = doc(db, "messages", messageId)
  await deleteDoc(messageRef)
}

// React to a message
export const reactToMessage = async (messageId: string, userId: string, emoji: string) => {
  const messageRef = doc(db, "messages", messageId)
  const messageDoc = await getDoc(messageRef)

  if (messageDoc.exists()) {
    const messageData = messageDoc.data()
    const reactions = messageData.reactions || {}

    if (!reactions[emoji]) {
      reactions[emoji] = []
    }

    // Toggle reaction - add if not present, remove if present
    const userIndex = reactions[emoji].indexOf(userId)
    if (userIndex > -1) {
      reactions[emoji].splice(userIndex, 1)
      if (reactions[emoji].length === 0) {
        delete reactions[emoji]
      }
    } else {
      reactions[emoji].push(userId)
    }

    await updateDoc(messageRef, { reactions })
  }
}
