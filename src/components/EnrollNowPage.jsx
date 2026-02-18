import React, { useState } from 'react';
import joinus from '../assets/joinus.png'

export default function EnrollNowPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch('http://localhost:5000/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus(`Success: ${result.message}`);
        // Reset the form after successful submission
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Error: Could not connect to the server.');
    }
  };

  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-header">
          <h2>Fill Out This Form To Start Your College Hunt</h2>
        </div>
        <div className="enroll-now-grid">
          <div className="enroll-form-container">
            <form onSubmit={handleSubmit} className="enroll-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="BBA">BBA</option>
                  <option value="BCA">BCA</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message (Optional)"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary form-submit-button">Submit Now</button>
            </form>
            {/* Display submission status message */}
            {status && <p className="form-status">{status}</p>}
          </div>
          <div className="enroll-image-container">
            <img src= {joinus} alt="Enrollment illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}

