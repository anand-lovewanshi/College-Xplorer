// import React from 'react';
// import { Link } from 'react-router-dom';

// // Updated data structure to map courses to their stream slugs
// const courses = [
//   { name: 'BBA', streamSlug: 'management' },
//   { name: 'B.com', streamSlug: 'arts-science-commerce' },
//   { name: 'BBA Honors', streamSlug: 'management' },
//   { name: 'B.com Honors', streamSlug: 'arts-science-commerce' },
//   { name: 'MBA', streamSlug: 'management' },
//   { name: 'B Pharm', streamSlug: 'medical-allied-sciences' },
//   { name: 'B.Tech', streamSlug: 'engineering' },
//   { name: 'Law', streamSlug: 'law' },
//   { name: 'Ba-LLB', streamSlug: 'law' },
//   { name: 'B.com - LLB', streamSlug: 'law' },
//   { name: 'BBA - LLB', streamSlug: 'law' },
//   { name: 'LLB', streamSlug: 'law' },
//   { name: 'LLM', streamSlug: 'law' },
//   { name: 'Fashion Designing', streamSlug: 'architecture-design' },
//   { name: 'Interior Designing', streamSlug: 'architecture-design' },
//   { name: 'M.Tech', streamSlug: 'engineering' },
//   { name: 'BCA', streamSlug: 'computer-application' },
//   { name: 'MCA', streamSlug: 'computer-application' },
//   { name: 'B.Sc', streamSlug: 'arts-science-commerce' },
//   { name: 'M.Sc', streamSlug: 'arts-science-commerce' },
//   { name: 'BA', streamSlug: 'arts-science-commerce' },
//   { name: 'MA', streamSlug: 'arts-science-commerce' },
//   { name: 'MBBS', streamSlug: 'medical-allied-sciences' },
//   { name: 'BDS', streamSlug: 'medical-allied-sciences' },
//   { name: 'PhD', streamSlug: 'arts-science-commerce' },
//   { name: 'B.Arch', streamSlug: 'architecture-design' },
//   { name: 'B.Ed', streamSlug: 'education' },
//   { name: 'M.Ed', streamSlug: 'education' },
//   { name: 'Journalism', streamSlug: 'journalism-mass-communication' },
//   { name: 'Hotel Management', streamSlug: 'hospitality' },
// ];

// export default function CoursesSection() {
//   return (
//     <section className="section section-medium">
//       <div className="container">
//         <div className="section-header">
//           <h2>Our Popular Courses</h2>
//           <p>Explore a wide range of courses to find the perfect one for you.</p>
//         </div>
//         <div className="course-chips-container">
//           {courses.map((course, index) => (
//             // Each chip is now a Link to the corresponding college list page
//             <Link to={`/colleges/${course.streamSlug}`} key={index} className="course-chip">
//               {course.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
    
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';
// 1. Import the custom hook for scroll animations
import useOnScreen from '../hooks/useOnScreen'; // Make sure this path is correct

// --- Data for Courses ---
const courses = [
  { name: 'BBA', streamSlug: 'management' },
  { name: 'B.com', streamSlug: 'arts-science-commerce' },
  { name: 'BBA Honors', streamSlug: 'management' },
  { name: 'B.com Honors', streamSlug: 'arts-science-commerce' },
  { name: 'MBA', streamSlug: 'management' },
  { name: 'B Pharm', streamSlug: 'medical-allied-sciences' },
  { name: 'B.Tech', streamSlug: 'engineering' },
  { name: 'Law', streamSlug: 'law' },
  { name: 'Ba-LLB', streamSlug: 'law' },
  { name: 'B.com - LLB', streamSlug: 'law' },
  { name: 'BBA - LLB', streamSlug: 'law' },
  { name: 'LLB', streamSlug: 'law' },
  { name: 'LLM', streamSlug: 'law' },
  { name: 'Fashion Designing', streamSlug: 'architecture-design' },
  { name: 'Interior Designing', streamSlug: 'architecture-design' },
  { name: 'M.Tech', streamSlug: 'engineering' },
  { name: 'BCA', streamSlug: 'computer-application' },
  { name: 'MCA', streamSlug: 'computer-application' },
  { name: 'B.Sc', streamSlug: 'arts-science-commerce' },
  { name: 'M.Sc', streamSlug: 'arts-science-commerce' },
  { name: 'BA', streamSlug: 'arts-science-commerce' },
  { name: 'MA', streamSlug: 'arts-science-commerce' },
  { name: 'MBBS', streamSlug: 'medical-allied-sciences' },
  { name: 'BDS', streamSlug: 'medical-allied-sciences' },
  { name: 'PhD', streamSlug: 'arts-science-commerce' },
  { name: 'B.Arch', streamSlug: 'architecture-design' },
  { name: 'B.Ed', streamSlug: 'education' },
  { name: 'M.Ed', streamSlug: 'education' },
  { name: 'Journalism', streamSlug: 'journalism-mass-communication' },
  { name: 'Hotel Management', streamSlug: 'hospitality' },
];

// --- Animated Chip Component ---
// This new component wraps the Link and handles the animation logic.
const AnimatedCourseChip = ({ course, index }) => {
    // 2. Use the hook to get a ref and the visibility state
    const [ref, isVisible] = useOnScreen({
        threshold: 0.1, // Animate when 10% of the chip is visible
        triggerOnce: true,
    });

    return (
        // 3. Attach the ref and apply animation classes to the Link
        <Link
            ref={ref}
            to={`/colleges/${course.streamSlug}`}
            className={`course-chip fade-in-section ${isVisible ? 'is-visible' : ''}`}
            // 4. Use the index to create a staggered animation effect
            style={{ transitionDelay: `${index * 50}ms` }}
        >
            {course.name}
        </Link>
    );
};


// --- Main Section Component ---
export default function CoursesSection() {
    return (
        <section className="section section-medium">
            <div className="container">
                <div className="section-header">
                    <h2>Our Popular Courses</h2>
                    <p>Explore a wide range of courses to find the perfect one for you.</p>
                </div>
                <div className="course-chips-container">
                    {courses.map((course, index) => (
                        // Use the new animated component
                        <AnimatedCourseChip key={index} course={course} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}