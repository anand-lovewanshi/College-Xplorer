
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ✅ This component now fetches data from the API instead of a static file.
const MadhyaPradeshColleges = () => {
  const [groupedColleges, setGroupedColleges] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndGroupColleges = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:5000/api/colleges');
        if (!response.ok) {
          throw new Error('Failed to fetch college data.');
        }
        const allColleges = await response.json();

        // Group the flat array of colleges into an object keyed by stream
        const groups = allColleges.reduce((acc, college) => {
          const { stream } = college;
          if (!acc[stream]) {
            acc[stream] = [];
          }
          acc[stream].push(college);
          return acc;
        }, {});

        setGroupedColleges(groups);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching colleges:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndGroupColleges();
  }, []); // Empty dependency array means this runs once on component mount

  if (isLoading) {
    return <div style={{ padding: "20px" }}><p>Loading colleges...</p></div>;
  }

  if (error) {
    return <div style={{ padding: "20px" }}><p>Error: {error}</p></div>;
  }
  
  // ✅ The JSX now maps over the dynamically created 'groupedColleges' object
  return (
    <div style={{ padding: "20px" }}>
      {Object.keys(groupedColleges).map((stream) => (
        <section key={stream} style={{ marginBottom: "30px" }}>
          <h2>
            <Link to={`/colleges/${stream}`} style={{ textDecoration: "none" }}>
              {/* Formatting the stream name to look nice */}
              {stream.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Colleges
            </Link>
          </h2>
          <ul>
            {groupedColleges[stream].map((college) => (
              <li key={college._id}> {/* Using the unique database ID as the key */}
                {college.name} - {college.city}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default MadhyaPradeshColleges;
