
import React from 'react';
// ⭐ 1. Import the custom hook for scroll animations
import useOnScreen from '../hooks/useOnScreen'; // Make sure this path is correct

// --- Local SVG Icons ---
const EngineeringIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l-8.5 8.5a5 5 0 1 0 7 7l7-7-7-7zM12 2v7h7"/></svg>;
const ManagementIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect x="2" y="10" width="4" height="10"/><rect x="18" y="10" width="4" height="10"/></svg>;
const MedicalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>;
const PharmacyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>;
const LawIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M18 9l-6-6-6 6"/></svg>;
const ArtsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>;
const AgricultureIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"/></svg>;
const ArchitectureIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>;
    

// Data for the summary cards with slugs for routing
const categories = [
    { name: 'Engineering', count: '50+', Icon: EngineeringIcon, slug: 'engineering' },
    { name: 'Management / MBA', count: '60+', Icon: ManagementIcon, slug: 'management' },
    { name: 'Medical & Allied', count: '25+', Icon: MedicalIcon, slug: 'medical-allied-sciences' },
    { name: 'Pharmacy', count: '30+', Icon: PharmacyIcon, slug: 'pharmacy' },
    { name: 'Law', count: '20+', Icon: LawIcon, slug: 'law' },
    { name: 'Arts, Science & Commerce', count: '100+', Icon: ArtsIcon, slug: 'arts-science-commerce' },
    { name: 'Agriculture', count: '20+', Icon: AgricultureIcon, slug: 'agriculture' },
    { name: 'Architecture & Design', count: '20+', Icon: ArchitectureIcon, slug: 'architecture-design' },
];


// --- Category Card with Animation Logic ---
const CategoryCard = ({ name, count, Icon, slug, index }) => {
    // ⭐ 2. Use the hook to get a ref and the visibility state
    const [ref, isVisible] = useOnScreen({
        threshold: 0.1, // Animate when 10% of the card is visible
    });

    return (
        // ⭐ 3. Attach the ref and apply animation classes to the link
        <a
            ref={ref}
            href={`/colleges/${slug}`}
            className={`category-summary-card-link fade-in-section ${isVisible ? 'is-visible' : ''}`}
            // ⭐ 4. Stagger the animation using the index
            style={{ transitionDelay: `${index * 75}ms` }}
        >
            <div className="category-summary-card">
                <div className="category-summary-icon">
                    <Icon />
                </div>
                <div className="category-summary-content">
                    <h3 className="category-summary-title">{name}</h3>
                    <p className="category-summary-count">{count} Colleges</p>
                </div>
            </div>
        </a>
    );
};


// --- Main Component ---
export default function CollegeCategoriesSummary() {
    return (
        <section className="section section-medium">
            <div className="container">
                <div className="section-header">
                    <h2>Explore by Stream</h2>
                    <p>Find the perfect college from thousands of options available across different streams in Madhya Pradesh.</p>
                </div>
                <div className="grid-4">
                    {categories.map((category, index) => (
                        // ⭐ 5. Pass the index as a prop to the card
                        <CategoryCard key={category.name} {...category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}