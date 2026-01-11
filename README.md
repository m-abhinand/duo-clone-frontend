# Duolingo Clone Frontend

A React-based frontend application for a learning platform. This application provides an intuitive user interface for course management, progress tracking, and interactive learning experiences.

## Features

### Authentication & Security
- **JWT Token Management**: Secure token storage in localStorage with automatic attachment
- **Role-based Navigation**: Automatic redirection based on user role (USER/ADMIN)
- **Protected Routes**: Route guards preventing unauthorized access
- **Automatic Logout**: Token expiration handling with redirect to login
- **Session Persistence**: User data cached locally for seamless experience
- **Token Validation**: Automatic token validation on app initialization

### User Interface & Experience
- **Modern React Design**: Built with React 19.2.0 and modern hooks
- **Responsive Layout**: Mobile-first design that works on all screen sizes
- **Interactive Animations**: Canvas confetti celebrations for achievements
- **Loading States**: Smooth loading indicators for better user feedback
- **Error Handling**: User-friendly error messages with retry options
- **Optimistic Updates**: Immediate UI feedback for user actions (likes, progress)

### Learning Management System
- **Two-Phase Learning Structure**:
  - Technical Content: Code examples, explanations, and tutorials
  - MCQ Quizzes: Multiple choice questions with explanations
  - Progressive Unlocking: MCQ section locked until technical content complete
- **Real-time Progress Tracking**: 
  - Visual progress bars with percentage completion
  - Section-wise completion tracking
  - Automatic progress saving to backend
- **Learning Continuity**: Resume from last accessed position in courses
- **Course Preview**: Detailed course information before enrollment

### Dashboard & Navigation
- **Personalized Dashboard**: 
  - "Continue Learning" section for enrolled courses
  - "Discover More" section for available courses
  - Progress visualization for each course
- **Smart Course Display**: 
  - Enrolled vs. available course separation
  - Progress indicators and completion badges
  - Quick access to continue learning
- **Navigation System**: 
  - Breadcrumb navigation
  - Back button functionality
  - Role-based menu items

### Course Interaction Features
- **Course Enrollment System**:
  - Detailed course preview with curriculum
  - One-click enrollment with confirmation modal
  - Success feedback with celebration animations
- **Favorites System**:
  - Like/unlike courses with heart icons
  - Optimistic UI updates
  - Persistent favorite status across sessions
- **Course Management**:
  - Unenrollment with progress warning
  - Confirmation modals for destructive actions
  - Success/error feedback for all operations

### User Profile & Statistics
- **Comprehensive Profile Page**:
  - User information and join date
  - Learning statistics and achievements
  - Course progress overview
- **Progress Analytics**:
  - Courses completed vs. in progress
  - Total lessons completed
  - Achievement badges and milestones
- **Activity Tracking**:
  - Recent learning activity
  - Course enrollment history
  - Progress milestones

### Admin Panel Features
- **System Dashboard**:
  - Real-time statistics (users, courses, enrollments)
  - User management with admin protection
  - Course management overview
- **User Management**:
  - View all registered users (excluding admins)
  - User statistics (enrollments, completions)
  - Safe user deletion with confirmation
- **Course Management**:
  - Create courses via JSON upload or manual entry
  - Multi-step course creation form
  - Edit existing courses
  - Delete courses with confirmation

### Course Creation System
- **Multi-Step Form Interface**:
  - Basic Information: Name, description, level, duration
  - Technical Content: Code examples, explanations, programming languages
  - MCQ Questions: Questions with multiple options and explanations
- **Content Validation**:
  - Minimum content requirements (5 technical sections, 5 MCQ questions)
  - Form validation with user feedback
  - Preview functionality for created content
- **Flexible Input Methods**:
  - Manual entry with rich form interface
  - JSON file upload for bulk content import
  - Support for multiple programming languages

### Interactive Learning Features
- **Gamified Progress System**:
  - Visual progress indicators
  - Completion celebrations with confetti
  - Achievement badges and milestones
- **Section Navigation**:
  - Tab-based content switching
  - Progress checklist sidebar
  - Next/Previous navigation with validation
- **Learning State Management**:
  - Auto-save progress on completion
  - Resume from last position
  - Section locking mechanism

### Real-time Data Synchronization
- **API Integration**:
  - Centralized API service with error handling
  - Automatic token refresh and validation
  - Optimistic updates with rollback on failure
- **State Management**:
  - Local state for UI interactions
  - Backend synchronization for persistence
  - Conflict resolution for concurrent updates

### Responsive Design Features
- **Mobile-First Approach**:
  - Touch-friendly interface elements
  - Responsive grid layouts
  - Optimized for various screen sizes
- **Cross-Browser Compatibility**:
  - Modern CSS features with fallbacks
  - Consistent experience across browsers
  - Progressive enhancement

