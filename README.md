# Micro-Quiz Platform

A modern quiz application built with Next.js 15, featuring static site generation, server-side rendering, and dynamic routing. Test your knowledge across various categories like Programming, Science, History, and more!

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd microquiz

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Architecture & Implementation

### Next.js Features Implemented

#### **Static Site Generation (SSG) - Home Page**
- **File**: `app/page.tsx`
- **Implementation**: Uses statically imported categories data at build time
- **Why**: Home page content rarely changes, perfect for SSG performance

#### **Server-Side Rendering (SSR) - Category & Quiz Pages**
- **Files**: `app/quizzes/[category]/page.tsx`, `app/quiz/[id]/page.tsx`
- **Implementation**: Server Components with `cache: 'no-store'` for dynamic data
- **Why**: Category listings and quiz content need fresh data on each request

#### **Dynamic Routing**
- **Category Pages**: `/quizzes/[category]` - Shows quizzes by category
- **Quiz Pages**: `/quiz/[id]` - Individual quiz with questions
- **API Routes**: `/api/categories`, `/api/quizzes/[category]`, `/api/quiz/[id]`

#### **API Routes**
- **Categories API**: Returns all quiz categories
- **Category Quizzes API**: Returns quizzes for specific category
- **Individual Quiz API**: Returns quiz details with questions and answers

#### **Image Optimization**
- **Implementation**: `next/image` component for all quiz images
- **Benefits**: Automatic optimization, lazy loading, responsive images

### Design Decisions

#### **State Management**
- **Client-side**: React hooks for quiz progress, score tracking, and user interactions
- **Persistence**: localStorage for quiz progress recovery
- **Server-side**: API routes for data fetching

#### **Styling Approach**
- **Framework**: Tailwind CSS for utility-first styling
- **Components**: Custom components + shadcn/ui Button component
- **Design**: Clean, modern interface with rounded corners and consistent spacing

#### **User Experience**
- **Immediate Feedback**: Instant correct/incorrect feedback on answer selection
- **Progress Tracking**: Visual progress indicators and score display
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## 🧪 Testing

### Test Setup
```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage
- **Component Tests**: QuizClient component functionality
- **User Interactions**: Answer selection, navigation, state persistence
- **Edge Cases**: Quiz completion, localStorage handling

### Test Files
- `__tests__/QuizClient.test.tsx` - Comprehensive quiz functionality tests

## 🛠️ Challenges & Solutions

### **Hydration Issues**
- **Problem**: Server/client HTML mismatch causing hydration errors
- **Solution**: Moved `suppressHydrationWarning` to body tag and created modular components

### **State Persistence**
- **Problem**: Quiz progress lost on page refresh
- **Solution**: Implemented localStorage with proper cleanup on completion

### **Component Organization**
- **Problem**: Large, monolithic components
- **Solution**: Modularized into separate components (Navigation, LoadingSpinner)

### **Performance Optimization**
- **Problem**: Unused shadcn components bloating bundle
- **Solution**: Removed 42 unused components, keeping only the Button component

## 🤖 AI Development Tools

**Cursor boosted productivity by 10x** - knowledge combined with assistance is truly the best approach for modern development.

### **Secret Tip**
The key to preventing AI hallucination is providing it with a **rules.json file**. This ensures the AI follows specific guidelines and maintains consistency throughout the development process.


## 📁 Project Structure

```
microquiz/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── quiz/[id]/         # Individual quiz pages
│   ├── quizzes/           # Category listing pages
│   └── page.tsx           # Home page (SSG)
├── components/            # Reusable components
│   ├── ui/               # shadcn components (Button only)
│   ├── Navigation.tsx    # Navigation component
│   └── LoadingSpinner.tsx # Loading states
├── lib/                  # Utilities and data
│   └── data.ts          # Mock quiz data
└── __tests__/           # Test files
```

## 🚀 Deployment

### Live Demo
🌐 **Deployed Application**: (https://micro-quiz-platform-rho.vercel.app/)

### Build Commands
```bash
# Build for production
npm run build

# Start production server
npm start
```







