

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// ✅ REMOVED: The static import of collegedata.js is gone.

const CollegeDetailPage = () => {
  const { stream, collegeName: encodedCollegeName } = useParams();
  const navigate = useNavigate();
  const collegeName = decodeURIComponent(encodedCollegeName);

  const [college, setCollege] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ✅ SIMPLIFIED: This function now only fetches from your API.
    const fetchCollege = async () => {
      try {
        setIsLoading(true);

        // const response = await fetch('http://localhost:5000/api/colleges');
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/colleges`)
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server.');
        }
        
        const allColleges = await response.json();
        
        // Find the specific college from the list fetched from the database
        const foundCollege = allColleges.find(
          c => c.name === collegeName && c.stream === stream
        );

        if (foundCollege) {
          setCollege(foundCollege);
        } else {
          setError('College not found.');
        }

      } catch (err) {
        setError(err.message);
        console.error("Error fetching college details:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollege();
  }, [stream, collegeName]); // Dependencies remain the same

  const handleApplyClick = () => {
    if (college) {
      navigate('/enrollnow', { state: { collegeName: college.name } });
    }
  };

  const formatStreamTitle = (slug) => {
    if (!slug) return '';
    return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };
  
  // --- The rest of your component's JSX remains the same ---
  // (Loading, error, and display logic is unchanged)

  if (isLoading) {
    return <div className="college-detail-container"><p>Loading details...</p></div>;
  }

  if (error || !college) {
    return (
      <div className="college-detail-container">
        <p>{error || 'College not found.'}</p>
        <Link to="/" className="back-link">&larr; Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="college-detail-container">
      <Link to={`/colleges/${stream}`} className="back-link">&larr; Back to {formatStreamTitle(stream)} Colleges</Link>
      <div className="college-detail-card">
        <h1 className="college-detail-title">{college.name}</h1>
        <p className="college-detail-city">{college.city}</p>
        
        <div className="detail-section">
          <h3>Description</h3>
          <p>{college.description || "No description available."}</p>
        </div>

        <div className="detail-section">
          <h3>Estimated Fees</h3>
          <p>{college.fees || "Not available."}</p>
        </div>

        <div className="detail-section">
          <h3>Courses Offered</h3>
          <p>{college.courses && college.courses.length > 0 ? college.courses.join(", ") : "Not available."}</p>
        </div>
        
        {college.detailedFeesUrl && (
          <div className="detail-section">
            <h3>Detailed Fee Structure</h3>
            <a 
              href={`http://localhost:5000${college.detailedFeesUrl}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-pdf-download"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
              Download Fee Structure (PDF)
            </a>
          </div>
        )}

        {college.website && (
          <div className="detail-section">
            <h3>Website</h3>
            <a href={college.website} target="_blank" rel="noopener noreferrer" className="website-link">
              Visit Website
            </a>
          </div>
        )}

        <div className="college-detail-actions">
            <button className="btn-apply-detail" onClick={handleApplyClick}>
                Apply Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailPage;

