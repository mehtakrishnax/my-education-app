import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import {LandingPage} from "@/pages/LandingPage";
import ProtectedRoute from '@/components/ProtectedRoute';
import RoleBasedRoute from '@/components/RoleBasedRoute';
import LoginPage from '@/pages/LoginPage';
import UnauthorizedPage from '@/pages/UnauthorizedPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            
            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <RoleBasedRoute />
                </ProtectedRoute>
              } 
            />
            
            {/* Role-specific protected routes */}
            <Route 
              path="/admin/*" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <div>Admin Panel - Add your admin routes here</div>
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/teacher/*" 
              element={
                <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                  <div>Teacher Panel - Add your teacher routes here</div>
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/student/*" 
              element={
                <ProtectedRoute allowedRoles={['student', 'teacher', 'admin']}>
                  <div>Student Panel - Add your student routes here</div>
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all: redirect unknown routes to landing page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
