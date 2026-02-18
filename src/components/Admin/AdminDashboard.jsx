// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';


// // ✅ New component for handling individual college fee uploads
// const FeeUploader = ({ college, onUploadSuccess, setMessage }) => {
//   const [file, setFile] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setMessage('Please select a PDF file first.');
//       return;
//     }
//     setIsUploading(true);
//     setMessage('');

//     const formData = new FormData();
//     formData.append('feePdf', file);

//     try {
//       const token = localStorage.getItem('adminToken');
//       const response = await fetch(`http://localhost:5000/api/colleges/${college._id}/upload-fee`, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         },
//         body: formData,
//       });

//       if (response.ok) {
//         setMessage(`✅ Fee PDF for ${college.name} updated!`);
//         onUploadSuccess(); // Refresh the college list
//       } else {
//         const errData = await response.json();
//         setMessage(`Error: ${errData.message || 'Upload failed.'}`);
//       }
//     } catch (err) {
//       setMessage('Error: Could not connect to server.');
//     } finally {
//       setIsUploading(false);
//       setFile(null);
//       // Clear the file input visually
//       document.getElementById(`file-input-${college._id}`).value = '';
//     }
//   };

//   return (
//     <div className="fee-uploader">
//       {college.detailedFeesUrl && (
//         <a 
//           href={`http://localhost:5000${college.detailedFeesUrl}`} 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="link-view-pdf"
//         >
//           View Current PDF
//         </a>
//       )}
//       <input 
//         type="file" 
//         id={`file-input-${college._id}`}
//         accept=".pdf" 
//         onChange={handleFileChange} 
//         style={{ margin: '5px 0' }}
//       />
//       <button onClick={handleUpload} disabled={isUploading || !file} className="btn-primary-small">
//         {isUploading ? 'Uploading...' : 'Upload'}
//       </button>
//     </div>
//   );
// };

// const AdminDashboard = ({ onLogout }) => {
//   const [colleges, setColleges] = useState([]);
//   const [blogs, setBlogs] = useState([]);
//   const [enrollments, setEnrollments] = useState([]); // ✅ New state
//   const [formData, setFormData] = useState({
//     name: '', city: '', stream: 'engineering', fees: '',
//     description: '', courses: '', website: ''
//   });
//   const [blogData, setBlogData] = useState({
//     title: '', category: '', excerpt: '', content: ''
//   });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   // --- Auto logout based on token expiry
//   useEffect(() => {
//     const token = localStorage.getItem('adminToken');
//     if (!token) {
//       handleLogout();
//       return;
//     }
//     const decoded = jwtDecode(token);
//     const expiryTime = decoded.exp * 1000;
//     const remainingTime = expiryTime - Date.now();
//     if (remainingTime <= 0) {
//       handleLogout();
//     } else {
//       const timer = setTimeout(() => handleLogout(), remainingTime);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   // --- Protect route
//   useEffect(() => {
//     const token = localStorage.getItem('adminToken');
//     if (!token) navigate("/admin");
//   }, [navigate]);

//   // --- Fetch Colleges
//   const fetchColleges = useCallback(async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/colleges');
//       const data = await response.json();
//       if (Array.isArray(data)) setColleges(data);
//     } catch (err) {
//       console.error('Fetch colleges error:', err);
//     }
//   }, []);

//   // --- Fetch Blogs
//   const fetchBlogs = useCallback(async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/blogs');
//       const data = await response.json();
//       if (Array.isArray(data)) setBlogs(data);
//     } catch (err) {
//       console.error('Fetch blogs error:', err);
//     }
//   }, []);

//   // --- Fetch Enrollments ✅ NEW
//   const fetchEnrollments = useCallback(async () => {
//     try {
//       const token = localStorage.getItem('adminToken');
//       if (!token) return;

//       const response = await fetch('http://localhost:5000/api/enrollments', {
//         headers: { 'Authorization': `Bearer ${token}` },
//       });

//       const data = await response.json();
//       if (Array.isArray(data)) setEnrollments(data);
//     } catch (err) {
//       console.error('Fetch enrollments error:', err);
//     }
//   }, []);

//   // --- Run all fetches on mount
//   useEffect(() => {
//     fetchColleges();
//     fetchBlogs();
//     fetchEnrollments(); // ✅ New
//   }, [fetchColleges, fetchBlogs, fetchEnrollments]);

