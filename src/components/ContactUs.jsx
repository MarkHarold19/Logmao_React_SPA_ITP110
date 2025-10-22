import { useState } from 'react';
import '../styles/contact_us_style.css';

const ContactUs = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setShowConfirmation(true);
  };

  const handleNewMessage = () => {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').selectedIndex = 0;
    document.getElementById('message').value = '';
    setShowConfirmation(false);
  };

  return (
    <div className="main-content">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="contact-container">
            <h2>Contact Us</h2>
            
            {!showConfirmation ? (
              <div className="contact-form">
                <div className="mb-3">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="form-control" placeholder="Your name" required />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="form-control" placeholder="Your email" required />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" className="form-select">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="complaint">Complaint</option>
                    <option value="compliment">Compliment</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="form-control" placeholder="Your message..." required></textarea>
                </div>
                
                <button onClick={handleSubmit} className="submit-btn">Send Message</button>
              </div>
            ) : (
              <div className="confirmation-message">
                <h3 className="text-success">Message Sent!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
                <button onClick={handleNewMessage} className="submit-btn" style={{backgroundColor: 'var(--secondary-color)'}}>
                  Send Another Message
                </button>
              </div>
            )}
            
            <div className="contact-info">
              <h3>Other Ways to Reach Us</h3>
              
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <strong>Address</strong><br />
                  Mamatid, Cabuyao, Laguna
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <strong>Phone</strong><br />
                  (123) 456-7890
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <strong>Email</strong><br />
                  info@coffeeshop.com
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div>
                  <strong>Hours</strong><br />
                  Monday-Friday: 7am-9pm<br />
                  Saturday-Sunday: 8am-10pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;