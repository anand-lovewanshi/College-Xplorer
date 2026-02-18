
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { collegeData as staticCollegeData } from "../data/collegedata.js"; // Import static data

// const CollegeListPage = () => {
//   const { stream } = useParams();
//   const navigate = useNavigate();

//   // State to hold combined list of colleges
//   const [colleges, setColleges] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAllColleges = async () => {
//       try {
//         setIsLoading(true);
        
//         // --- Fetch from both API and static file ---
//         const apiResponsePromise = fetch('http://localhost:5000/api/colleges');
//         const staticDataPromise = Promise.resolve(staticCollegeData);

//         const [apiResult, staticResult] = await Promise.allSettled([
//           apiResponsePromise.then(res => {
//             if (!res.ok) throw new Error('Network response was not ok');
//             return res.json();
//           }),
//           staticDataPromise
//         ]);

//         let apiColleges = [];
//         if (apiResult.status === 'fulfilled') {
//           apiColleges = apiResult.value;
//         } else {
//           console.error("Failed to fetch from API:", apiResult.reason);
//           // You might want to set a partial error state here
//         }

//         const staticColleges = staticResult.value || {};
        
//         // --- Merge and de-duplicate data ---
//         const combinedData = {};

//         // 1. Add static data first
//         if (staticColleges[stream]) {
//             combinedData[stream] = [...staticColleges[stream]];
//         } else {
//             combinedData[stream] = [];
//         }
        
//         // 2. Add dynamic data, avoiding duplicates by name
//         const existingNames = new Set(combinedData[stream].map(c => c.name));
//         apiColleges.forEach(college => {
//             if (college.stream === stream && !existingNames.has(college.name)) {
//                 combinedData[stream].push(college);
//             }
//         });

//         setColleges(combinedData[stream] || []);

//       } catch (err) {
//         setError(err.message);
//         console.error("Failed to fetch and merge colleges:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAllColleges();
//   }, [stream]);

//   const handleApplyClick = (collegeName) => {
//     navigate('/enrollnow', { state: { collegeName: collegeName } });
//   };

//   const handleDetailsClick = (collegeName) => {
//     const encodedCollegeName = encodeURIComponent(collegeName);
//     navigate(`/colleges/${stream}/${encodedCollegeName}`);
//   };

//   const formatStreamTitle = (slug) => {
//     if (!slug) return '';
//     return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
//   };

//   return (
//     <div className="college-list-container">
//       <h1 className="college-list-title">{formatStreamTitle(stream)} Colleges</h1>
      
//       {isLoading ? (
//         <p>Loading colleges...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : colleges.length === 0 ? (
//         <p>No colleges found for this stream.</p>
//       ) : (
//         <ul className="college-list-ul">
//           {colleges.map((college, idx) => (
//             <li key={college._id || idx} className="college-list-item">
//               <div className="college-info">
//                 <span className="college-name">{college.name}</span>
//                 <span className="college-city">{college.city}</span>
//               </div>
//               <div className="college-actions">
//                 <button
//                   className="btn-details"
//                   onClick={() => handleDetailsClick(college.name)}
//                 >
//                   Get Details
//                 </button>
//                 <button
//                   className="btn-apply"
//                   onClick={() => handleApplyClick(college.name)}
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CollegeListPage;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// ✅ REMOVED: The static import of collegedata.js is gone.

const CollegeListPage = () => {
  const { stream } = useParams();
  const navigate = useNavigate();

  const [colleges, setColleges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ✅ SIMPLIFIED: This function now only fetches from your API.
    const fetchCollegesByStream = async () => {
      try {
        setIsLoading(true);
        // const response = await fetch('http://localhost:5000/api/colleges');
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/colleges`)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const allColleges = await response.json();

        // Filter the colleges from the database to match the current stream
        const filteredColleges = allColleges.filter(college => college.stream === stream);

        setColleges(filteredColleges);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch and filter colleges:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollegesByStream();
  }, [stream]); // Re-runs whenever the 'stream' parameter in the URL changes

  const handleApplyClick = (collegeName) => {
    navigate('/enrollnow', { state: { collegeName: collegeName } });
  };

  const handleDetailsClick = (collegeName) => {
    const encodedCollegeName = encodeURIComponent(collegeName);
    navigate(`/colleges/${stream}/${encodedCollegeName}`);
  };

  const formatStreamTitle = (slug) => {
    if (!slug) return '';
    return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  // --- The JSX for rendering the component remains the same ---
  return (
    <div className="college-list-container">
      <h1 className="college-list-title">{formatStreamTitle(stream)} Colleges</h1>
      
      {isLoading ? (
        <p>Loading colleges...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : colleges.length === 0 ? (
        <p>No colleges found for this stream.</p>
      ) : (
        <ul className="college-list-ul">
          {colleges.map((college) => (
            <li key={college._id} className="college-list-item">
              <div className="college-info">
                <span className="college-name">{college.name}</span>
                <span className="college-city">{college.city}</span>
              </div>
              <div className="college-actions">
                <button
                  className="btn-details"
                  onClick={() => handleDetailsClick(college.name)}
                >
                  Get Details
                </button>
                <button
                  className="btn-apply"
                  onClick={() => handleApplyClick(college.name)}
                >
                  Apply Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollegeListPage;
