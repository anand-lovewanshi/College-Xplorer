import React from "react";

import { useState, useEffect } from "react";

// export default function HeroSection() {
//     return (
//         <div className="hero" style= {{ backgroundImage: `url(${bgImage})` }}>
//             <div className="hero-overlay"></div>
//             <div className="hero-content">
//                 <h1>Find Your Dream College</h1>
//                 <p>A Glimpse into the Future of Your Education</p>
//                 {/* <div className="search-bar-container">
//                     <div className="search-bar">
//                         <input type="text" placeholder="Search for colleges, courses, or exams..." />
//                         <div className="search-bar-icon">
//                             <SearchIcon />
//                         </div>
//                          <button className="btn-primary search-bar-button">
//                             Search
//                         </button>
//                     </div>
//                     <div className="popular-searches">
//                         <span>Popular Searches:</span>
//                         <CourseChip name="MBA" />
//                         <CourseChip name="B.Tech" />
//                         <CourseChip name="Medical" />
//                         <CourseChip name="Design" />
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     );
// }

import bg1 from "../assets/1_bg_img_png.webp";
import bg2 from "../assets/bg_img_4.png";
import bg3 from "../assets/bg_img_3.png";
import bg4 from "../assets/bg_img_4.png";

const HeroSection = () => {
  const images = [bg1, bg2, bg3, bg4];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000); // 60000ms = 1 minute

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Find Your Dream College</h1>
      </div>
    </div>
  );
};

export default HeroSection;
