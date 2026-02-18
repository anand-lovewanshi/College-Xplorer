// import React from 'react';
// import { Link } from 'react-router-dom';

// // --- Import local images for private colleges ---
// import sageLogo from '../assets/SAGE_Logo.jpg';
// import symbiosis from '../assets/Symbiosis.png';
// import iist from '../assets/iist.png';
// import acro from '../assets/Acropolis.png';
// import medi from '../assets/Medicaps.png';
// import prestige from '../assets/Prestige.png';
// import renais from '../assets/Renaissance.png';
// import jaipuriaLogo from '../assets/jaipuria_logo.png';
// import lnctLogo from '../assets/lnct_logo.png';
// import amityLogo from '../assets/amity_logo.png';
// import prestigeGwaliorLogo from '../assets/Prestige.png';
// import jluLogo from '../assets/jlu_logo.png';
// import jaypeeLogo from '../assets/jaypee_logo.png';
// import itmLogo from '../assets/itm_logo.png';
// import saimsLogo from '../assets/saims_logo.png';
// import peoplesLogo from '../assets/peoples_logo.png';
// import avantikaLogo from '../assets/avantika_logo.png';
// import iilLogo from '../assets/iil_logo.png';
// import bsssLogo from '../assets/bsss_logo.png';
// import aksLogo from '../assets/aks_logo.png';
// const collegesData = [
//     { name: "Sage University, School of Agriculture", image: sageLogo, stream: 'agriculture' },
//     { name: "Symbiosis University of Applied Sciences", image: symbiosis, stream: 'management' },
//     { name: "Indore Institute of Science and Technology", image: iist, stream: 'engineering' },
//     { name: "Acropolis Institute of Technology and Research", image: acro, stream: 'engineering' },
//     { name: "Medi-Caps University", image: medi, stream: 'management' },
//     { name: "Prestige Institute of Management and Research", image: prestige, stream: 'management' },
//     { name: "Renaissance Law College", image: renais, stream: 'law' },
//     { name: "Jaipuria Institute of Management", image: jaipuriaLogo, stream: 'management' },
//     { name: "LNCT University", image: lnctLogo, stream: 'engineering' },
//     { name: "Amity University", image: amityLogo, stream: 'management' },
//     { name: "Prestige Institute of Management", image: prestigeGwaliorLogo, stream: 'management' },
//     { name: "Jagran Lakecity University", image: jluLogo, stream: 'law' },
//     { name: "Jaypee University of Engineering and Technology", image: jaypeeLogo, stream: 'engineering' },
//     { name: "ITM University", image: itmLogo, stream: 'engineering' },
//     { name: "Sri Aurobindo Institute of Medical Sciences (SAIMS)", image: saimsLogo, stream: 'medical-allied-sciences' },
//     { name: "People's College of Medical Sciences & Research Centre", image: peoplesLogo, stream: 'medical-allied-sciences' },
//     { name: "Avantika University", image: avantikaLogo, stream: 'architecture-design' },
//     { name: "Indore Institute of Law", image: iilLogo, stream: 'law' },
//     { name: "The Bhopal School of Social Sciences (BSSS)", image: bsssLogo, stream: 'arts-science-commerce' },
//     { name: "AKS University", image: aksLogo, stream: 'agriculture' }, 
// ];

// // --- Sub-Component for College Card ---
// const CollegeCard = ({ name, image, stream }) => (
//     <Link to={`/colleges/${stream}/${encodeURIComponent(name)}`} className="college-card-link">
//         <div className="college-card">
//             <img src={image} alt={name} className="college-card-img" />
//             <div className="college-card-content">
//                 <h4>{name}</h4>
//             </div>
//         </div>
//     </Link>
// );

// // --- Main Component ---
// export default function CollegesSection() {
//     return (
//         <section className="section">
//             <div className="container">
//                 <div className="section-header">
//                     <h2>Our Popular Colleges</h2>
//                     <p>Explore top-rated institutions for your future.</p>
//                 </div>
//                 <div className="grid-4">
//                     {collegesData.map((college, index) => (
//                         <CollegeCard 
//                             key={index} 
//                             name={college.name} 
//                             image={college.image}
//                             stream={college.stream} 
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
import React from 'react';
import { Link } from 'react-router-dom';
// ⭐ 1. Import the custom hook for scroll animations
import useOnScreen from '../hooks/useOnScreen'; // Make sure this path is correct