//   // --- Handle form changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleBlogChange = (e) => {
//     setBlogData({ ...blogData, [e.target.name]: e.target.value });
//   };

//   // --- Add College
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     const collegeData = {
//       ...formData,
//       courses: formData.courses ? formData.courses.split(',').map(c => c.trim()) : []
//     };

//     try {
//       const token = localStorage.getItem('adminToken');
//       if (!token) { handleLogout(); return; }

//       const response = await fetch('http://localhost:5000/api/colleges', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(collegeData)
//       });

//       if (response.ok) {
//         setMessage('✅ College added successfully!');
//         setFormData({ name: '', city: '', stream: 'engineering', fees: '', description: '', courses: '', website: '' });
//         fetchColleges();
//       } else {
//         const errData = await response.json();
//         setMessage(`Error: ${errData.message || 'Failed to add college.'}`);
//       }
//     } catch {
//       setMessage('Error: Could not connect to server.');
//     }
//   };

//   // --- Delete College
//   const handleDeleteCollege = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this college?')) return;

//     try {
//       const token = localStorage.getItem('adminToken');
//       const response = await fetch(`http://localhost:5000/api/colleges/${id}`, {
//         method: 'DELETE',
//         headers: { 'Authorization': `Bearer ${token}` }
//       });

//       if (response.ok) {
//         setMessage('✅ College deleted successfully!');
//         fetchColleges();
//       } else {
//         const errData = await response.json();
//         setMessage(`Error: ${errData.message || 'Failed to delete college.'}`);
//       }
//     } catch {
//       setMessage('Error: Could not connect to server.');
//     }
//   };

//   // --- Add Blog
//   const handleBlogSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     try {
//       const token = localStorage.getItem('adminToken');
//       if (!token) { handleLogout(); return; }

//       const response = await fetch('http://localhost:5000/api/blogs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(blogData)
//       });

//       if (response.ok) {
//         setMessage('✅ Blog added successfully!');
//         setBlogData({ title: '', category: '', excerpt: '', content: '' });
//         fetchBlogs();
//       } else {
//         const errData = await response.json();
//         setMessage(`Error: ${errData.message || 'Failed to add blog.'}`);
//       }
//     } catch {
//       setMessage('Error: Could not connect to server.');
//     }
//   };

//   // --- Delete Blog
//   const handleDeleteBlog = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this blog?')) return;

//     try {
//       const token = localStorage.getItem('adminToken');
//       const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
//         method: 'DELETE',
//         headers: { 'Authorization': `Bearer ${token}` }
//       });

//       if (response.ok) {
//         setMessage('✅ Blog deleted successfully!');
//         fetchBlogs();
//       } else {
//         const errData = await response.json();
//         setMessage(`Error: ${errData.message || 'Failed to delete blog.'}`);
//       }
//     } catch {
//       setMessage('Error: Could not connect to server.');
//     }
//   };

//   // --- Logout
//   const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     if (onLogout) onLogout(false);
//     navigate("/admin");
//   };

//   return (
//     <div className="admin-dashboard">
//       <div className="admin-header">
//         <h1>Admin Dashboard</h1>
//         <button onClick={handleLogout} className="btn-secondary">Logout</button>
//       </div>

//       {/* ------------ COLLEGE FORM ------------ */}
//       <div className="admin-form-container">
//         <h3>Add New College</h3>
//         <form onSubmit={handleSubmit}>
//           <input name="name" value={formData.name} onChange={handleChange} placeholder="College Name" required />
//           <input name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
//           <select name="stream" value={formData.stream} onChange={handleChange}>
//             <option value="engineering">Engineering</option>
//             <option value="management">Management</option>
//             <option value="law">Law</option>
//             <option value="medical-allied-sciences">Medical & Allied Sciences</option>
//             <option value="arts-science-commerce">Arts, Science & Commerce</option>
//             <option value="agriculture">Agriculture</option>
//             <option value="architecture-design">Architecture & Design</option>
//             <option value="pharmacy">Pharmacy</option>
//             <option value="computer-application">Computer Application</option>
//             <option value="hospitality">Hospitality</option>
//             <option value="journalism-mass-communication">Journalism & Mass Communication</option>
//             <option value="education">Education</option>
//           </select>
//           <input name="fees" value={formData.fees} onChange={handleChange} placeholder="Fees" />
//           <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
//           <input name="courses" value={formData.courses} onChange={handleChange} placeholder="Courses (comma-separated)" />
//           <input name="website" value={formData.website} onChange={handleChange} placeholder="Website URL" />
//           <button type="submit" className="btn-primary">Add College</button>
//         </form>
//       </div>

//       {/* ------------ BLOG FORM ------------ */}
//       <div className="admin-form-container">
//         <h3>Add New Blog</h3>
//         <form onSubmit={handleBlogSubmit}>
//           <input name="title" value={blogData.title} onChange={handleBlogChange} placeholder="Blog Title" required />
//           <input name="category" value={blogData.category} onChange={handleBlogChange} placeholder="Category" required />
//           <input name="excerpt" value={blogData.excerpt} onChange={handleBlogChange} placeholder="Short Excerpt" required />
//           <textarea name="content" value={blogData.content} onChange={handleBlogChange} placeholder="Full Content" required></textarea>
//           <button type="submit" className="btn-primary">Add Blog</button>
//         </form>
//       </div>

//       {/* ------------ BLOG LIST ------------ */}
//       <div className="admin-college-list">
//         <h3>Existing Blogs ({blogs.length})</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Category</th>
//               <th>Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {blogs.map(blog => (
//               <tr key={blog._id}>
//                 <td>{blog.title}</td>
//                 <td>{blog.category}</td>
//                 <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
//                 <td>
//                   <button onClick={() => handleDeleteBlog(blog._id)} className="btn-delete">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* ------------ COLLEGE LIST ------------ */}
//       <div className="admin-college-list">
//         <h3>Existing Colleges ({colleges.length})</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>City</th>
//               <th>Stream</th>
//               <th>Fee PDF Management</th> 
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {colleges.map(college => (
//               <tr key={college._id}>
//                 <td>{college.name}</td>
//                 <td>{college.city}</td>
//                 <td>{college.stream}</td>
//                 <td>
//                   {/* ✅ Using the new uploader component */}
//                   <FeeUploader
//                     college={college}
//                     onUploadSuccess={fetchColleges}
//                     setMessage={setMessage}
//                   />
//                 </td>
//                 <td>
//                   <button onClick={() => handleDeleteCollege(college._id)} className="btn-delete">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* ------------ ENROLLMENT LIST ✅ ------------ */}
//       <div className="admin-college-list">
//         <h3>Recent Enrollments ({enrollments.length})</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Course</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {enrollments.length > 0 ? (
//               enrollments.map((enroll) => (
//                 <tr key={enroll._id}>
//                   <td>{enroll.name}</td>
//                   <td>{enroll.email}</td>
//                   <td>{enroll.phone}</td>
//                   <td>{enroll.course}</td>
//                   <td>{new Date(enroll.createdAt).toLocaleDateString()}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" style={{ textAlign: 'center', color: '#888' }}>
//                   No enrollments yet
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {message && <p className="admin-message">{message}</p>}
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

// ✅ New Component for Fee PDF Uploading
const FeeUploader = ({ college, onUploadSuccess, setMessage }) => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a PDF file first.');
      return;
    }
    setIsUploading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('feePdf', file);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/colleges/${college._id}/upload-fee`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      if (response.ok) {
        setMessage(`✅ Fee PDF for ${college.name} updated!`);
        onUploadSuccess();
      } else {
        const errData = await response.json();
        setMessage(`Error: ${errData.message || 'Upload failed.'}`);
      }
    } catch (err) {
      setMessage('Error: Could not connect to server.');
    } finally {
      setIsUploading(false);
      setFile(null);
      if (document.getElementById(`file-input-${college._id}`)) {
        document.getElementById(`file-input-${college._id}`).value = '';
      }
    }
  };

  return (
    <div className="fee-uploader" style={{ minWidth: '250px' }}>
      {college.detailedFeesUrl && (
        <a
          href={`http://localhost:5000${college.detailedFeesUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="link-view-pdf"
          style={{ display: 'block', marginBottom: '8px', color: '#007bff' }}
        >
          View Current PDF
        </a>
      )}
      <input
        type="file"
        id={`file-input-${college._id}`}
        accept=".pdf"
        onChange={handleFileChange}
        style={{ margin: '5px 0' }}
      />
      <button
        onClick={handleUpload}
        disabled={isUploading || !file}
        className="btn-primary-small"
        style={{ padding: '4px 8px', fontSize: '12px' }}
      >
        {isUploading ? 'Uploading...' : 'Upload New PDF'}
      </button>
    </div>
  );
};

