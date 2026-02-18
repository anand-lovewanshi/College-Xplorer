import React from 'react';

const CollegeCard = ({ image, name, location, description }) => (
    <div className="college-card">
        <img src={image} alt={name} />
        <div className="college-card-content">
            <h3>{name}</h3>
            <p className="location">{location}</p>
            <p className="description">{description}</p>
        </div>
    </div>
);

export default function TopCollegesSection() {
    const colleges = [
        { image: 'https://placehold.co/600x400/1b263b/e0e1dd?text=IIT+Delhi', name: 'IIT Delhi', location: 'New Delhi, Delhi', description: 'Renowned for its engineering and technology programs.' },
        { image: 'https://placehold.co/600x400/415a77/e0e1dd?text=IIM+Ahmedabad', name: 'IIM Ahmedabad', location: 'Ahmedabad, Gujarat', description: 'A premier institute for management education in India.' },
        { image: 'https://placehold.co/600x400/778da9/e0e1dd?text=AIIMS+Delhi', name: 'AIIMS Delhi', location: 'New Delhi, Delhi', description: 'The top medical college for its research and healthcare.' },
        { image: 'https://placehold.co/600x400/0d1b2a/e0e1dd?text=NID+Ahmedabad', name: 'NID Ahmedabad', location: 'Ahmedabad, Gujarat', description: 'A leading multi-disciplinary institute in design education.' },
    ];
    return (
        <section className="section section-medium">
            <div className="container">
                <div className="section-header">
                    <h2>Explore Top Colleges</h2>
                    <p>Discover institutions known for their academic excellence.</p>
                </div>
                <div className="grid-4">
                    {colleges.map((college, index) => <CollegeCard key={index} {...college} />)}
                </div>
                 <div className="section-view-all">
                    <button className="btn-outline">
                        View All Colleges
                    </button>
                </div>
            </div>
        </section>
    );
};
