// import React from 'react';

// // Define icons directly in the component to avoid import issues
// const FormIcon = () => (
//   <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
//   </svg>
// );
// const GraduationCapIcon = () => (
//   <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12 14l9-5-9-5-9 5 9 5z" />
//     <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z" />
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zM3 10v6a9 9 0 009 9 9 9 0 009-9v-6" />
//   </svg>
// );
// const UsersIcon = () => (
//   <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//   </svg>
// );


// const StatCard = ({ icon, title, description }) => (
//   <div className="stat-card">
//     <div className="stat-card-icon">{icon}</div>
//     <div className="stat-card-title">{title}</div>
//     <div className="stat-card-description">{description}</div>
//   </div>
// );

// export default function Welcome() {
//   return (
//     <section className="section section-medium">
//       <div className="container">
//         <div className="section-header">
//           <h2>Welcome to CollegeXplorer</h2>
//           <p>Your Gateway to Academic Excellence</p>
//         </div>
//         <div className="welcome-content">
//           <p>
//             Embark on a journey of discovery and possibility with CollegeXplorer, where every dream finds its compass and every aspiration is nurtured into reality. As you stand on the threshold of your academic future, let us be your guiding light, illuminating the path towards success with unwavering support and personalized guidance.
//           </p>
//           <p>
//             At <strong>CollegeXplorer</strong>, we understand that the journey to higher education is as unique as you are. That's why we're committed to offering more than just advice – we're here to empower you with the knowledge, tools, and resources you need to make informed decisions that shape your future.
//           </p>
//         </div>
//         <div className="stats-grid">
//           <StatCard 
//             icon={<FormIcon />}
//             title="5,00,000+"
//             description="Applications Filled"
//           />
//           <StatCard 
//             icon={<GraduationCapIcon />}
//             title="1,00,000+"
//             description="Admissions Done"
//           />
//           <StatCard 
//             icon={<UsersIcon />}
//             title="1500+"
//             description="Expert Counsellors"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
// ⭐ 1. Import the custom hook for scroll animations
import useOnScreen from '../hooks/useOnScreen'; // Make sure this path is correct

// --- Local SVG Icons ---
const FormIcon = () => (
  <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);
const GraduationCapIcon = () => (
  <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zM3 10v6a9 9 0 009 9 9 9 0 009-9v-6" />
  </svg>
);
const UsersIcon = () => (
  <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);


// --- StatCard Component with Animation Logic ---
const StatCard = ({ icon, title, description, index }) => {
    // ⭐ 2. Use the hook to get a ref and the visibility state
    const [ref, isVisible] = useOnScreen({
        threshold: 0.2, // Animate when 20% of the card is visible
    });

    return (
        // ⭐ 3. Attach the ref and apply animation classes
        <div
            ref={ref}
            className={`stat-card fade-in-section ${isVisible ? 'is-visible' : ''}`}
            // ⭐ 4. Stagger the animation using the index
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="stat-card-icon">{icon}</div>
            <div className="stat-card-title">{title}</div>
            <div className="stat-card-description">{description}</div>
        </div>
    );
};


// --- Main Welcome Component ---
export default function Welcome() {
    // We create an array for the stats to easily map over them
    const stats = [
        { icon: <FormIcon />, title: "5,00,000+", description: "Applications Filled" },
        { icon: <GraduationCapIcon />, title: "1,00,000+", description: "Admissions Done" },
        { icon: <UsersIcon />, title: "1500+", description: "Expert Counsellors" }
    ];

    return (
        <section className="section section-medium">
            <div className="container">
                <div className="section-header">
                    <h2>Welcome to CollegeXplorer</h2>
                    <p>Your Gateway to Academic Excellence</p>
                </div>
                <div className="welcome-content">
                    <p>
                        Embark on a journey of discovery and possibility with CollegeXplorer, where every dream finds its compass and every aspiration is nurtured into reality. As you stand on the threshold of your academic future, let us be your guiding light, illuminating the path towards success with unwavering support and personalized guidance.
                    </p>
                    <p>
                        At <strong>CollegeXplorer</strong>, we understand that the journey to higher education is as unique as you are. That's why we're committed to offering more than just advice – we're here to empower you with the knowledge, tools, and resources you need to make informed decisions that shape your future.
                    </p>
                </div>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            // ⭐ 5. Pass all props, including the index
                            index={index}
                            icon={stat.icon}
                            title={stat.title}
                            description={stat.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}