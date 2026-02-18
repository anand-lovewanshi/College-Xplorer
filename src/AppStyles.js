// import React from 'react';

// export default function AppStyles() {
//   return (
//     <style>{`
//       /* ⭐ 1. Import Modern Font (Poppins) */
//       @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

//       :root {
//         --color-primary: #3b82f6; /* blue-500 */
//         --color-primary-dark: #2563eb; /* blue-600 */
//         --color-secondary: #e88124; /* orange */
//         --color-secondary-dark: #d97706; /* darker orange */

//         /* ⭐ Modernized Background & Text Colors */
//         --color-bg-light: #ffffff; /* white */
//         --color-bg-medium: #f8f9fa; /* A softer, modern light gray */
//         --color-bg-dark: #e9ecef;   /* A complementary border/hover gray */
//         --color-text-dark: #1f2937; /* gray-800 */
//         --color-text-medium: #4b5563; /* gray-600 */
//         --color-text-light: #6b7281; /* gray-500 */
//         --color-text-white: #ffffff;
//       }

//       /* --- General & Reset --- */
//       body {
//         margin: 0;
//         font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
//         /* ⭐ Subtle Gradient Background for a modern feel */
//         background-color: var(--color-bg-medium);
//         background-image: linear-gradient(180deg, var(--color-bg-medium) 0%, var(--color-bg-dark) 100%);
//         color: var(--color-text-medium);
//         line-height: 1.6;
//         -webkit-font-smoothing: antialiased;
//         -moz-osx-font-smoothing: grayscale;
//       }
//       a {
//         text-decoration: none;
//         color: var(--color-primary);
//       }
//       * {
//         box-sizing: border-box;
//       }
//       /* ⭐ Add a smoother default transition to many elements */
//       a, button, .college-card, .course-chip, .testimonial-card, .process-step-card, .why-choose-us-card, .stat-card, .category-summary-card {
//         transition: all 0.3s ease-in-out;
//       }

//       /* ⭐ On-Scroll Fade-Up Animation Classes */
//       .fade-in-section {
//         opacity: 0;
//         transform: translateY(20px);
//         transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//       }
//       .fade-in-section.is-visible {
//         opacity: 1;
//         transform: translateY(0);
//       }

//       /* --- Utility Classes --- */
//       .container {
//         width: 100%;
//         margin-left: auto;
//         margin-right: auto;
//         padding-left: 1.5rem;
//         padding-right: 1.5rem;
//       }
//       @media (min-width: 640px) { .container { max-width: 640px; } }
//       @media (min-width: 768px) { .container { max-width: 768px; } }
//       @media (min-width: 1024px) { .container { max-width: 1024px; } }
//       @media (min-width: 1280px) { .container { max-width: 1280px; } }

//       /* --- SVG Icons --- */
//       .icon {
//         width: 1.5rem;
//         height: 1.5rem;
//       }
//       .icon-large {
//         width: 2rem;
//         height: 2rem;
//       }

//       /* =================================================================
//          IMPROVED HEADER STYLES
//          ================================================================= */
//       .header {
//         background-color: rgba(255, 255, 255, 0.9); /* ⭐ Slightly less opaque */
//         backdrop-filter: blur(12px); /* ⭐ Stronger blur */
//         position: sticky;
//         top: 0;
//         z-index: 50;
//         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03); /* ⭐ Softer shadow */
//         border-bottom: 1px solid var(--color-bg-dark);
//       }

//       .header-content {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         height: 80px;
//       }

//       .header-brand {
//         display: flex;
//         align-items: center;
//         gap: 0.75rem;
//         color: var(--color-text-dark);
//         text-decoration: none;
//       }

//       .header-brand .logo {
//         height: 60px;
//         width: auto;
//         object-fit: contain;
//       }

//       .header-brand span {
//         font-size: 1.5rem;
//         font-weight: 700;
//         display: none;
//       }

//       @media (min-width: 768px) {
//         .header-brand span {
//           display: inline;
//         }
//       }

//       .header-nav {
//         display: none;
//       }
//       @media (min-width: 1024px) {
//         .header-nav {
//           display: flex;
//           align-items: center;
//           gap: 2rem;
//         }
//       }

//       .nav-link {
//         color: var(--color-text-medium);
//         transition: color 0.2s ease-in-out;
//         font-weight: 600;
//         padding: 0.5rem 0;
//         position: relative;
//         text-decoration: none;
//       }

//       .nav-link:hover {
//         color: var(--color-secondary);
//       }

//       .nav-link::after {
//         content: '';
//         position: absolute;
//         width: 0;
//         height: 2px;
//         bottom: 0;
//         left: 0;
//         background-color: var(--color-secondary);
//         transition: width 0.3s ease-in-out;
//       }

//       .nav-link:hover::after {
//         width: 100%;
//       }

//       .mobile-menu-button {
//         display: block;
//         background: none;
//         border: none;
//         color: var(--color-text-dark);
//         cursor: pointer;
//         padding: 0.5rem;
//         z-index: 100;
//       }
//       @media (min-width: 1024px) {
//         .mobile-menu-button {
//           display: none;
//         }
//       }

//       .mobile-nav-container {
//         position: absolute;
//         top: 80px;
//         left: 0;
//         right: 0;
//         background-color: var(--color-bg-light);
//         box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
//         padding: 1rem 0;
//         border-top: 1px solid var(--color-bg-dark);
//       }

//       .mobile-nav {
//         display: flex;
//         flex-direction: column;
//       }

//       .mobile-nav .nav-link {
//         padding: 0.75rem 1.5rem;
//         width: 100%;
//         text-align: left;
//       }

//       .mobile-nav .nav-link:hover {
//         background-color: var(--color-bg-medium);
//       }

//       /* --- Hero Section --- */
//       @keyframes slowZoom {
//         0% { transform: scale(1); }
//         100% { transform: scale(1.05); }
//       }
//       @keyframes fadeInUp {
//         from {
//           opacity: 0;
//           transform: translateY(30px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }

//       .hero {
//         position: relative;
//         height: 600px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         text-align: center;
//         color: var(--color-text-white);
//         background-size: cover;
//         background-position: center;
//         overflow: hidden;
//       }
//       .hero::before {
//         content: '';
//         position: absolute;
//         inset: 0;
//         background: inherit;
//         background-size: cover;
//         background-position: center;
//         animation: slowZoom 15s ease-in-out infinite alternate;
//         z-index: 1;
//       }
//       .hero-overlay { position: absolute; inset: 0; background-color: rgba(0, 0, 0, 0.5); z-index: 2;}
//       .hero-content { position: relative; z-index: 3; padding: 0 1rem; }

//       .hero h1 {
//         font-size: 2.5rem;
//         font-weight: 800;
//         margin-bottom: 1rem;
//         animation: fadeInUp 0.8s ease-out forwards;
//       }
//       .hero p {
//         font-size: 1.25rem;
//         color: #e5e7eb;
//         margin-bottom: 2rem;
//         max-width: 600px;
//         margin-left: auto;
//         margin-right: auto;
//         animation: fadeInUp 0.8s ease-out 0.2s forwards;
//         opacity: 0;
//       }
//       .search-bar-container {
//         max-width: 42rem;
//         margin: 0 auto;
//         animation: fadeInUp 0.8s ease-out 0.4s forwards;
//         opacity: 0;
//       }
//       .search-bar { position: relative; }
//       .search-bar input { width: 100%; padding: 1rem 8rem 1rem 3rem; border-radius: 0.5rem; color: var(--color-text-dark); background-color: var(--color-bg-light); border: 1px solid #d1d5db; }
//       .search-bar input:focus { outline: 2px solid var(--color-secondary); border-color: transparent; }
//       .search-bar-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--color-text-light); }
//       .search-bar-button { position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); padding: 0.625rem 1.5rem; }
//       .popular-searches { margin-top: 1.5rem; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 0.75rem; color: #d1d5db; }

