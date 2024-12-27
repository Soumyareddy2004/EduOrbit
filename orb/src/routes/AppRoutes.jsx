import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Dashboard from '../pages/Dashboard';
import GroupRoomPage from '../pages/GroupRoomPage';
import ProgressPage from '../pages/ProgressPage.jsx';
import ChallengesPage from '../pages/ChallengesPage';
import VideoConferencePage from '../pages/VideoConferencePage';
import LoginPage from '../pages/LoginPage'; // Enable this import
import Signup from '../pages/Signup';
import ProfilePage from '../pages/ProfilePage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Redirect to Login by default */}
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/group-room" element={<GroupRoomPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/video-conference" element={<VideoConferencePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
