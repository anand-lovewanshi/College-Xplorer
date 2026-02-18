
// import React, { useState } from 'react';
// import contactus from '../assets/contactuslogo.png'

// // Placeholder icons - in a real app, you might use an icon library
// const MailIcon = () => <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
// const PhoneIcon = () => <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
// const LocationIcon = () => <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;


// export default function ContactUsPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [id]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Submitting...');

//     // We'll use the 'subject' field required by the backend, we can construct it
//     const submissionData = {
//         ...formData,
//         subject: `Inquiry from ${formData.name}`
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(submissionData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setStatus(`Success: ${result.message}`);
//         setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
//       } else {
//         setStatus(`Error: ${result.error}`);
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       setStatus('Error: Could not connect to the server.');
//     }
//   };

//   return (
//     <>
//       <div className="section section-light">
//         <div className="container">
//           <div className="section-header">
//             <h2>Fill Out This Form To Start Your College Hunt</h2>
//           </div>
//           <div className="contact-form-layout">
//             <div className="contact-form-image">
//               <img src = {contactus} alt="Decorative" />
//             </div>
//             <div className="contact-form-container">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="name">Full Name</label>
//                   <input type="text" id="name" className="form-control" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email Address</label>
//                   <input type="email" id="email" className="form-control" placeholder="john.doe@example.com" value={formData.email} onChange={handleChange} required />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="phone">Phone Number</label>
//                   <input type="tel" id="phone" className="form-control" placeholder="+91 9111000052" value={formData.phone} onChange={handleChange} required />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="message">Your Message</label>
//                   <textarea id="message" className="form-control" rows="5" placeholder="Tell us about your college goals..." value={formData.message} onChange={handleChange} required></textarea>
//                 </div>
//                 <button type="submit" className="btn-primary form-submit-btn">Send Message</button>
//               </form>
//               {status && <p className="form-status">{status}</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="section section-medium">
//         <div className="container">
//           <div className="section-header">
//             <h2>Contact Information</h2>
//             <p>Welcome to our Website. We are glad to have you around.</p>
//           </div>
//           <div className="grid-3">
//             <div className="contact-info-card">
//               <div className="contact-info-icon"><MailIcon /></div>
//               <h3>Email</h3>
//               <p>Collegexplorer24@gmail.com</p>
//             </div>
//             <div className="contact-info-card">
//               <div className="contact-info-icon"><PhoneIcon /></div>
//               <h3>Phone Number</h3>
//               <p>+91 9111000052</p>
//             </div>
//             <div className="contact-info-card">
//               <div className="contact-info-icon"><LocationIcon /></div>
//               <h3>Address</h3>
//               <p>314, Sapphire Square, Tower square, Indore (M.P.) 452001</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="section section-light">
//          <div className="container">
//             <div className="section-header">
//                 <h2>Visit Us for Personalized College Counseling – Find Us Here!</h2>
//             </div>
//             <div className="map-container">
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.805960048853!2d75.86226707509108!3d22.698266228353198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcfd2bb1b189%3A0x620fa2b1172b8a13!2sSapphire%20Square!5e0!3m2!1sen!2sin!4v1714809676529!5m2!1sen!2sin" 
//                     width="100%" 
//                     height="450" 
//                     style={{ border: 0 }} 
//                     allowFullScreen="" 
//                     loading="lazy" 
//                     referrerPolicy="no-referrer-when-downgrade">
//                 </iframe>
//             </div>
//          </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from 'react';
import contactus from '../assets/contactuslogo.png';

// Placeholder icons - in a real app, you might use an icon library
const MailIcon = () => <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const PhoneIcon = () => <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const LocationIcon = () => <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

// --- NEW ICONS ADDED HERE ---
const WhatsAppIcon = () => (
  <svg className="icon-large" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M.057 23.943L8 21.82l-7.943-7.943C.057 23.943.057 23.943.057 23.943M12.001 2.001c-5.523 0-10 4.477-10 10 0 1.758.459 3.45 1.336 4.908L2.001 22l5.31-1.378a9.923 9.923 0 0 0 4.69 1.219c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.002c-1.554 0-3.04-.388-4.338-1.099l-.31-.184-3.225.834.848-3.14-.202-.321a7.95 7.95 0 0 1-1.18-4.19c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8.002-8 8.002zm4.363-5.262c-.22-.11-.649-.32- .75-.357-.101-.038-.175-.057-.249.057-.074.113-.284.357-.348.43-.065.074-.129.083-.249-.038-.12-.12-.505-.185-.963-.593-.357-.311-.598-.553-.672-.666-.074-.113-.007-.172.05-.228.053-.053.116-.135.175-.202.058-.068.077-.113.116-.188.038-.074.019-.138-.019-.249-.038-.11-.249-.593-.34-.813s-.175-.184-.249-.184c-.074 0-.148.01-.222.01-.074 0-.184.028-.282.142-.098.113-.377.368-.377.897 0 .529.387 1.04.442 1.114.055.074.747.835 1.815 1.59.102.074.18.118.242.152.19.108.363.18.498.232.222.083.424.072.572.043.167-.033.51-.208.583-.41.074-.202.074-.377.052-.41-.019-.033-.093-.052-.19-.1z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M12 21.05a9.05 9.05 0 100-18.1 9.05 9.05 0 000 18.1z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="icon-large" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.503 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
  </svg>
);
// --- END OF NEW ICONS ---


export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    // We'll use the 'subject' field required by the backend, we can construct it
    const submissionData = {
        ...formData,
        subject: `Inquiry from ${formData.name}`
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus(`Success: ${result.message}`);
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Error: Could not connect to the server.');
    }
  };

  return (
    <>
      <div className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Fill Out This Form To Start Your College Hunt</h2>
          </div>
          <div className="contact-form-layout">
            <div className="contact-form-image">
              <img src = {contactus} alt="Decorative" />
            </div>
            <div className="contact-form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="form-control" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="form-control" placeholder="john.doe@example.com" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" className="form-control" placeholder="+91 9111000052" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" className="form-control" rows="5" placeholder="Tell us about your college goals..." value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn-primary form-submit-btn">Send Message</button>
              </form>
              {status && <p className="form-status">{status}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="section section-medium">
        <div className="container">
          <div className="section-header">
            <h2>Contact Information</h2>
            <p>Welcome to our Website. We are glad to have you around.</p>
          </div>
          <div className="grid-3">
            <div className="contact-info-card">
              <div className="contact-info-icon"><MailIcon /></div>
              <h3>Email</h3>
              <p>Collegexplorer24@gmail.com</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon"><PhoneIcon /></div>
              <h3>Phone Number</h3>
              <p>+91 9111000052</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon"><LocationIcon /></div>
              <h3>Address</h3>
              <p>314, Sapphire Square, Tower square, Indore (M.P.) 452001</p>
            </div>
          </div>
          
          {/* --- NEW SOCIAL MEDIA SECTION ADDED HERE --- */}
          <div className="section-header" style={{ marginTop: '4rem' }}>
            <h2>Connect With Us</h2>
          </div>
          <div className="grid-3">
            {/* Make sure to replace placeholder links (href) with your actual links */}
            <div className="contact-info-card">
              <a href="https://wa.me/919111000052" target="_blank" rel="noopener noreferrer">
                <div className="contact-info-icon"><WhatsAppIcon /></div>
                <h3>WhatsApp</h3>
                <p>Chat with us directly</p>
              </a>
            </div>
            <div className="contact-info-card">
              <a href="https://www.instagram.com/collegexplorer.in?igsh=MW4yM3Frb3ltb2pxZQ==" target="_blank" rel="noopener noreferrer">
                <div className="contact-info-icon"><InstagramIcon /></div>
                <h3>Instagram</h3>
                <p>Follow our page</p>
              </a>
            </div>
            <div className="contact-info-card">
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <div className="contact-info-icon"><FacebookIcon /></div>
                <h3>Facebook</h3>
                <p>Follow our page</p>
              </a>
            </div>
          </div>
          {/* --- END OF NEW SECTION --- */}

        </div>
      </div>
      
      <div className="section section-light">
         <div className="container">
           <div className="section-header">
             <h2>Visit Us for Personalized College Counseling – Find Us Here!</h2>
           </div>
           <div className="map-container">
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.805960048853!2d75.86226707509108!3d22.698266228353198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcfd2bb1b189%3A0x620fa2b1172b8a13!2sSapphire%20Square!5e0!3m2!1sen!2sin!4v1714809676529!5m2!1sen!2sin" 
               width="100%" 
               height="450" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade">
             </iframe>
           </div>
        </div>
      </div>
    </>
  );
}