//       @media (min-width: 768px) {
//         .hero h1 { font-size: 3.75rem; }
//         .hero p { font-size: 1.5rem; }
//       }

//       /* --- Generic Section --- */
//       .section { padding: 5rem 0; }
//       .section-light { background-color: var(--color-bg-light); }
//       .section-medium { background-color: var(--color-bg-medium); }
//       .section-header { text-align: center; margin-bottom: 3rem; }
//       .section-header h2 { font-size: 2.25rem; font-weight: bold; color: var(--color-text-dark); }
//       .section-header p { color: var(--color-text-medium); margin-top: 0.5rem; max-width: 600px; margin-left: auto; margin-right: auto;}
//       .section-header-light h2, .section-header-light p { color: var(--color-text-white); }

//       .grid-3 { display: grid; gap: 2rem; grid-template-columns: repeat(1, 1fr); }
//       .grid-4 { display: grid; gap: 2rem; grid-template-columns: repeat(1, 1fr); }
//       @media (min-width: 768px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } .grid-4 { grid-template-columns: repeat(2, 1fr); } }
//       @media (min-width: 1024px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } .grid-4 { grid-template-columns: repeat(4, 1fr); } }

//       /* --- About Us Page --- */
//       .about-us-container { max-width: 1024px; }
//       .about-title { font-size: 2.25rem; font-weight: bold; color: var(--color-text-dark); text-align: center; margin-bottom: 2rem; }
//       .about-us-main-content p { line-height: 1.6; margin-bottom: 1.5rem; }
//       .highlight { color: var(--color-secondary); }
//       .vision-mission-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 3rem; }
//       @media (min-width: 768px) { .vision-mission-grid { grid-template-columns: repeat(2, 1fr); } }
//       .vision-mission-card { background: var(--color-bg-light); padding: 2rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);}
//       .vision-mission-card h3 { font-size: 1.5rem; margin-bottom: 1rem; color: var(--color-text-dark); margin-top: 0; }
//       .vision-mission-card p { line-height: 1.6; margin-bottom: 0;}

//        /* --- Why Choose Us Section (Improved Style) --- */
//       .why-choose-us-section {
//         background-color: transparent; /* ⭐ Allow body gradient to show through */
//       }
//       .why-choose-us-card {
//         background-color: var(--color-bg-light);
//         border: 1px solid var(--color-bg-dark);
//         border-radius: 0.75rem;
//         padding: 2rem;
//         box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//         text-align: center;
//       }
//       .why-choose-us-card:hover {
//         transform: translateY(-8px);
//         box-shadow: 0 10px 20px rgba(0,0,0,0.1);
//         border-color: var(--color-secondary);
//       }
//       .why-choose-us-icon {
//         margin: 0 auto 1.5rem;
//         height: 3.75rem;
//         width: 3.75rem;
//         border-radius: 9999px;
//         background-color: var(--color-primary);
//         color: var(--color-text-white);
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         font-size: 1.5rem;
//         font-weight: bold;
//       }
//       .why-choose-us-card h3 {
//         font-size: 1.25rem;
//         margin-bottom: 0.5rem;
//         color: var(--color-text-dark);
//       }
//       .why-choose-us-card p {
//         font-size: 0.875rem;
//         line-height: 1.5;
//         color: var(--color-text-medium);
//       }

//       /* --- Cards --- */
//       .college-card {
//         background-color: var(--color-bg-light);
//         border-radius: 0.75rem;
//         border: 1px solid var(--color-bg-dark);
//         text-align: center;
//         cursor: pointer;
//         box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
//         overflow: hidden;
//         display: flex;
//         flex-direction: column;
//         height: 100%;
//       }

//       .college-card:hover {
//         transform: translateY(-8px);
//         box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);
//       }
//        .college-card:hover .college-card-content h4 {
//         color: var(--color-secondary);
//       }
//       .college-card img {
//         width: 100%;
//         height: 180px;
//         object-fit: cover;
//       }
//       .college-card-content {
//         padding: 1.5rem;
//         margin-top: auto;
//       }
//       .college-card-content h4 { font-size: 1rem; font-weight: 600; color: var(--color-text-dark); margin: 0; transition: color 0.3s ease-in-out; }

//       /* --- Courses Section --- */
//       .course-chips-container {
//         display: grid;
//         grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//         gap: 1.5rem;
//       }

//       .course-chip {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         background-color: var(--color-bg-light);
//         color: var(--color-text-dark);
//         padding: 1.5rem;
//         border-radius: 8px;
//         cursor: pointer;
//         font-weight: 500;
//         text-decoration: none;
//         border: 1px solid var(--color-bg-dark);
//         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
//         text-align: center;
//       }

//       .course-chip:hover {
//         transform: translateY(-5px);
//         box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
//         border-color: var(--color-secondary);
//       }

//       .course-chip:hover .icon,
//       .course-chip:hover .course-chip-title {
//         color: var(--color-secondary);
//       }

//       .course-chip .icon {
//         color: var(--color-primary);
//         margin-bottom: 1rem;
//         width: 2.5rem;
//         height: 2.5rem;
//         transition: color 0.3s ease-in-out;
//       }

//       .course-chip-title {
//           font-size: 1.1rem;
//           font-weight: 600;
//           margin: 0 0 0.25rem;
//           color: var(--color-text-dark);
//           transition: color 0.3s ease-in-out;
//       }

//       .course-chip-count {
//           font-size: 0.9rem;
//           color: var(--color-text-medium);
//       }

//       /* --- Remaining styles are unchanged... --- */

//       /* (The rest of your CSS file would follow, as it was in the previous version) */
//       .contact-form-layout { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; max-width: 1024px; margin: 0 auto;}
//       @media (min-width: 1024px) { .contact-form-layout { grid-template-columns: 1fr 1.25fr; } }
//       .contact-form-image { display: none; }
//       @media (min-width: 1024px) { .contact-form-image { display: block; } .contact-form-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 0.5rem; } }
//       .contact-form-container { background-color: var(--color-bg-light); padding: 2.5rem; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07); }
//       .form-group { margin-bottom: 1.5rem; }
//       .form-group label { display: block; font-weight: 600; color: var(--color-text-dark); margin-bottom: 0.5rem; }
//       .form-control { width: 100%; padding: 0.75rem 1rem; border-radius: 0.375rem; border: 1px solid #d1d5db; transition: border-color 0.3s, box-shadow 0.3s; }
//       .form-control:focus { outline: none; border-color: var(--color-secondary); box-shadow: 0 0 0 3px rgba(232, 129, 36, 0.3); }
//       textarea.form-control { resize: vertical; }
//       .form-submit-btn { width: 100%; font-size: 1.125rem; }
//       .contact-info-card { text-align: center; }
//       .contact-info-icon { margin: 0 auto 1.5rem; color: var(--color-primary); }
//       .contact-info-card h3 { color: var(--color-text-dark); font-size: 1.25rem; margin-bottom: 0.5rem; }
//       .contact-info-card p { word-wrap: break-word; }
//       .map-container { border-radius: 0.5rem; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }

