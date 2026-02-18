// import React from 'react';

// const ProcessStep = ({ number, title, description }) => (
//   <div className="process-step-card">
//     <div className="process-step-number">{`Step ${number}`}</div>
//     <h3 className="process-step-title">{title}</h3>
//     <p className="process-step-description">{description}</p>
//   </div>
// );

// export default function AdmissionProcessPage() {
//   return (
//     <section className="section section-light">
//       <div className="container">
//         <div className="section-header">
//           <h2>Admission Process</h2>
//           <p>End-to-end Admission Process Simplified</p>
//         </div>
//         <div className="process-grid">
//           <div className="process-column">
//             <ProcessStep 
//               number={1}
//               title="Register"
//               description="Just drop in your phone number to register."
//             />
//             <ProcessStep 
//               number={3}
//               title="Shortlist Colleges"
//               description="Shortlist your dream colleges and apply with a single application to multiple colleges."
//             />
//             <ProcessStep 
//               number={5}
//               title="Upload Documents & Pay Fee"
//               description="Expedite your college application process by uploading your documents & paying the college fees."
//             />
//           </div>
//           <div className="process-column">
//             <ProcessStep 
//               number={2}
//               title="Get Expert Help"
//               description="A personal Education Mentor will assist you at every step. Get all your queries and doubts answered by the experts."
//             />
//             <ProcessStep 
//               number={4}
//               title="Confirm Admission"
//               description="Confirm your seat at the selected college."
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';
// ⭐ 1. Import the custom hook for scroll animations
import useOnScreen from '../hooks/useOnScreen'; // Make sure this path is correct

// --- Process Step Component with Animation Logic ---
const ProcessStep = ({ number, title, description, index }) => {
    // ⭐ 2. Use the hook to get a ref and the visibility state
    const [ref, isVisible] = useOnScreen({
        threshold: 0.2, // Animate when 20% of the card is visible
    });

    return (
        // ⭐ 3. Attach the ref and apply animation classes
        <div
            ref={ref}
            className={`process-step-card fade-in-section ${isVisible ? 'is-visible' : ''}`}
            // ⭐ 4. Stagger the animation using the index
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="process-step-number">{`Step ${number}`}</div>
            <h3 className="process-step-title">{title}</h3>
            <p className="process-step-description">{description}</p>
        </div>
    );
};


// --- Main Page Component ---
export default function AdmissionProcessPage() {
    // ⭐ 5. Consolidate process steps into a single array for easier mapping
    const steps = [
        { number: 1, title: "Register", description: "Just drop in your phone number to register." },
        { number: 2, title: "Get Expert Help", description: "A personal Education Mentor will assist you at every step. Get all your queries and doubts answered by the experts." },
        { number: 3, title: "Shortlist Colleges", description: "Shortlist your dream colleges and apply with a single application to multiple colleges." },
        { number: 4, title: "Confirm Admission", description: "Confirm your seat at the selected college." },
        { number: 5, title: "Upload Documents & Pay Fee", description: "Expedite your college application process by uploading your documents & paying the college fees." },
    ];

    return (
        <section className="section section-light">
            <div className="container">
                <div className="section-header">
                    <h2>Admission Process</h2>
                    <p>End-to-end Admission Process Simplified</p>
                </div>
                <div className="process-grid">
                    {/* Map over the steps array to render each column and card */}
                    <div className="process-column">
                        {steps.filter((_, i) => i % 2 === 0).map((step, index) => (
                            <ProcessStep key={step.number} {...step} index={index * 2} />
                        ))}
                    </div>
                    <div className="process-column">
                        {steps.filter((_, i) => i % 2 !== 0).map((step, index) => (
                            <ProcessStep key={step.number} {...step} index={index * 2 + 1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}