const AdminDashboard = ({ onLogout }) => {
  const [colleges, setColleges] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [formData, setFormData] = useState({
    name: '', city: '', stream: 'engineering', fees: '',
    description: '', courses: '', website: ''
  });
  const [blogData, setBlogData] = useState({
    title: '', category: '', excerpt: '', content: ''
  });
  const [newCollegePdf, setNewCollegePdf] = useState(null); 
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // ✅ --- Logout function moved up ---
  // It must be defined before it is used in the useEffect hooks.
  const handleLogout = useCallback(() => {
    localStorage.removeItem('adminToken');
    if (onLogout) onLogout(false);
    navigate("/admin");
  }, [navigate, onLogout]);

  // --- Auto logout based on token expiry
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      handleLogout();
      return;
    }
    const decoded = jwtDecode(token);
    const expiryTime = decoded.exp * 1000;
    const remainingTime = expiryTime - Date.now();
    if (remainingTime <= 0) {
      handleLogout();
    } else {
      const timer = setTimeout(handleLogout, remainingTime);
      return () => clearTimeout(timer);
    }
  }, [handleLogout]);

  // --- Protect route
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) navigate("/admin");
  }, [navigate]);

  // --- Fetch Colleges
  const fetchColleges = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/colleges');
      const data = await response.json();
      if (Array.isArray(data)) setColleges(data);
    } catch (err) {
      console.error('Fetch colleges error:', err);
    }
  }, []);

  // --- Fetch Blogs
  const fetchBlogs = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      if (Array.isArray(data)) setBlogs(data);
    } catch (err) {
      console.error('Fetch blogs error:', err);
    }
  }, []);

  // --- Fetch Enrollments
  const fetchEnrollments = useCallback(async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) return;
      const response = await fetch('http://localhost:5000/api/enrollments', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      if (Array.isArray(data)) setEnrollments(data);
    } catch (err) {
      console.error('Fetch enrollments error:', err);
    }
  }, []);

  // --- Run all fetches on mount
  useEffect(() => {
    fetchColleges();
    fetchBlogs();
    fetchEnrollments();
  }, [fetchColleges, fetchBlogs, fetchEnrollments]);

  // --- Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleBlogChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  // --- UPDATED Add College Handler ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const token = localStorage.getItem('adminToken');
    if (!token) { handleLogout(); return; }

    const collegeData = {
      ...formData,
      courses: formData.courses ? formData.courses.split(',').map(c => c.trim()) : []
    };

    try {
      const response = await fetch('http://localhost:5000/api/colleges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(collegeData)
      });

      const newCollege = await response.json();

      if (!response.ok) {
        setMessage(`Error: ${newCollege.message || 'Failed to add college.'}`);
        return;
      }
      
      if (newCollegePdf) {
        const pdfFormData = new FormData();
        pdfFormData.append('feePdf', newCollegePdf);

        const pdfResponse = await fetch(`http://localhost:5000/api/colleges/${newCollege._id}/upload-fee`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            body: pdfFormData,
        });

        if (!pdfResponse.ok) {
            setMessage(`✅ College created, but PDF upload failed. You can add it later.`);
        } else {
            setMessage('✅ College and Fee PDF added successfully!');
        }
      } else {
        setMessage('✅ College added successfully!');
      }

      setFormData({ name: '', city: '', stream: 'engineering', fees: '', description: '', courses: '', website: '' });
      setNewCollegePdf(null);
      document.getElementById('newCollegePdf').value = '';
      fetchColleges();

    } catch(err) {
      setMessage('Error: Could not connect to server.');
    }
  };

  // --- Delete College
  const handleDeleteCollege = async (id) => {
    if (!window.confirm('Are you sure you want to delete this college? This will also delete its fee PDF.')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/colleges/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        setMessage('✅ College deleted successfully!');
        fetchColleges();
      } else {
        const errData = await response.json();
        setMessage(`Error: ${errData.message || 'Failed to delete college.'}`);
      }
    } catch {
      setMessage('Error: Could not connect to server.');
    }
  };

  // --- Add Blog
  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const token = localStorage.getItem('adminToken');
      if (!token) { handleLogout(); return; }

      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(blogData)
      });

      if (response.ok) {
        setMessage('✅ Blog added successfully!');
        setBlogData({ title: '', category: '', excerpt: '', content: '' });
        fetchBlogs();
      } else {
        const errData = await response.json();
        setMessage(`Error: ${errData.message || 'Failed to add blog.'}`);
      }
    } catch {
      setMessage('Error: Could not connect to server.');
    }
  };

  // --- Delete Blog
  const handleDeleteBlog = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        setMessage('✅ Blog deleted successfully!');
        fetchBlogs();
      } else {
        const errData = await response.json();
        setMessage(`Error: ${errData.message || 'Failed to delete blog.'}`);
      }
    } catch {
      setMessage('Error: Could not connect to server.');
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn-secondary">Logout</button>
      </div>

      {/* ------------ COLLEGE FORM (✅ UPDATED) ------------ */}
      <div className="admin-form-container">
        <h3>Add New College</h3>
        <form onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="College Name" required />
          <input name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
          <select name="stream" value={formData.stream} onChange={handleChange}>
            <option value="engineering">Engineering</option>
            <option value="management">Management</option>
            <option value="law">Law</option>
            <option value="medical-allied-sciences">Medical & Allied Sciences</option>
            <option value="arts-science-commerce">Arts, Science & Commerce</option>
            <option value="agriculture">Agriculture</option>
            <option value="architecture-design">Architecture & Design</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="computer-application">Computer Application</option>
            <option value="hospitality">Hospitality</option>
            <option value="journalism-mass-communication">Journalism & Mass Communication</option>
            <option value="education">Education</option>
          </select>
          <input name="fees" value={formData.fees} onChange={handleChange} placeholder="Fees" />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
          <input name="courses" value={formData.courses} onChange={handleChange} placeholder="Courses (comma-separated)" />
          <input name="website" value={formData.website} onChange={handleChange} placeholder="Website URL" />
          
          <label htmlFor="newCollegePdf" style={{ marginTop: '10px', display: 'block', fontWeight: 'bold' }}>
            Fee Structure PDF (Optional)
          </label>
          <input
            id="newCollegePdf"
            type="file"
            name="newCollegePdf"
            accept=".pdf"
            onChange={(e) => setNewCollegePdf(e.target.files[0])}
            style={{ marginTop: '5px' }}
          />

          <button type="submit" className="btn-primary" style={{ marginTop: '15px' }}>Add College</button>
        </form>
      </div>

      {/* ------------ BLOG FORM ------------ */}
      <div className="admin-form-container">
        <h3>Add New Blog</h3>
        <form onSubmit={handleBlogSubmit}>
          <input name="title" value={blogData.title} onChange={handleBlogChange} placeholder="Blog Title" required />
          <input name="category" value={blogData.category} onChange={handleBlogChange} placeholder="Category" required />
          <input name="excerpt" value={blogData.excerpt} onChange={handleBlogChange} placeholder="Short Excerpt" required />
          <textarea name="content" value={blogData.content} onChange={handleBlogChange} placeholder="Full Content" required></textarea>
          <button type="submit" className="btn-primary">Add Blog</button>
        </form>
      </div>

      {message && <p className="admin-message">{message}</p>}
      
      {/* ------------ COLLEGE LIST ------------ */}
      <div className="admin-college-list">
        <h3>Existing Colleges ({colleges.length})</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Stream</th>
              <th>Fee PDF Management</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map(college => (
              <tr key={college._id}>
                <td>{college.name}</td>
                <td>{college.city}</td>
                <td>{college.stream}</td>
                <td>
                  <FeeUploader
                    college={college}
                    onUploadSuccess={fetchColleges}
                    setMessage={setMessage}
                  />
                </td>
                <td>
                  <button onClick={() => handleDeleteCollege(college._id)} className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ------------ BLOG LIST ------------ */}
      <div className="admin-college-list">
        <h3>Existing Blogs ({blogs.length})</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>{blog.category}</td>
                <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleDeleteBlog(blog._id)} className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ------------ ENROLLMENT LIST ------------ */}
      <div className="admin-college-list">
        <h3>Recent Enrollments ({enrollments.length})</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Course</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.length > 0 ? (
              enrollments.map((enroll) => (
                <tr key={enroll._id}>
                  <td>{enroll.name}</td>
                  <td>{enroll.email}</td>
                  <td>{enroll.phone}</td>
                  <td>{enroll.course}</td>
                  <td>{new Date(enroll.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', color: '#888' }}>
                  No enrollments yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;