//       .footer { background-color: var(--color-text-dark); color: var(--color-bg-dark); }
//       .footer-grid {
//         padding: 3rem 0;
//         display: grid;
//         gap: 2rem;
//         grid-template-columns: repeat(1, 1fr);
//       }
//       @media (min-width: 768px) { .footer-grid { grid-template-columns: repeat(4, 1fr); } }
//       .footer h3 { color: var(--color-text-white); font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem; }
//       .footer p, .footer li { font-size: 0.875rem; }
//       .footer ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
//       .footer a { color: var(--color-bg-dark); transition: color 0.3s;}
//       .footer a:hover { color: var(--color-text-white); }
//       .footer-bottom {
//         padding: 1.5rem 0;
//         border-top: 1px solid #374151; /* gray-700 */
//         text-align: center;
//         font-size: 0.875rem;
//       }

//                /* --- Enroll Now Page --- */
// .enroll-now-grid {
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 3rem;
//   align-items: center;
// }
// @media (min-width: 1024px) {
//   .enroll-now-grid {
//     grid-template-columns: 1fr 1fr;
//   }
// }
// .enroll-form-container {
//   background-color: var(--color-bg-light);
//   padding: 2.5rem;
//   border-radius: 0.5rem;
//   box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
// }
// .enroll-form {
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// }

// .form-group input,
// .form-group select,
// .form-group textarea {
//   width: 100%;
//   padding: 0.75rem 1rem;
//   border-radius: 0.375rem;
//   border: 1px solid #d1d5db;
//   font-size: 1rem;
//   box-sizing: border-box;
// }
// .form-group input:focus,
// .form-group select:focus,
// .form-group textarea:focus {
//   outline: 2px solid var(--color-secondary);
//   border-color: transparent;
// }
// .form-submit-button {
//   width: 100%;
//   padding: 1rem;
//   font-size: 1.1rem;
// }
// .enroll-image-container img {
//   border-radius: 0.5rem;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }
//       .blog-layout {
//         display: grid;
//         grid-template-columns: 1fr;
//         gap: 3rem;
//       }
//       @media (min-width: 1024px) {
//         .blog-layout {
//           grid-template-columns: 3fr 1fr;
//         }
//       }
//       .blog-main-content {
//         display: flex;
//         flex-direction: column;
//         gap: 2.5rem;
//       }
//       .blog-post-card {
//         background: var(--color-bg-light);
//         border-radius: 0.5rem;
//         box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//         overflow: hidden;
//       }
//       .blog-post-content {
//         padding: 2rem;
//       }
//       .blog-post-title {
//         margin: 0 0 0.5rem;
//       }
//       .blog-post-title a {
//         color: var(--color-text-dark);
//         font-size: 1.75rem;
//         text-decoration: none;
//         transition: color 0.3s;
//       }
//       .blog-post-title a:hover {
//         color: var(--color-primary);
//       }
//       .blog-post-meta {
//         font-size: 0.875rem;
//         color: var(--color-text-light);
//         margin-bottom: 1rem;
//       }
//       .blog-post-meta a {
//         color: var(--color-text-medium);
//         text-decoration: none;
//       }
//       .blog-post-meta a:hover {
//         text-decoration: underline;
//       }
//       .blog-post-excerpt {
//         margin-bottom: 1.5rem;
//       }
//       .blog-sidebar {
//         display: flex;
//         flex-direction: column;
//         gap: 2rem;
//       }
//       .sidebar-widget {
//         background: var(--color-bg-light);
//         padding: 1.5rem;
//         border-radius: 0.5rem;
//         box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//       }
//       .widget-title {
//         font-size: 1.25rem;
//         color: var(--color-text-dark);
//         margin: 0 0 1rem;
//         padding-bottom: 0.5rem;
//         border-bottom: 1px solid var(--color-bg-dark);
//       }
//       .widget-list {
//         list-style: none;
//         padding: 0;
//         margin: 0;
//         display: flex;
//         flex-direction: column;
//         gap: 0.75rem;
//       }
//       .widget-list a {
//         color: var(--color-text-medium);
//         text-decoration: none;
//         transition: color 0.3s;
//       }
//       .widget-list a:hover {
//         color: var(--color-primary);
//       }

//       .blog-detail-page {
//         max-width: 800px;
//         margin: auto;
//       }
//       .blog-detail-title { font-size: 2rem; font-weight: bold; margin-bottom: 10px; }
//       .blog-detail-meta { color: #6b7280; font-size: 0.9rem; margin-bottom: 20px; }
//       .blog-detail-excerpt { font-style: italic; color: #374151; margin-bottom: 20px; }
//       .blog-detail-content p { line-height: 1.8; color: #111827; }
//       .back-btn { display: inline-block; margin-bottom: 20px; }

//       .page-header {
//         text-align: center;
//         margin-bottom: 3rem;
//         padding: 2rem 0;
//         border-bottom: 1px solid var(--color-bg-dark);
//       }
//       .page-header h1 { font-size: 2.5rem; color: var(--color-text-dark); margin: 0; }
//       .page-header p { font-size: 1.1rem; color: var(--color-text-medium); }

//       .btn-outline, .btn-apply, .btn-details, .btn-primary, .btn-secondary, .form-submit-button {
//         transition: all 0.3s ease;
//       }
//       .btn-outline:hover, .btn-apply:hover, .btn-details:hover, .btn-primary:hover, .btn-secondary:hover, .form-submit-button:hover {
//         transform: translateY(-2px);
//         box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//       }
//       .btn-outline {
//         background-color: transparent;
//         border: 2px solid var(--color-secondary);
//         color: var(--color-secondary);
//         font-weight: 600;
//         padding: 0.75rem 1.5rem;
//         border-radius: 0.5rem;
//         cursor: pointer;
//         display: inline-block;
//       }
//       .btn-outline:hover {
//         background-color: var(--color-secondary);
//         color: var(--color-text-white);
//       }
//       .btn-primary {
//         background-color: var(--color-primary);
//         color: var(--color-text-white);
//         font-weight: 600;
//         padding: 0.75rem 1.5rem;
//         border-radius: 0.5rem;
//         border: none;
//         cursor: pointer;
//       }
//       .btn-primary:hover {
//         background-color: var(--color-primary-dark);
//       }

//       .welcome-content {
//         max-width: 800px;
//         margin: 0 auto 3rem;
//         text-align: center;
//         line-height: 1.6;
//       }
//       .stats-grid { display: grid; gap: 2rem; grid-template-columns: repeat(1, 1fr); }
//       @media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(3, 1fr); } }
//       .stat-card {
//         background-color: var(--color-bg-light);
//         padding: 2rem;
//         border-radius: 0.5rem;
//         text-align: center;
//         border: 1px solid var(--color-bg-dark);
//         box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
//       }
//       .stat-card:hover {
//         transform: translateY(-8px);
//         box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//         background-color: var(--color-secondary);
//         color: var(--color-text-white);
//       }
//       .stat-card:hover .stat-card-icon,
//       .stat-card:hover .stat-card-title,
//       .stat-card:hover .stat-card-description {
//         color: var(--color-text-white);
//       }
//       .stat-card-icon { color: var(--color-primary); margin-bottom: 1rem; }
//       .stat-card-icon .icon-large { width: 3rem; height: 3rem; }
//       .stat-card-title { font-size: 2rem; font-weight: bold; color: var(--color-text-dark); }
//       .stat-card-description { color: var(--color-text-medium); font-size: 1rem; }

