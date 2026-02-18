import React from 'react';

const whyChooseUsData = [
  { title: 'Explore Options', description: "With CollegeXplorer, the world of higher education is at your fingertips. Our expert counselors will help you explore all your accessible options, providing invaluable insights and guidance every step of the way." },
  { title: 'Easy Research', description: "At CollegeXplorer, we make research easy and efficient. Our advanced research options, including our college comparator tool, allow you to compare institutions and programs effortlessly." },
  { title: 'Professional Assistance', description: "From filling out forms to navigating the complexities of college eligibility and selection, CollegeXplorer offers unparalleled professional assistance at every step of your journey." },
  { title: 'Personalized Approach', description: "We take a personalized approach to counseling, taking the time to understand your unique strengths, interests, and goals. With our tailored guidance, you can be confident that your academic journey is in good hands." },
  { title: 'Proven Track Record', description: "Our track record of success speaks for itself, with many of our clients going on to excel in their chosen fields. When you choose CollegExplorer, you're choosing a partner with a proven track record of excellence." },
  { title: 'Transparent Communication', description: "We prioritize transparency and openness in all our interactions. From clear explanations of our services to regular updates on your progress, you can trust that you'll always be kept informed." },
];

export default function AboutUsPage() {
  return (
    <>
      <div className="section section-light">
        <div className="container about-us-container">
          <div className="about-us-main-content">
            <h2 className="about-title"><span className="highlight">About</span> CollegeXplorer</h2>
            <p>At <strong>CollegeXplorer</strong>, we’re driven by the belief in the transformative power of education and its ability to shape brighter futures. We stand by the philosophy that every student deserves not only guidance but also unwavering support and belief in their potential. Our mission is clear: to empower individuals to soar to new heights of academic success.</p>
            <p>With a rich history spanning over 5 years, CollegeXplorer has emerged as a trailblazer in educational consultancy, deeply rooted in the vibrant city of Indore, Madhya Pradesh. Over the years, we have proudly assisted countless students in realizing their academic aspirations, offering comprehensive counseling and guidance across a wide spectrum of educational pathways.</p>
          </div>
          <div className="vision-mission-grid">
            <div className="vision-mission-card">
              <h3><span className="highlight">Vision</span> Statement</h3>
              <p>At <strong>CollegeXplorer</strong>, our vision is to be the beacon of light guiding students towards their academic aspirations. We envision a future where every individual has access to personalized education guidance, empowering them to unlock their full potential and achieve their dreams.</p>
            </div>
            <div className="vision-mission-card">
              <h3><span className="highlight">Mission</span> Statement</h3>
              <p>Our mission at CollegeXplorer is to empower individuals on their academic journey by providing comprehensive, personalized guidance and support. We are committed to leveraging our expertise and resources to help students navigate the complexities of the educational landscape with clarity and confidence.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section why-choose-us-section">
        <div className="container">
          <div className="section-header section-header-light">
            <h2>Why Choose Us</h2>
            <p>The top reasons for you to join us</p>
          </div>
          <div className="grid-3">
            {whyChooseUsData.map((item, index) => (
              <div key={index} className="why-choose-us-card">
                <div className="why-choose-us-icon">
                  <span>&#10003;</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
