import React from 'react';
import { Package, Globe, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import './pages.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', phone: '', product: 'Onion Powder / Flakes', quantity: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setSubmitted(true); setLoading(false); setFormData({ name: '', phone: '', product: 'Onion Powder / Flakes', quantity: '', message: '' }); }, 1000);
  };
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="page-enter contact-page">
      <div className="container">
        <div className="section-center">
          <h1 className="section-title" style={{ fontSize: '2.5rem' }}>Contact &amp; Bulk Orders</h1>
          <p className="section-desc">Reach out to us for bulk inquiries, domestic supply, or export orders. Our team is ready to assist you.</p>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="card contact-form-card">
            {submitted ? (
              <div className="contact-success fade-in">
                <div className="contact-success__icon">
                  <ShieldCheck size={48} style={{ color: 'var(--green-600)' }} />
                </div>
                <h3 className="contact-success__title">Request Sent!</h3>
                <p className="contact-success__msg">Thank you for contacting Vijay Dehydration. Our sales team will get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="contact-success__btn">Send another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form__group">
                  <label htmlFor="name" className="form-label">Full Name / Company Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="form-input" placeholder="Vijay Foods" />
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="form-input" placeholder="+91 98765 43210" />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="quantity" className="form-label">Quantity (kg/tons)</label>
                    <input type="text" id="quantity" name="quantity" required value={formData.quantity} onChange={handleChange} className="form-input" placeholder="e.g., 500 kg" />
                  </div>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="product" className="form-label">Interested Product</label>
                  <select id="product" name="product" value={formData.product} onChange={handleChange} className="form-input" style={{ cursor: 'pointer' }}>
                    <option>Onion Powder / Flakes</option>
                    <option>Garlic Powder / Flakes</option>
                    <option>Ginger Powder</option>
                    <option>Mixed Vegetables</option>
                    <option>Other (Specify in Message)</option>
                  </select>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="message" className="form-label">Additional Message</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="form-input" style={{ resize: 'none' }} placeholder="Tell us about your requirements..." />
                </div>
                <button type="submit" disabled={loading} className={`btn-green${loading ? ' btn-green--loading' : ''}`}>
                  {loading ? 'Sending…' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-card__globe"><Globe size={160} /></div>
              <h3 className="contact-info-card__title">Get In Touch</h3>
              <div className="contact-info-card__items">
                {[
                  { icon: <MapPin size={18} />, label: 'Plant Location', lines: ['Vijay Processing Unit, Rajuri,Tal-Rahata, A.Nagar, MH, India'] },
                  { icon: <Phone size={18} />,  label: 'Phone',          lines: ['+91 98765 43210 (Sales)', '+91 98765 09876 (Export)'] },
                  { icon: <Mail size={18} />,   label: 'Email',          lines: ['info@vijayplant.com', 'export@vijayplant.com'] },
                ].map(({ icon, label, lines }) => (
                  <div key={label} className="contact-info-card__item">
                    <div className="contact-info-card__icon">{icon}</div>
                    <div>
                      <h4 className="contact-info-card__label">{label}</h4>
                      {lines.map((l) => <p key={l} className="contact-info-card__line">{l}</p>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-hours card">
              <div>
                <h4 className="contact-hours__title">Operating Hours</h4>
                <p className="contact-hours__days">Monday – Saturday</p>
                <p className="contact-hours__time">09:00 AM – 06:00 PM</p>
              </div>
              <div className="contact-hours__dot-wrap">
                <div className="contact-hours__dot animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