//       .process-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
//       @media (min-width: 768px) { .process-grid { grid-template-columns: repeat(2, 1fr); } }
//       .process-column { display: flex; flex-direction: column; gap: 2rem; }
//       .process-step-card {
//         background-color: var(--color-bg-light);
//         border: 1px solid var(--color-bg-dark);
//         border-radius: 0.5rem;
//         padding: 2rem;
//         box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//       }
//       .process-step-card:hover {
//         transform: translateY(-5px);
//         box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//         border-left: 5px solid var(--color-secondary);
//       }
//       .process-step-number { font-size: 0.875rem; font-weight: 600; color: var(--color-secondary); margin-bottom: 0.5rem; }
//       .process-step-title { font-size: 1.5rem; color: var(--color-text-dark); margin-top: 0; margin-bottom: 1rem; }
//       .process-step-description { color: var(--color-text-medium); line-height: 1.6; }

//       .testimonial-card {
//         background-color: var(--color-bg-light);
//         border: 1px solid var(--color-bg-dark);
//         border-radius: 0.5rem;
//         padding: 2rem;
//         box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//       }
//       .testimonial-card:hover {
//         transform: translateY(-8px);
//         box-shadow: 0 10px 20px rgba(0,0,0,0.1);
//       }
//       .testimonial-profile { display: flex; align-items: center; margin-bottom: 1.5rem; gap: 1rem; }
//       .testimonial-avatar img { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; }
//       .testimonial-name { font-size: 1.125rem; font-weight: 600; color: var(--color-text-dark); margin: 0; }
//       .testimonial-quote { font-style: italic; color: var(--color-text-medium); margin: 0; line-height: 1.6; }

//       .category-summary-card-link { text-decoration: none; color: inherit; display: block; height: 100%; }
//       .category-summary-card {
//         background-color: var(--color-bg-light);
//         border: 1px solid var(--color-bg-dark);
//         border-radius: 0.5rem;
//         padding: 1.5rem;
//         box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//         text-align: center;
//         height: 100%;
//       }
//       .category-summary-card:hover {
//         transform: translateY(-5px);
//         box-shadow: 0 10px 20px rgba(0,0,0,0.1);
//         border-color: var(--color-secondary);
//       }
//       .category-summary-icon { color: var(--color-primary); margin-bottom: 1rem; }
//       .category-summary-icon svg { width: 2.5rem; height: 2.5rem; }
//       .category-summary-title { font-size: 1.25rem; font-weight: 600; color: var(--color-text-dark); margin: 0 0 0.25rem; }
//       .category-summary-count { color: var(--color-text-medium); margin: 0; }

//       .college-list-container, .mp-colleges-container { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
//       .college-list-title, .stream-title { font-size: 2.5rem; font-weight: bold; color: var(--color-text-dark); text-transform: capitalize; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 2px solid var(--color-secondary); }
//       .college-list-ul, .college-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.5rem; }
//       .college-list-item, .college-item {
//         display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; background-color: var(--color-bg-light); border: 1px solid var(--color-bg-dark);
//         border-radius: 0.5rem; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//       }
//       .college-list-item:hover, .college-item:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
//       .college-info { flex-grow: 1; margin-right: 1.5rem; }
//       .college-name { font-size: 1.25rem; font-weight: 600; color: var(--color-text-dark); display: block; }
//       .college-city { font-style: italic; color: var(--color-text-medium); font-size: 0.9rem; }
//       .college-actions { display: flex; gap: 1rem; flex-shrink: 0; margin-top: 1rem; }
//       @media (min-width: 768px) { .college-actions { margin-top: 0; } }
//       .btn-apply, .btn-details {
//         border: none; padding: 0.6rem 1.2rem; border-radius: 0.375rem; font-weight: 600; cursor: pointer; font-size: 0.875rem; text-decoration: none;
//         display: inline-block; text-align: center;
//       }
//       .btn-apply { background-color: var(--color-secondary); color: white; }
//       .btn-apply:hover { background-color: var(--color-secondary-dark); }
//       .btn-details { background-color: transparent; color: var(--color-secondary); border: 1px solid var(--color-secondary); }
//       .btn-details:hover { background-color: var(--color-secondary); color: var(--color-text-white); }

//       .college-detail-container { max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem; }
//       .college-detail-card { background-color: var(--color-bg-light); border: 1px solid var(--color-bg-dark); border-radius: 8px; padding: 2.5rem; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); }
//       .college-detail-title { font-size: 2.5rem; font-weight: bold; color: var(--color-text-dark); margin: 0 0 0.25rem; }
//       .college-detail-city { font-size: 1.1rem; color: var(--color-text-medium); margin-bottom: 2.5rem; font-style: italic; }
//       .detail-section { margin-bottom: 2rem; }
//       .detail-section h3 { font-size: 1.25rem; color: var(--color-text-dark); border-bottom: 2px solid var(--color-secondary); padding-bottom: 0.5rem; margin: 0 0 1rem; }
//       .detail-section p { line-height: 1.6; margin: 0; }
//       .website-link { color: var(--color-primary); text-decoration: none; font-weight: 600; }
//       .website-link:hover { text-decoration: underline; }
//       .back-link { display: inline-block; margin-bottom: 1.5rem; color: var(--color-primary); text-decoration: none; font-weight: 600; }
//       .back-link:hover { text-decoration: underline; }
//       .college-detail-actions { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--color-bg-dark); text-align: center; }
//       .btn-apply-detail {
//         background-color: var(--color-secondary); color: white; font-size: 1.125rem; font-weight: bold; padding: 0.75rem 2.5rem; border: none;
//         border-radius: 0.5rem; cursor: pointer;
//       }
//       .btn-apply-detail:hover { background-color: var(--color-secondary-dark); }

//       .admin-dashboard {
//         max-width: 1600px; margin: 2rem auto; padding: 1.5rem; display: grid; grid-template-columns: 1fr; gap: 2rem;
//       }
//       @media (min-width: 1024px) { .admin-dashboard { grid-template-columns: repeat(2, 1fr); } }
//       .admin-header { grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: center; padding-bottom: 1rem; margin-bottom: 1rem; border-bottom: 2px solid var(--color-bg-dark); }
//       .admin-header h1 { border-bottom: none; padding-bottom: 0; margin: 0; font-size: 2rem; color: var(--color-text-dark); }
//       .admin-form-container, .admin-college-list {
//         background-color: var(--color-bg-light); padding: 2rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
//         border: 1px solid var(--color-bg-dark); align-self: start;
//       }
//       @media (min-width: 1024px) { .admin-college-list { grid-column: 1 / -1; } }
//       .admin-form-container h3, .admin-college-list h3 { font-size: 1.25rem; font-weight: 600; margin: 0 0 1.5rem; color: var(--color-text-dark); padding-bottom: 0.75rem; border-bottom: 1px solid var(--color-bg-dark); }
//       .admin-form-container form { display: flex; flex-direction: column; gap: 1rem; }
//       .admin-form-container input, .admin-form-container select, .admin-form-container textarea { width: 100%; padding: 0.75rem 1rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.95rem; background-color: var(--color-bg-medium); transition: border-color 0.2s, box-shadow 0.2s; }
//       .admin-form-container input:focus, .admin-form-container select:focus, .admin-form-container textarea:focus { outline: none; border-color: var(--color-secondary); box-shadow: 0 0 0 3px rgba(232, 129, 36, 0.3); }
//       .admin-form-container textarea { min-height: 120px; resize: vertical; }
//       .admin-form-container .btn-primary { margin-top: 0.5rem; }
//       .admin-college-list .table-wrapper { overflow-x: auto; }
//       .admin-college-list table { width: 100%; border-collapse: collapse; }
//       .admin-college-list th, .admin-college-list td { padding: 0.85rem 1rem; text-align: left; border-bottom: 1px solid var(--color-bg-dark); white-space: nowrap; }
//       .admin-college-list th { font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-light); background-color: var(--color-bg-medium); }
//       .admin-college-list td { font-size: 0.95rem; }
//       .admin-college-list tr:last-child td { border-bottom: none; }
//       .admin-college-list tr:hover { background-color: var(--color-bg-medium); }
//       .btn-delete { background-color: #fee2e2; color: #b91c1c; border: none; padding: 0.4rem 0.8rem; border-radius: 0.375rem; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: background-color 0.2s; }
//       .btn-delete:hover { background-color: #fecaca; }
//       .admin-message { grid-column: 1 / -1; margin-top: 1rem; padding: 1rem; border-radius: 0.5rem; text-align: center; font-weight: 500; }
//       .admin-message[class*="Error"] { background-color: #fee2e2; color: #b91c1c; }
//       .admin-message:not([class*="Error"]) { background-color: #dcfce7; color: #166534; }
//       .btn-secondary { background-color: var(--color-bg-dark); color: var(--color-text-dark); font-weight: 600; padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: 1px solid #d1d5db; cursor: pointer; }
//       .btn-secondary:hover { background-color: #e5e7eb; }