// --- Import local images for private colleges ---
import sageLogo from '../assets/SAGE_Logo.jpg';
import symbiosis from '../assets/Symbiosis.png';
import iist from '../assets/iist.png';
import acro from '../assets/Acropolis.png';
import medi from '../assets/Medicaps.png';
import prestige from '../assets/Prestige.png';
import renais from '../assets/Renaissance.png';
import jaipuriaLogo from '../assets/jaipuria_logo.png';
import lnctLogo from '../assets/lnct_logo.png';
import amityLogo from '../assets/amity_logo.png';
import prestigeGwaliorLogo from '../assets/Prestige.png';
import jluLogo from '../assets/jlu_logo.png';
import jaypeeLogo from '../assets/jaypee_logo.png';
import itmLogo from '../assets/itm_logo.png';
import saimsLogo from '../assets/saims_logo.png';
import peoplesLogo from '../assets/peoples_logo.png';
import avantikaLogo from '../assets/avantika_logo.png';
import iilLogo from '../assets/iil_logo.png';
import bsssLogo from '../assets/bsss_logo.png';
import aksLogo from '../assets/aks_logo.png';

const collegesData = [
    { name: "Sage University, School of Agriculture", image: sageLogo, stream: 'agriculture' },
    { name: "Symbiosis University of Applied Sciences", image: symbiosis, stream: 'management' },
    { name: "Indore Institute of Science and Technology", image: iist, stream: 'engineering' },
    { name: "Acropolis Institute of Technology and Research", image: acro, stream: 'engineering' },
    { name: "Medi-Caps University", image: medi, stream: 'management' },
    { name: "Prestige Institute of Management and Research", image: prestige, stream: 'management' },
    { name: "Renaissance Law College", image: renais, stream: 'law' },
    { name: "Jaipuria Institute of Management", image: jaipuriaLogo, stream: 'management' },
    { name: "LNCT University", image: lnctLogo, stream: 'engineering' },
    { name: "Amity University", image: amityLogo, stream: 'management' },
    { name: "Prestige Institute of Management", image: prestigeGwaliorLogo, stream: 'management' },
    { name: "Jagran Lakecity University", image: jluLogo, stream: 'law' },
    { name: "Jaypee University of Engineering and Technology", image: jaypeeLogo, stream: 'engineering' },
    { name: "ITM University", image: itmLogo, stream: 'engineering' },
    { name: "Sri Aurobindo Institute of Medical Sciences (SAIMS)", image: saimsLogo, stream: 'medical-allied-sciences' },
    { name: "People's College of Medical Sciences & Research Centre", image: peoplesLogo, stream: 'medical-allied-sciences' },
    { name: "Avantika University", image: avantikaLogo, stream: 'architecture-design' },
    { name: "Indore Institute of Law", image: iilLogo, stream: 'law' },
    { name: "The Bhopal School of Social Sciences (BSSS)", image: bsssLogo, stream: 'arts-science-commerce' },
    { name: "AKS University", image: aksLogo, stream: 'agriculture' },
];

// --- Sub-Component for College Card with Animation Logic ---
const CollegeCard = ({ name, image, stream, index }) => {
    // ⭐ 2. Use the hook to get a ref and the visibility state
    const [ref, isVisible] = useOnScreen({
        threshold: 0.1, // Animate when 10% of the card is visible
    });

    return (
        // ⭐ 3. Attach the ref and apply animation classes to the Link
        <Link
            ref={ref}
            to={`/colleges/${stream}/${encodeURIComponent(name)}`}
            className={`college-card-link fade-in-section ${isVisible ? 'is-visible' : ''}`}
            // ⭐ 4. Use the index to create a staggered animation effect
            style={{ transitionDelay: `${index * 75}ms` }}
        >
            <div className="college-card">
                <img src={image} alt={name} className="college-card-img" />
                <div className="college-card-content">
                    <h4>{name}</h4>
                </div>
            </div>
        </Link>
    );
};


// --- Main Component ---
export default function CollegesSection() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-header">
                    <h2>Our Popular Colleges</h2>
                    <p>Explore top-rated institutions for your future.</p>
                </div>
                <div className="grid-4">
                    {collegesData.map((college, index) => (
                        <CollegeCard
                            key={index}
                            // ⭐ 5. Pass the index prop to the card component
                            index={index}
                            name={college.name}
                            image={college.image}
                            stream={college.stream}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}