### User Experience Enhancements
- **Smart Navigation**:
  - Contextual back buttons
  - Breadcrumb trails
  - Role-based menu systems
- **Feedback Systems**:
  - Success modals for important actions
  - Error messages with actionable advice
  - Loading states for async operations
- **Accessibility Features**:
  - Semantic HTML structure
  - ARIA labels for screen readers
  - Keyboard navigation support

### Development Features
- **Modern Build System**:
  - Vite for fast development and building
  - Hot module replacement for instant updates
  - Optimized production builds
- **Code Organization**:
  - Component-based architecture
  - Centralized API service
  - Reusable utility functions
- **Performance Optimization**:
  - Lazy loading for route components
  - Optimized re-rendering with React hooks
  - Efficient state management

## Technology Stack

- **React 19.2.0** - Frontend framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API communication
- **React Icons** - Icon library
- **Canvas Confetti** - Celebration animations
- **CSS3** - Styling and animations

## Application Flow

### 1. Authentication Flow
```
User Access → SignIn/SignUp → JWT Token → Role-based Redirect
├── Regular User → Home Dashboard
└── Admin User → Admin Dashboard
```

**Key Pages:**
- `SignIn.jsx` - Login with email/password → calls `/api/auth/login`
- `SignUp.jsx` - Registration → calls `/api/auth/register`

### 2. User Learning Journey
```
Home Dashboard → Course Discovery → Enrollment → Learning → Progress Tracking
```

**Detailed Flow:**
1. **Home Dashboard** (`Home.jsx`):
   - Loads user's enrolled courses via `/api/user/enrolled-courses`
   - Shows available courses via `/api/user/dashboard`
   - Displays progress and favorites

2. **Course Discovery** (`CourseEnroll.jsx`):
   - View course details via `/api/course/{id}`
   - See curriculum, technical content preview
   - Enroll via `/api/user/enroll/{courseId}`

3. **Learning Process** (`CourseContinue.jsx`):
   - Two-phase learning: Technical Content → MCQ Quiz
   - Technical content must be completed to unlock MCQ
   - Progress saved automatically via `/api/course/{id}/progress`
   - Real-time progress tracking and completion

4. **Course Management**:
   - Like/unlike courses via `/api/course/{id}/like`
   - Unenroll with confirmation via `/api/course/{id}/unenroll`

### 3. Admin Management Flow
```
Admin Dashboard → User Management / Course Management
├── View Users → Delete Users
└── Manage Courses → Create/Edit/Delete
```

**Admin Pages:**
1. **AdminDashboard.jsx**:
   - System statistics via `/api/admin/users` and `/api/admin/courses`
   - User management (view/delete non-admin users)
   - Course overview

2. **NewCourse.jsx**:
   - Create courses via `/api/admin/courses`
   - Support for JSON upload or manual entry
   - Multi-section form (Basic Info → Technical Content → MCQ Questions)

3. **Course Management**:
   - Edit existing courses
   - Delete courses
   - View course details

## Project Structure

```
src/
├── components/      # Reusable React components
│   ├── EnrollmentSuccessModal.jsx    
│   ├── UnenrollSuccessModal.jsx      
│   └── IconFinder.jsx               
├── contexts/        # State management
│   └── UserContext.jsx              
├── pages/          # Main application pages
│   ├── SignIn.jsx                    
│   ├── SignUp.jsx                    
│   ├── Home.jsx                      
│   ├── Profile.jsx                    
│   ├── CourseEnroll.jsx             
│   ├── CourseContinue.jsx          
│   ├── AdminDashboard.jsx            
│   ├── NewCourse.jsx                 
│   ├── EditCourse.jsx               
│   ├── AdminCourseView.jsx           
│   └── UserView.jsx                  
├── services/       # API integration
│   └── api.js                        
├── App.jsx         
├── main.jsx        
└── theme.jsx       
```

## API Integration

### Authentication APIs
- `POST /api/auth/register` → SignUp.jsx
- `POST /api/auth/login` → SignIn.jsx  
- `GET /api/auth/validate` → api.js (token validation)

### User APIs
- `GET /api/user/dashboard` → Home.jsx (all courses with enrollment status)
- `GET /api/user/enrolled-courses` → Home.jsx, Profile.jsx
- `POST /api/user/enroll/{courseId}` → CourseEnroll.jsx

### Course APIs
- `GET /api/course/{id}` → CourseEnroll.jsx, CourseContinue.jsx
- `GET /api/course/{id}/progress` → CourseContinue.jsx
- `PUT /api/course/{id}/progress` → CourseContinue.jsx
- `POST /api/course/{id}/like` → Home.jsx
- `DELETE /api/course/{id}/like` → Home.jsx
- `GET /api/course/liked` → Home.jsx
- `DELETE /api/course/{id}/unenroll` → CourseContinue.jsx

### Game APIs
- `GET /api/game/start/{category}` → api.js (available but not actively used in UI)