//       .admin-login-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: var(--color-bg-medium); padding: 1.5rem; }
//       .admin-login-form { width: 100%; max-width: 400px; background-color: var(--color-bg-light); padding: 2.5rem; border-radius: 0.5rem; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; gap: 1.5rem; }
//       .admin-login-form h2 { text-align: center; color: var(--color-text-dark); margin: 0 0 0.5rem; font-size: 1.75rem; }
//       .admin-login-form .form-group { margin-bottom: 0; }
//       .admin-login-form .form-group label { display: block; font-weight: 600; color: var(--color-text-dark); margin-bottom: 0.5rem; }
//       .admin-login-form .form-group input { width: 100%; padding: 0.75rem 1rem; border-radius: 0.375rem; border: 1px solid #d1d5db; font-size: 1rem; }
//       .admin-login-form .form-group input:focus { outline: none; border-color: var(--color-secondary); box-shadow: 0 0 0 3px rgba(232, 129, 36, 0.3); }
//       .admin-login-form .btn-primary { width: 100%; padding: 0.875rem; font-size: 1.1rem; margin-top: 0.5rem; }
//       .admin-error { color: #b91c1c; background-color: #fee2e2; border: 1px solid #fca5a5; padding: 0.75rem; border-radius: 5px; text-align: center; font-weight: 500; margin: 0; }
//     `}</style>
//   );
// }
import React from "react";

