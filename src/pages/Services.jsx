import React from 'react';
import { PackageSearch, Truck, ShieldCheck, Box, RefreshCw, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './pages.css';
import './Services.css';

const services = [
  {
    icon: <PackageSearch size={36} style={{ color: 'var(--green-600)' }} />,
    title: 'Bulk Order Processing',
    desc: 'We fulfill large-scale manufacturing and commercial kitchen demands by processing volume orders from 500 kg up to multi-ton containers.',
    points: ['Scalable Production Capacity', 'Consistent Quality Across Batches', 'Dedicated Account Managers'],
  },
  {
    icon: <Box size={36} style={{ color: 'var(--green-600)' }} />,
    title: 'Custom Packaging Solutions',
    desc: 'Tailored packaging options designed to preserve product integrity during transit. We offer white-label and private-label packaging for retail or wholesale.',
    points: ['Vacuum Sealed Pouches', 'Bulk HDPE Drums', 'Moisture-Barrier Bags'],
  },
  {
    icon: <Truck size={36} style={{ color: 'var(--green-600)' }} />,
    title: 'Fast Delivery (Domestic & Global)',
    desc: 'Efficient logistics network covering pan-India delivery, alongside streamlined global export channels specifically optimized for food products.',
    points: ['Air & Sea Freight Options', 'Hassle-free Customs Clearance', 'Real-time Shipment Tracking'],
  },
  {
    icon: <ShieldCheck size={36} style={{ color: 'var(--green-600)' }} />,
    title: 'Quality Assurance Testing',
    desc: 'Every batch undergoes rigorous quality control and lab testing to certify zero contamination, moisture levels, and pure taste.',
    points: ['Microbiological Testing', 'Moisture Content Analysis', 'FSSAI & Export Certifications'],
  },
];

const stats = [
  { icon: <RefreshCw size={36} style={{ color: 'var(--green-400)' }} />, value: '24/7',  label: 'Processing Plant' },
  { icon: <BarChart size={36}  style={{ color: 'var(--green-400)' }} />, value: '10k+', label: 'Tons Annually' },
];

const Services = () => (
  <div className="page-enter" style={{ background: '#fff' }}>
    <div style={{ padding: '64px 0' }}>
      <div className="container">

        <div className="section-center">
          <p className="section-tag">What We Do</p>
          <h1 className="section-title">Comprehensive B2B Services</h1>
          <p className="section-desc">
            Beyond producing premium dehydrated goods, we offer end-to-end processing and logistical services tailored for manufacturers, distributors, and global importers.
          </p>
        </div>

        <div className="grid-2 stagger" style={{ marginBottom: '64px' }}>
          {services.map((s, i) => (
            <div key={i} className="service-card card-hover fade-in-up">
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <ul className="service-card__points">
                {s.points.map((pt, j) => (
                  <li key={j} className="service-card__point">
                    <span className="service-card__dot" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="services-cta">
          <div className="services-cta__bg-pattern" aria-hidden="true">
            <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <path d="M100 200 Q 150 150 200 200 T 300 200" stroke="white" strokeWidth="2" fill="none" />
              <path d="M400 300 Q 450 250 500 300 T 600 300" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="200" cy="200" r="4" fill="white" />
              <circle cx="500" cy="300" r="4" fill="white" />
            </svg>
          </div>
          <div className="services-cta__inner grid-2-col">
            <div>
              <h3 className="services-cta__title">Ready to Export Worldwide</h3>
              <p className="services-cta__desc">
                Vijay Dehydration isn't just serving the Indian market. We are fully equipped with export licences and comply with international food safety standards, ready to ship to the Middle East, Europe, and the Americas.
              </p>
              <Link to="/contact" className="btn-white-green">Partner With Us</Link>
            </div>
            <div className="services-cta__stats">
              {stats.map((s, i) => (
                <div key={i} className={`services-stat${i === 1 ? ' services-stat--offset' : ''}`}>
                  <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                  <h4 className="services-stat__val">{s.value}</h4>
                  <p className="services-stat__label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Services;
