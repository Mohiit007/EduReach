import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import FAQs from './pages/FAQs';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import TeacherDashboard from './pages/Dashboard/TeacherDashboard';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import SuperAdminDashboard from './pages/Dashboard/SuperAdminDashboard';
import VirtualLab from './pages/Dashboard/VirtualLab';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/super-admin" element={<SuperAdminDashboard />} />
          <Route path="/virtual-lab" element={<VirtualLab />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
