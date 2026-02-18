// import React from 'react';

// // --- Local SVG Icons ---
// // I've moved the icons into this file to resolve the import error.

// const CompassIcon = ({ className = "icon" }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//         <circle cx="12" cy="12" r="10"></circle>
//         <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
//     </svg>
// );

// const BookOpenIcon = ({ className = "icon" }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//         <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
//         <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
//     </svg>
// );

// const UsersIcon = ({ className = "icon" }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//         <circle cx="9" cy="7" r="4"></circle>
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//         <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//     </svg>
// );

// const GraduationCapIcon = ({ className = "icon" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0l8.59-3.908z"></path>
//     <path d="M6 12v4c0 4.5 6 4 6 0v-4"></path>
//     <path d="m22 10-10-5-10 5"></path>
//   </svg>
// );


// // --- Why Choose Us Section ---

// const FeatureCard = ({ icon, title, description }) => (
//     <div className="feature-card">
//         <div className="feature-card-icon">
//             {icon}
//         </div>
//         <h3>{title}</h3>
//         <p>{description}</p>
//     </div>
// );

// export default function WhyChooseUsSection() {
//     const features = [
//         { icon: <CompassIcon className="icon-large" />, title: "Personalized Guidance", description: "Get expert advice and recommendations tailored to your profile and aspirations." },
//         { icon: <BookOpenIcon className="icon-large" />, title: "Comprehensive Info", description: "Access detailed information on colleges, courses, fees, and admission processes." },
//         { icon: <UsersIcon className="icon-large" />, title: "Community Driven", description: "Connect with peers, alumni, and experts to make informed decisions together." },
//         { icon: <GraduationCapIcon className="icon-large" />, title: "Scholarship Alerts", description: "Stay updated on the latest scholarships to fund your dream education." },
//     ];

//     return (
//         <section className="section section-light">
//             <div className="container">
//                 <div className="section-header">
//                     <h2>Why Choose Us?</h2>
//                     <p>Your trusted partner in the journey to your ideal college.</p>
//                 </div>
//                 <div className="grid-4">
//                     {features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
//                 </div>
//             </div>
//         </section>
//     );
// };

import React from 'react';
// ⭐ 1. Import the custom hook for scroll animations
import useOnScreen from '../hooks/useOnScreen'; // Make sure this path is correct

// --- Local SVG Icons ---
const CompassIcon = ({ className = "icon" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>
);
// ... (other icon components remain the same) ...
const BookOpenIcon = ({ className = "icon" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);
const UsersIcon = ({ className = "icon" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);
const GraduationCapIcon = ({ className = "icon" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0l8.59-3.908z"></path>
    <path d="M6 12v4c0 4.5 6 4 6 0v-4"></path>
    <path d="m22 10-10-5-10 5"></path>
  </svg>
);


// --- Feature Card with Animation Logic ---
const FeatureCard = ({ icon, title, description, index }) => {
    // ⭐ 2. Use the hook to get a ref and the visibility state
    const [ref, isVisible] = useOnScreen({
        threshold: 0.2, // Animate when 20% of the card is visible
    });

    return (
        // ⭐ 3. Attach the ref and apply animation classes conditionally
        <div
            ref={ref}
            className={`feature-card fade-in-section ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }} // Stagger the animation
        >
            <div className="feature-card-icon">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};


// --- Main Section Component ---
export default function WhyChooseUsSection() {
    const features = [
        { icon: <CompassIcon className="icon-large" />, title: "Personalized Guidance", description: "Get expert advice and recommendations tailored to your profile and aspirations." },
        { icon: <BookOpenIcon className="icon-large" />, title: "Comprehensive Info", description: "Access detailed information on colleges, courses, fees, and admission processes." },
        { icon: <UsersIcon className="icon-large" />, title: "Community Driven", description: "Connect with peers, alumni, and experts to make informed decisions together." },
        { icon: <GraduationCapIcon className="icon-large" />, title: "Scholarship Alerts", description: "Stay updated on the latest scholarships to fund your dream education." },
    ];

    return (
        <section className="section section-light">
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose Us?</h2>
                    <p>Your trusted partner in the journey to your ideal college.</p>
                </div>
                <div className="grid-4">
                    {features.map((feature, index) => (
                        // ⭐ 4. Pass the index as a prop for the staggered delay
                        <FeatureCard key={index} index={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};