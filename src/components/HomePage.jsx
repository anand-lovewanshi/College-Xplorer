import React from 'react';

import HeroSection from './HeroSection';
import CoursesSection from './CoursesSection';
import CollegesSection from './Colleges';
import WhyChooseUsSection from './WhyChooseUsSection';
import Welcome from './Welcome';
import CollegeCategoriesSummary from './CollegeCategoriesSummary';
import AdmissionProcessPage from './AdmissionProcessPage';
import TestimonialsPage from './TestimonialsPage';


export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Welcome />
      <CollegeCategoriesSummary /> 
      <AdmissionProcessPage />
      <WhyChooseUsSection />
      <CoursesSection />
      <CollegesSection />
      <TestimonialsPage />
    </main>
  );
}