### Admin APIs
- `GET /api/admin/users` → AdminDashboard.jsx
- `GET /api/admin/courses` → AdminDashboard.jsx
- `GET /api/admin/users/{id}` → UserView.jsx
- `DELETE /api/admin/users/{id}` → AdminDashboard.jsx
- `POST /api/admin/courses` → NewCourse.jsx
- `PUT /api/admin/courses/{id}` → EditCourse.jsx
- `DELETE /api/admin/courses/{id}` → AdminDashboard.jsx

## Key Features Implementation

### Learning Progress System
- **Two-Phase Learning**: Technical content → MCQ quiz
- **Progress Persistence**: Real-time saving to backend
- **Completion Tracking**: Visual progress bars and completion badges
- **Section Locking**: MCQ locked until technical content complete

### Course Management
- **Enrollment System**: One-click enrollment with confirmation
- **Favorites System**: Like/unlike courses with heart icons
- **Unenrollment**: Confirmation modal with progress warning

### Admin Features
- **Course Creation**: Multi-step form with validation
- **JSON Import**: Upload course data from JSON files
- **User Management**: View and delete users (admin protection)
- **Statistics Dashboard**: Real-time system metrics

### User Experience
- **Responsive Design**: Works on all device sizes
- **Loading States**: Proper loading indicators
- **Error Handling**: User-friendly error messages
- **Success Feedback**: Celebration animations and modals

## Routing Structure

```
/ → /signin (redirect)
/signin → SignIn.jsx
/signup → SignUp.jsx
/home → Home.jsx (protected)
/profile → Profile.jsx (protected)
/course-enroll/:id → CourseEnroll.jsx (protected)
/course-continue/:id → CourseContinue.jsx (protected)
/admin → AdminDashboard.jsx (admin only)
/admin/new-course → NewCourse.jsx (admin only)
/admin/edit-course/:id → EditCourse.jsx (admin only)
/admin/course/:id → AdminCourseView.jsx (admin only)
/admin/user/:id → UserView.jsx (admin only)
```

## State Management

### User Authentication
- JWT token stored in localStorage
- User data cached in localStorage
- Automatic token attachment to API requests
- Automatic logout on token expiration

### Course Data
- Real-time progress synchronization
- Optimistic UI updates for likes/unlikes
- Local state management for learning progress
- Automatic progress saving

## Unused/Incomplete Features

### Partially Implemented
- **EditCourse.jsx**: Basic structure exists but needs full implementation
- **AdminCourseView.jsx**: Shows course details but limited functionality
- **UserView.jsx**: Basic user details view
- **Game System UI**: API exists but no dedicated game interface

### Static Data Files (Not Used)
- `src/data/courses.json` - Replaced by backend API
- `src/data/users.json` - Replaced by backend API

## Prerequisites

- Node.js 16+ 
- npm or yarn package manager
- Backend API running on `http://localhost:8080`

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd duo-clone-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint**
   - Ensure the backend is running on `http://localhost:8080`
   - Update `API_BASE_URL` in `src/services/api.js` if needed

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Open your browser to `http://localhost:5173`
   - The application will automatically reload on code changes


## Routing Structure

The application uses React Router for navigation:

- `/` - Home dashboard (protected)
- `/signin` - User login
- `/signup` - User registration  
- `/profile` - User profile (protected)
- `/course/:id` - Course details (protected)
- `/course/:id/continue` - Continue learning (protected)
- `/admin` - Admin dashboard (protected, admin only)
- `/admin/courses` - Course management (protected, admin only)
- `/admin/courses/new` - Create new course (protected, admin only)
- `/admin/courses/:id/edit` - Edit course (protected, admin only)

## State Management

The application uses React Context for global state management:

### UserContext
- User authentication state
- User profile information
- Login/logout functionality
- Token management

## Styling

The application uses CSS modules and custom CSS for styling:
- Responsive design principles
- Modern CSS features (Grid, Flexbox)
- Custom animations and transitions
- Consistent color scheme and typography

## Features in Detail

### Authentication Flow
1. User registers or logs in
2. JWT token stored in localStorage
3. Token automatically attached to API requests
4. Automatic logout on token expiration

### Course Interaction
1. Browse available courses
2. Enroll in courses with confirmation modal
3. Track progress through lessons
4. Like/unlike courses for favorites
5. Unenroll with confirmation

### Admin Capabilities
1. View all users and courses
2. Create new courses with detailed information
3. Edit existing course content
4. Delete users and courses
5. Monitor system usage

## Development Guidelines

### Component Structure
- Use functional components with hooks
- Implement proper prop validation
- Follow React best practices for performance

### API Integration
- All API calls go through the centralized service
- Proper error handling and user feedback
- Loading states for better UX

### Styling Conventions
- Component-specific CSS files
- Consistent naming conventions
- Responsive design considerations

