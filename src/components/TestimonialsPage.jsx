
import React from 'react';
// ⭐ 1. Import the custom hook for scroll animations
import useOnScreen from '../hooks/useOnScreen'; // Make sure this path is correct

// --- Import local images ---
import jiyaImg from '../assets/jiya';
import sakshamImg from '../assets/saksham';
// import mahakImg from '../assets/';
import devanshImg from '../assets/devansh.png';
import archieImg from '../assets/Archie';

// --- Testimonial Data ---
const testimonials = [
    {
        name: 'Jiya Hingorani',
        image: jiyaImg,
        quote: "CollegeXplorer has been my guiding light through the maze of higher education choices. Their personalized counseling sessions helped me uncover my true aspirations and chart a path towards my dream college. Thank you for making my journey a smooth and memorable one!"
    },
    {
        name: 'Saksham Bajaj',
        image: sakshamImg,
        quote: "CollegeXplorer turned my confusion into clarity. Their personalized approach and deep understanding of my ambitions helped me make informed decisions about my future. I highly recommend them to anyone seeking expert guidance for their higher education journey."
    },
    {
        name: 'Mahak Yadwani',
        image: 'https://placehold.co/100x100/E5E7EB/4B5563?text=MY',
        quote: "With their assistance, I not only identified the perfect college but also smoothly completed the enrollment process. CollegeXplorer's support was instrumental in shaping my college journey."
    },
    {
        name: 'Devansh Surana',
        image: devanshImg,
        quote: "CollegeXplorer has been a game-changer. Their dedicated team took the time to understand my unique talents and ambitions, providing personalized guidance every step of the way. I am now on the path to realizing my dreams with confidence."
    },
    {
        name: 'Archie Talreja',
        image: archieImg,
        quote: "I am incredibly grateful to CollegeXplorer for their unwavering support. They went above and beyond to guide me towards colleges that aligned perfectly with my goals. They truly made the daunting task of college selection a breeze for me."
    }
];


// --- Testimonial Card with Animation Logic ---
const TestimonialCard = ({ name, image, quote, index }) => {
    // ⭐ 2. Use the hook to get a ref and the visibility state
    const [ref, isVisible] = useOnScreen({
        threshold: 0.2, // Animate when 20% of the card is visible
    });

    return (
        // ⭐ 3. Attach the ref and apply animation classes
        <div
            ref={ref}
            className={`testimonial-card fade-in-section ${isVisible ? 'is-visible' : ''}`}
            // ⭐ 4. Stagger the animation using the index
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="testimonial-profile">
                <div className="testimonial-avatar">
                    <img src={image} alt={name} />
                </div>
                <div className="testimonial-meta">
                    <h3 className="testimonial-name">{name}</h3>
                </div>
            </div>
            <p className="testimonial-quote">"{quote}"</p>
        </div>
    );
};


// --- Main Page Component ---
export default function TestimonialsPage() {
    return (
        <section className="section section-light">
            <div className="container">
                <div className="section-header">
                    <h2>Student Success Stories</h2>
                    <p>Hear From Our Students About Their Experiences and Achievements</p>
                </div>
                <div className="grid-3">
                    {testimonials.map((testimonial, index) => (
                        // ⭐ 5. Pass the index as a prop to the card
                        <TestimonialCard key={index} {...testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}