export default function AppStyles() {
  return (
    <style>{`
      /* ⭐ 1. Import Modern Font (Poppins) */
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

      :root {
        --color-primary: #3b82f6; /* blue-500 */
        --color-primary-dark: #2563eb; /* blue-600 */
        
        /* ⭐ UPDATED: Changed secondary color from orange to blue */
        --color-secondary: #1d4ed8; /* blue-700 */
        --color-secondary-dark: #1e40af; /* blue-800 */
        
        /* ⭐ Modernized Background & Text Colors */
        --color-bg-light: #ffffff; /* white */
        --color-bg-medium: #f8f9fa; /* A softer, modern light gray */
        --color-bg-dark: #e9ecef;   /* A complementary border/hover gray */
        --color-text-dark: #1f2937; /* gray-800 */
        --color-text-medium: #4b5563; /* gray-600 */
        --color-text-light: #6b7281; /* gray-500 */
        --color-text-white: #ffffff;
      }
 
      /* --- General & Reset --- */
      body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        /* ⭐ Subtle Gradient Background for a modern feel */
        background-color: var(--color-bg-medium);
        background-image: linear-gradient(180deg, var(--color-bg-medium) 0%, var(--color-bg-dark) 100%);
        color: var(--color-text-medium);
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      a {
        text-decoration: none;
        color: var(--color-primary);
      }
      * {
        box-sizing: border-box;
      }
      /* ⭐ Add a smoother default transition to many elements */
      a, button, .college-card, .course-chip, .testimonial-card, .process-step-card, .why-choose-us-card, .stat-card, .category-summary-card {
        transition: all 0.3s ease-in-out;
      }
 
      /* ⭐ On-Scroll Fade-Up Animation Classes */
      .fade-in-section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .fade-in-section.is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* --- Utility Classes --- */
      .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      @media (min-width: 640px) { .container { max-width: 640px; } }
      @media (min-width: 768px) { .container { max-width: 768px; } }
      @media (min-width: 1024px) { .container { max-width: 1024px; } }
      @media (min-width: 1280px) { .container { max-width: 1280px; } }
 
      /* --- SVG Icons --- */
      .icon {
        width: 1.5rem;
        height: 1.5rem;
      }
      .icon-large {
        width: 2rem;
        height: 2rem;
      }
 

      /* =================================================================
         IMPROVED HEADER STYLES
         ================================================================= */
      .header {
        background-color: rgba(255, 255, 255, 0.9); /* ⭐ Slightly less opaque */
        backdrop-filter: blur(12px); /* ⭐ Stronger blur */
        position: sticky;
        top: 0;
        z-index: 50;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03); /* ⭐ Softer shadow */
        border-bottom: 1px solid var(--color-bg-dark);
      }

      .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
      }

      .header-brand {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: var(--color-text-dark);
        text-decoration: none;
      }

      .header-brand .logo {
        height: 60px;
        width: auto;
        object-fit: contain;
      }
      
      .header-brand span {
        font-size: 1.5rem;
        font-weight: 700;
        display: none;
      }
      
      @media (min-width: 768px) {
        .header-brand span {
          display: inline;
        }
      }

      .header-nav { 
        display: none;
      }
      @media (min-width: 1024px) {
        .header-nav { 
          display: flex; 
          align-items: center;
          gap: 2rem;
        }
      }

      .nav-link { 
        color: var(--color-text-medium); 
        transition: color 0.2s ease-in-out; 
        font-weight: 600;
        padding: 0.5rem 0;
        position: relative;
        text-decoration: none;
      }
      
      .nav-link:hover { 
        color: var(--color-secondary); /* Now blue-700 */
      }
      
      .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--color-secondary); /* Now blue-700 */
        transition: width 0.3s ease-in-out;
      }
      
      .nav-link:hover::after {
        width: 100%;
      }
      
      .mobile-menu-button { 
        display: block; 
        background: none; 
        border: none; 
        color: var(--color-text-dark); 
        cursor: pointer; 
        padding: 0.5rem;
        z-index: 100;
      }
      @media (min-width: 1024px) {
        .mobile-menu-button { 
          display: none; 
        }
      }

      .mobile-nav-container {
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        background-color: var(--color-bg-light);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        padding: 1rem 0;
        border-top: 1px solid var(--color-bg-dark);
      }

      .mobile-nav {
        display: flex;
        flex-direction: column;
      }

      .mobile-nav .nav-link {
        padding: 0.75rem 1.5rem;
        width: 100%;
        text-align: left;
      }

      .mobile-nav .nav-link:hover {
        background-color: var(--color-bg-medium);
      }

      
      /* --- Hero Section --- */
      @keyframes slowZoom {
        0% { transform: scale(1); }
        100% { transform: scale(1.05); }
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .hero {
        position: relative;
        height: 800px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--color-text-white);
        background-size: cover;
        background-position: center;
        overflow: hidden;
      }
      .hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: inherit;
        background-size: cover;
        background-position: center;
        animation: slowZoom 15s ease-in-out infinite alternate;
        z-index: 1;
      }
      .hero-overlay { position: absolute; inset: 0; background-color: rgba(0, 0, 0, 0.5); z-index: 2;}
      .hero-content { position: relative; z-index: 3; padding: 0 1rem; }
      
      .hero h1 { 
        font-size: 2.5rem; 
        font-weight: 800; 
        margin-bottom: 1rem; 
        animation: fadeInUp 0.8s ease-out forwards;
      }
      .hero p { 
        font-size: 1.25rem; 
        color: #e5e7eb; 
        margin-bottom: 2rem; 
        max-width: 600px; 
        margin-left: auto; 
        margin-right: auto;
        animation: fadeInUp 0.8s ease-out 0.2s forwards;
        opacity: 0;
      }
      .search-bar-container { 
        max-width: 42rem; 
        margin: 0 auto; 
        animation: fadeInUp 0.8s ease-out 0.4s forwards;
        opacity: 0;
      }
      .search-bar { position: relative; }
      .search-bar input { width: 100%; padding: 1rem 8rem 1rem 3rem; border-radius: 0.5rem; color: var(--color-text-dark); background-color: var(--color-bg-light); border: 1px solid #d1d5db; }
      .search-bar input:focus { outline: 2px solid var(--color-secondary); border-color: transparent; } /* Now blue-700 outline */
      .search-bar-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--color-text-light); }
      .search-bar-button { position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); padding: 0.625rem 1.5rem; }
      .popular-searches { margin-top: 1.5rem; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 0.75rem; color: #d1d5db; }
 
      @media (min-width: 768px) {
        .hero h1 { font-size: 3.75rem; }
        .hero p { font-size: 1.5rem; }
      }
 
      /* --- Generic Section --- */
      .section { padding: 5rem 0; }
      .section-light { background-color: var(--color-bg-light); }
      .section-medium { background-color: var(--color-bg-medium); }
      .section-header { text-align: center; margin-bottom: 3rem; }
      .section-header h2 { font-size: 2.25rem; font-weight: bold; color: var(--color-text-dark); }
      .section-header p { color: var(--color-text-medium); margin-top: 0.5rem; max-width: 600px; margin-left: auto; margin-right: auto;}
      .section-header-light h2, .section-header-light p { color: var(--color-text-white); }
      
      .grid-3 { display: grid; gap: 2rem; grid-template-columns: repeat(1, 1fr); }
      .grid-4 { display: grid; gap: 2rem; grid-template-columns: repeat(1, 1fr); }
      @media (min-width: 768px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } .grid-4 { grid-template-columns: repeat(2, 1fr); } }
      @media (min-width: 1024px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } .grid-4 { grid-template-columns: repeat(4, 1fr); } }

      /* --- About Us Page --- */
      .about-us-container { max-width: 1024px; }
      .about-title { font-size: 2.25rem; font-weight: bold; color: var(--color-text-dark); text-align: center; margin-bottom: 2rem; }
      .about-us-main-content p { line-height: 1.6; margin-bottom: 1.5rem; }
      .highlight { color: var(--color-secondary); } /* Now blue-700 */
      .vision-mission-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 3rem; }
      @media (min-width: 768px) { .vision-mission-grid { grid-template-columns: repeat(2, 1fr); } }
      .vision-mission-card { background: var(--color-bg-light); padding: 2rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);}
      .vision-mission-card h3 { font-size: 1.5rem; margin-bottom: 1rem; color: var(--color-text-dark); margin-top: 0; }
      .vision-mission-card p { line-height: 1.6; margin-bottom: 0;}
      
       /* --- Why Choose Us Section (Improved Style) --- */
      .why-choose-us-section { 
        background-color: transparent; /* ⭐ Allow body gradient to show through */
      }
      .why-choose-us-card {
        background-color: var(--color-bg-light);
        border: 1px solid var(--color-bg-dark);
        border-radius: 0.75rem;
        padding: 2rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        text-align: center;
      }
      .why-choose-us-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        border-color: var(--color-secondary); /* Now blue-700 */
      }
      .why-choose-us-icon { 
        margin: 0 auto 1.5rem;
        height: 3.75rem;
        width: 3.75rem;
        border-radius: 9999px;
        background-color: var(--color-primary);
        color: var(--color-text-white);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
      }
      .why-choose-us-card h3 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
        color: var(--color-text-dark);
      }
      .why-choose-us-card p {
        font-size: 0.875rem;
        line-height: 1.5;
        color: var(--color-text-medium);
      }

      /* --- Cards --- */
      .college-card {
        background-color: var(--color-bg-light);
        border-radius: 0.75rem;
        border: 1px solid var(--color-bg-dark);
        text-align: center;
        cursor: pointer;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
        
      .college-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);
      }
       .college-card:hover .college-card-content h4 {
        color: var(--color-secondary); /* Now blue-700 */
      }
      .college-card img { 
        width: 100%; 
        height: 180px;
        object-fit: cover; 
      }
      .college-card-content {
        padding: 1.5rem;
        margin-top: auto;
      }
      .college-card-content h4 { font-size: 1rem; font-weight: 600; color: var(--color-text-dark); margin: 0; transition: color 0.3s ease-in-out; }
      
      /* --- Courses Section --- */
      .course-chips-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
      }

      .course-chip {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--color-bg-light);
        color: var(--color-text-dark);
        padding: 1.5rem;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        text-decoration: none;
        border: 1px solid var(--color-bg-dark);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        text-align: center;
      }

      .course-chip:hover { 
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
        border-color: var(--color-secondary); /* Now blue-700 */
      }

      .course-chip:hover .icon,
      .course-chip:hover .course-chip-title {
        color: var(--color-secondary); /* Now blue-700 */
      }

      .course-chip .icon {
        color: var(--color-primary);
        margin-bottom: 1rem;
        width: 2.5rem;
        height: 2.5rem;
        transition: color 0.3s ease-in-out;
      }

      .course-chip-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.25rem;
          color: var(--color-text-dark);
          transition: color 0.3s ease-in-out;
      }

      .course-chip-count {
          font-size: 0.9rem;
          color: var(--color-text-medium);
      }
      
      /* --- Remaining styles are unchanged... --- */

      /* (The rest of your CSS file would follow, as it was in the previous version) */
      .contact-form-layout { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; max-width: 1024px; margin: 0 auto;}
      @media (min-width: 1024px) { .contact-form-layout { grid-template-columns: 1fr 1.25fr; } }
      .contact-form-image { display: none; }
      @media (min-width: 1024px) { .contact-form-image { display: block; } .contact-form-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 0.5rem; } }
      .contact-form-container { background-color: var(--color-bg-light); padding: 2.5rem; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07); }
      .form-group { margin-bottom: 1.5rem; }
      .form-group label { display: block; font-weight: 600; color: var(--color-text-dark); margin-bottom: 0.5rem; }
      .form-control { width: 100%; padding: 0.75rem 1rem; border-radius: 0.375rem; border: 1px solid #d1d5db; transition: border-color 0.3s, box-shadow 0.3s; }
      .form-control:focus { outline: none; border-color: var(--color-secondary); box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.3); } /* Updated shadow color */
      textarea.form-control { resize: vertical; }
      .form-submit-btn { width: 100%; font-size: 1.125rem; }
      .contact-info-card { text-align: center; }
      .contact-info-icon { margin: 0 auto 1.5rem; color: var(--color-primary); }
      .contact-info-card h3 { color: var(--color-text-dark); font-size: 1.25rem; margin-bottom: 0.5rem; }
      .contact-info-card p { word-wrap: break-word; }
      .map-container { border-radius: 0.5rem; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
 
      .footer { background-color: var(--color-text-dark); color: var(--color-bg-dark); }
      .footer-grid {
        padding: 3rem 0;
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(1, 1fr);
      }
      @media (min-width: 768px) { .footer-grid { grid-template-columns: repeat(4, 1fr); } }
      .footer h3 { color: var(--color-text-white); font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem; }
      .footer p, .footer li { font-size: 0.875rem; }
      .footer ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
      .footer a { color: var(--color-bg-dark); transition: color 0.3s;}
      .footer a:hover { color: var(--color-text-white); }
      .footer-bottom {
        padding: 1.5rem 0;
        border-top: 1px solid #374151; /* gray-700 */
        text-align: center;
        font-size: 0.875rem;
      }
      
               /* --- Enroll Now Page --- */
.enroll-now-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .enroll-now-grid {
    grid-template-columns: 1fr 1fr;
  }
}
.enroll-form-container {
  background-color: var(--color-bg-light);
  padding: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}
.enroll-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  box-sizing: border-box;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: 2px solid var(--color-secondary); /* Now blue-700 */
  border-color: transparent;
}
.form-submit-button {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
}
.enroll-image-container img {
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
      .blog-layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      @media (min-width: 1024px) {
        .blog-layout {
          grid-template-columns: 3fr 1fr;
        }
      }
      .blog-main-content {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
      }
      .blog-post-card {
        background: var(--color-bg-light);
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        overflow: hidden;
      }
      .blog-post-content {
        padding: 2rem;
      }
      .blog-post-title {
        margin: 0 0 0.5rem;
      }
      .blog-post-title a {
        color: var(--color-text-dark);
        font-size: 1.75rem;
        text-decoration: none;
        transition: color 0.3s;
      }
      .blog-post-title a:hover {
        color: var(--color-primary);
      }
      .blog-post-meta {
        font-size: 0.875rem;
        color: var(--color-text-light);
        margin-bottom: 1rem;
      }
      .blog-post-meta a {
        color: var(--color-text-medium);
        text-decoration: none;
      }
      .blog-post-meta a:hover {
        text-decoration: underline;
      }
      .blog-post-excerpt {
        margin-bottom: 1.5rem;
      }
      .blog-sidebar {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      .sidebar-widget {
        background: var(--color-bg-light);
        padding: 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }
      .widget-title {
        font-size: 1.25rem;
        color: var(--color-text-dark);
        margin: 0 0 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--color-bg-dark);
      }
      .widget-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .widget-list a {
        color: var(--color-text-medium);
        text-decoration: none;
        transition: color 0.3s;
      }
      .widget-list a:hover {
        color: var(--color-primary);
      }

      .blog-detail-page {
        max-width: 800px;
        margin: auto;
      }
      .blog-detail-title { font-size: 2rem; font-weight: bold; margin-bottom: 10px; }
      .blog-detail-meta { color: #6b7280; font-size: 0.9rem; margin-bottom: 20px; }
      .blog-detail-excerpt { font-style: italic; color: #374151; margin-bottom: 20px; }
      .blog-detail-content p { line-height: 1.8; color: #111827; }
      .back-btn { display: inline-block; margin-bottom: 20px; }

      .page-header {
        text-align: center;
        margin-bottom: 3rem;
        padding: 2rem 0;
        border-bottom: 1px solid var(--color-bg-dark);
      }
      .page-header h1 { font-size: 2.5rem; color: var(--color-text-dark); margin: 0; }
      .page-header p { font-size: 1.1rem; color: var(--color-text-medium); }

      .btn-outline, .btn-apply, .btn-details, .btn-primary, .btn-secondary, .form-submit-button {
        transition: all 0.3s ease;
      }
      .btn-outline:hover, .btn-apply:hover, .btn-details:hover, .btn-primary:hover, .btn-secondary:hover, .form-submit-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      .btn-outline {
        background-color: transparent;
        border: 2px solid var(--color-secondary);
        color: var(--color-secondary);
        font-weight: 600;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        display: inline-block;
      }
      .btn-outline:hover {
        background-color: var(--color-secondary);
        color: var(--color-text-white);
      }
      .btn-primary {
        background-color: var(--color-primary);
        color: var(--color-text-white);
        font-weight: 600;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
      }
      .btn-primary:hover {
        background-color: var(--color-primary-dark);
      }

      .welcome-content {
        max-width: 800px;
        margin: 0 auto 3rem;
        text-align: center;
        line-height: 1.6;
      }
      .stats-grid { display: grid; gap: 2rem; grid-template-columns: repeat(1, 1fr); }
      @media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(3, 1fr); } }
      .stat-card {
        background-color: var(--color-bg-light);
        padding: 2rem;
        border-radius: 0.5rem;
        text-align: center;
        border: 1px solid var(--color-bg-dark);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      }
      .stat-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        background-color: var(--color-secondary); /* Now blue-700 */
        color: var(--color-text-white);
      }
      .stat-card:hover .stat-card-icon,
      .stat-card:hover .stat-card-title,
      .stat-card:hover .stat-card-description {
        color: var(--color-text-white);
      }
      .stat-card-icon { color: var(--color-primary); margin-bottom: 1rem; }
      .stat-card-icon .icon-large { width: 3rem; height: 3rem; }
      .stat-card-title { font-size: 2rem; font-weight: bold; color: var(--color-text-dark); }
      .stat-card-description { color: var(--color-text-medium); font-size: 1rem; }
      
      .process-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
      @media (min-width: 768px) { .process-grid { grid-template-columns: repeat(2, 1fr); } }
      .process-column { display: flex; flex-direction: column; gap: 2rem; }
      .process-step-card {
        background-color: var(--color-bg-light);
        border: 1px solid var(--color-bg-dark);
        border-radius: 0.5rem;
        padding: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }
      .process-step-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        border-left: 5px solid var(--color-secondary); /* Now blue-700 */
      }
      .process-step-number { font-size: 0.875rem; font-weight: 600; color: var(--color-secondary); margin-bottom: 0.5rem; } /* Now blue-700 */
      .process-step-title { font-size: 1.5rem; color: var(--color-text-dark); margin-top: 0; margin-bottom: 1rem; }
      .process-step-description { color: var(--color-text-medium); line-height: 1.6; }

      .testimonial-card {
        background-color: var(--color-bg-light);
        border: 1px solid var(--color-bg-dark);
        border-radius: 0.5rem;
        padding: 2rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      }
      .testimonial-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      }
      .testimonial-profile { display: flex; align-items: center; margin-bottom: 1.5rem; gap: 1rem; }
      .testimonial-avatar img { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; }
      .testimonial-name { font-size: 1.125rem; font-weight: 600; color: var(--color-text-dark); margin: 0; }
      .testimonial-quote { font-style: italic; color: var(--color-text-medium); margin: 0; line-height: 1.6; }

      .category-summary-card-link { text-decoration: none; color: inherit; display: block; height: 100%; }
      .category-summary-card {
        background-color: var(--color-bg-light);
        border: 1px solid var(--color-bg-dark);
        border-radius: 0.5rem;
        padding: 1.5rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        text-align: center;
        height: 100%;
      }
      .category-summary-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        border-color: var(--color-secondary); /* Now blue-700 */
      }
      .category-summary-icon { color: var(--color-primary); margin-bottom: 1rem; }
      .category-summary-icon svg { width: 2.5rem; height: 2.5rem; }
      .category-summary-title { font-size: 1.25rem; font-weight: 600; color: var(--color-text-dark); margin: 0 0 0.25rem; }
      .category-summary-count { color: var(--color-text-medium); margin: 0; }

      .college-list-container, .mp-colleges-container { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; }
      .college-list-title, .stream-title { font-size: 2.5rem; font-weight: bold; color: var(--color-text-dark); text-transform: capitalize; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 2px solid var(--color-secondary); } /* Now blue-700 */
      .college-list-ul, .college-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.5rem; }
      .college-list-item, .college-item {
        display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; background-color: var(--color-bg-light); border: 1px solid var(--color-bg-dark);
        border-radius: 0.5rem; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      }
      .college-list-item:hover, .college-item:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
      .college-info { flex-grow: 1; margin-right: 1.5rem; }
      .college-name { font-size: 1.25rem; font-weight: 600; color: var(--color-text-dark); display: block; }
      .college-city { font-style: italic; color: var(--color-text-medium); font-size: 0.9rem; }
      .college-actions { display: flex; gap: 1rem; flex-shrink: 0; margin-top: 1rem; }
      @media (min-width: 768px) { .college-actions { margin-top: 0; } }
      .btn-apply, .btn-details {
        border: none; padding: 0.6rem 1.2rem; border-radius: 0.375rem; font-weight: 600; cursor: pointer; font-size: 0.875rem; text-decoration: none;
        display: inline-block; text-align: center;
      }
      .btn-apply { background-color: var(--color-secondary); color: white; } /* Now blue-700 */
      .btn-apply:hover { background-color: var(--color-secondary-dark); } /* Now blue-800 */
      .btn-details { background-color: transparent; color: var(--color-secondary); border: 1px solid var(--color-secondary); } /* Now blue-700 */
      .btn-details:hover { background-color: var(--color-secondary); color: var(--color-text-white); } /* Now blue-700 */
      
      .college-detail-container { max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem; }
      .college-detail-card { background-color: var(--color-bg-light); border: 1px solid var(--color-bg-dark); border-radius: 8px; padding: 2.5rem; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); }
      .college-detail-title { font-size: 2.5rem; font-weight: bold; color: var(--color-text-dark); margin: 0 0 0.25rem; }
      .college-detail-city { font-size: 1.1rem; color: var(--color-text-medium); margin-bottom: 2.5rem; font-style: italic; }
      .detail-section { margin-bottom: 2rem; }
      .detail-section h3 { font-size: 1.25rem; color: var(--color-text-dark); border-bottom: 2px solid var(--color-secondary); padding-bottom: 0.5rem; margin: 0 0 1rem; } /* Now blue-700 */
      .detail-section p { line-height: 1.6; margin: 0; }
      .website-link { color: var(--color-primary); text-decoration: none; font-weight: 600; }
      .website-link:hover { text-decoration: underline; }
      .back-link { display: inline-block; margin-bottom: 1.5rem; color: var(--color-primary); text-decoration: none; font-weight: 600; }
      .back-link:hover { text-decoration: underline; }
      .college-detail-actions { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--color-bg-dark); text-align: center; }
      .btn-apply-detail {
        background-color: var(--color-secondary); color: white; font-size: 1.125rem; font-weight: bold; padding: 0.75rem 2.5rem; border: none;
        border-radius: 0.5rem; cursor: pointer;
      } /* Now blue-700 */
      .btn-apply-detail:hover { background-color: var(--color-secondary-dark); } /* Now blue-800 */

      .admin-dashboard {
        max-width: 1600px; margin: 2rem auto; padding: 1.5rem; display: grid; grid-template-columns: 1fr; gap: 2rem;
      }
      @media (min-width: 1024px) { .admin-dashboard { grid-template-columns: repeat(2, 1fr); } }
      .admin-header { grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: center; padding-bottom: 1rem; margin-bottom: 1rem; border-bottom: 2px solid var(--color-bg-dark); }
      .admin-header h1 { border-bottom: none; padding-bottom: 0; margin: 0; font-size: 2rem; color: var(--color-text-dark); }
      .admin-form-container, .admin-college-list {
        background-color: var(--color-bg-light); padding: 2rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
        border: 1px solid var(--color-bg-dark); align-self: start;
      }
      @media (min-width: 1024px) { .admin-college-list { grid-column: 1 / -1; } }
      .admin-form-container h3, .admin-college-list h3 { font-size: 1.25rem; font-weight: 600; margin: 0 0 1.5rem; color: var(--color-text-dark); padding-bottom: 0.75rem; border-bottom: 1px solid var(--color-bg-dark); }
      .admin-form-container form { display: flex; flex-direction: column; gap: 1rem; }
      .admin-form-container input, .admin-form-container select, .admin-form-container textarea { width: 100%; padding: 0.75rem 1rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.95rem; background-color: var(--color-bg-medium); transition: border-color 0.2s, box-shadow 0.2s; }
      .admin-form-container input:focus, .admin-form-container select:focus, .admin-form-container textarea:focus { outline: none; border-color: var(--color-secondary); box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.3); } /* Updated shadow color */
      .admin-form-container textarea { min-height: 120px; resize: vertical; }
      .admin-form-container .btn-primary { margin-top: 0.5rem; }
      .admin-college-list .table-wrapper { overflow-x: auto; }
      .admin-college-list table { width: 100%; border-collapse: collapse; }
      .admin-college-list th, .admin-college-list td { padding: 0.85rem 1rem; text-align: left; border-bottom: 1px solid var(--color-bg-dark); white-space: nowrap; }
      .admin-college-list th { font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-light); background-color: var(--color-bg-medium); }
      .admin-college-list td { font-size: 0.95rem; }
      .admin-college-list tr:last-child td { border-bottom: none; }
      .admin-college-list tr:hover { background-color: var(--color-bg-medium); }
      .btn-delete { background-color: #fee2e2; color: #b91c1c; border: none; padding: 0.4rem 0.8rem; border-radius: 0.375rem; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: background-color 0.2s; }
      .btn-delete:hover { background-color: #fecaca; }
      .admin-message { grid-column: 1 / -1; margin-top: 1rem; padding: 1rem; border-radius: 0.5rem; text-align: center; font-weight: 500; }
      .admin-message[class*="Error"] { background-color: #fee2e2; color: #b91c1c; }
      .admin-message:not([class*="Error"]) { background-color: #dcfce7; color: #166534; }
      .btn-secondary { background-color: var(--color-bg-dark); color: var(--color-text-dark); font-weight: 600; padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: 1px solid #d1d5db; cursor: pointer; }
      .btn-secondary:hover { background-color: #e5e7eb; }

      .admin-login-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: var(--color-bg-medium); padding: 1.5rem; }
      .admin-login-form { width: 100%; max-width: 400px; background-color: var(--color-bg-light); padding: 2.5rem; border-radius: 0.5rem; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; gap: 1.5rem; }
      .admin-login-form h2 { text-align: center; color: var(--color-text-dark); margin: 0 0 0.5rem; font-size: 1.75rem; }
      .admin-login-form .form-group { margin-bottom: 0; }
      .admin-login-form .form-group label { display: block; font-weight: 600; color: var(--color-text-dark); margin-bottom: 0.5rem; }
      .admin-login-form .form-group input { width: 100%; padding: 0.75rem 1rem; border-radius: 0.375rem; border: 1px solid #d1d5db; font-size: 1rem; }
      .admin-login-form .form-group input:focus { outline: none; border-color: var(--color-secondary); box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.3); } /* Updated shadow color */
      .admin-login-form .btn-primary { width: 100%; padding: 0.875rem; font-size: 1.1rem; margin-top: 0.5rem; }
      .admin-error { color: #b91c1c; background-color: #fee2e2; border: 1px solid #fca5a5; padding: 0.75rem; border-radius: 5px; text-align: center; font-weight: 500; margin: 0; }
    `}</style>
  );
}
