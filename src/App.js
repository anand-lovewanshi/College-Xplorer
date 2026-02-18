
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppStyles from './AppStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
// import TopCollegesSection from './components/TopCollegesSection';
import TopCoursesSection from './components/TopCoursesSection';
import Footer from './components/Footer';
import CollegesSection from './components/Colleges';
import CoursesSection from './components/CoursesSection';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import HomePage from './components/HomePage';
import EnrollNowPage from './components/EnrollNowPage';
import BlogPage from './components/BlogPage';
import BlogDetailPage from './components/BlogDetailPage';
import Welcome from './components/Welcome';
import AdmissionProcessPage from './components/AdmissionProcessPage';
import CollegeCategoriesSummary from './components/CollegeCategoriesSummary';
import CollegeListPage from './components/CollegeListPage';
import MadhyaPradeshColleges from './components/MadhyaPradeshColleges';
import CollegeDetailPage from './components/CollegeDetailPage';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';

export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // ✅ Auto-login if token exists in localStorage
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAdminLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <AppStyles />
      <Header />
      <main>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Welcome />
                <WhyChooseUsSection />
                <CollegeCategoriesSummary />
                <CollegesSection />
                <CoursesSection/>
                <AdmissionProcessPage />
              </>
            }
          />
          <Route path="/colleges" element={<CollegesSection/>} />
          <Route path="/courses" element={<CoursesSection />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/enrollnow" element={<EnrollNowPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/madhya-pradesh-colleges" element={<MadhyaPradeshColleges />} />
          <Route path="/colleges/:stream/:collegeName" element={<CollegeDetailPage />} />
          <Route path="/colleges/:stream" element={<CollegeListPage />} />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              isAdminLoggedIn ? (
                <Navigate to="/admin/dashboard" />
              ) : (
                <AdminLogin onLogin={setIsAdminLoggedIn} />
              )
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              isAdminLoggedIn ? (
                <AdminDashboard onLogout={() => setIsAdminLoggedIn(false)} />
              ) : (
                <Navigate to="/admin" />
              )
            }
          />
          

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
