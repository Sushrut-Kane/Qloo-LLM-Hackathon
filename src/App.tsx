import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './contexts/components/Navbar';

// Page Imports
import Hero from './pages/Hero';
import Dashboard from './pages/Dashboard';
import Discovery from './pages/Discovery';
import TeammateFinder from './pages/TeammateFinder';
import IdeaIncubator from './pages/IdeaIncubator';
import Workspace from './pages/Workspace';
import Showcase from './pages/Showcase';
import Profile from './pages/Profile';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Form from './pages/Form';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          
          {/* Animated background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
              animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
              animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Routing */}
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<><Navbar /><Hero /></>} />
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/form" element={<><Navbar /><Form /></>} />

            {/* Main routes (currently unprotected) */}
            <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
            <Route path="/discovery" element={<><Navbar /><Discovery /></>} />
            <Route path="/teammates" element={<><Navbar /><TeammateFinder /></>} />
            <Route path="/incubator" element={<><Navbar /><IdeaIncubator /></>} />
            <Route path="/workspace" element={<><Navbar /><Workspace /></>} />
            <Route path="/showcase" element={<><Navbar /><Showcase /></>} />
            <Route path="/profile" element={<><Navbar /><Profile /></>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
