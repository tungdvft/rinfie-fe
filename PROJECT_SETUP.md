# Project Setup

## 📋 Overview

**Tinder Dating App** - Modern dating application built with Next.js 15, React 19, TypeScript, Firebase, and Tailwind CSS.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or pnpm
- Firebase project
- Cloudinary account

### Installation
```bash
npm install
# or
pnpm install
```

### Environment Variables

Create `.env.local` file with:

```env
# Firebase (Example only – replace with your own)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyYOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT_ID.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT_ID.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=1:YOUR_SENDER_ID:web:YOUR_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-YOUR_MEASUREMENT_ID


# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=YOUR_UPLOAD_PRESET

```

### Run Development Server
```bash
npm run dev
# or
pnpm dev
```

### Build for Production
```bash
npm run build
npm start
```

---

## ✅ Completed Features

- ✅ Google OAuth Authentication
- ✅ 7-Step User Onboarding
- ✅ Discovery/Swipe with Like/Pass/Super Like
- ✅ Matching System (mutual matches)
- ✅ Real-Time Chat (text & audio messages)
- ✅ Profile Management
- ✅ Online/Offline Status
- ✅ Responsive Design (Mobile & Desktop)

---

## 🏗️ Project Structure

```
app/                    # Next.js pages
├── discovery/         # Swipe page
├── login/             # Auth page
├── matches/           # Matches page
├── message/           # Chat page
├── profile/           # Profile page
└── user-onboarding/   # Onboarding flow

components/            # React components
├── ChatPage/          # Chat components
├── onboarding/        # Onboarding steps
└── ui/                # UI components

hooks/                 # Custom hooks
lib/                   # Utilities & configs
```

---

## 🔧 Tech Stack

- **Framework:** Next.js 15.2.4
- **UI:** React 19, TypeScript 5
- **Styling:** Tailwind CSS
- **Backend:** Firebase (Auth, Firestore, Realtime DB)
- **Storage:** Cloudinary
- **UI Components:** Radix UI

---

## 📝 Notes

- Uses Next.js App Router
- State managed with React hooks & localStorage
- Firebase handles all backend operations
- Pink/red gradient theme throughout

