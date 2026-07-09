import React from 'react';
import { Award, ShieldCheck, TrendingUp } from 'lucide-react';
import './OwnerSection.css';

const highlights = [
  { icon: <ShieldCheck size={22} />, title: 'Quality Assured', desc: 'Strict adherence to food safety standards' },
  { icon: <TrendingUp size={22} />, title: 'Global Vision',   desc: 'Expanding Indian flavors worldwide' },
  { icon: <Award size={22} />,       title: '15+ Years',      desc: 'Trusted experience in food processing' },
];

const OwnerSection = () => (
  <section className="owner">
    <div className="container">
      <div className="owner__flex">

        <div className="owner__photo-wrap">
          <div className="owner__photo-bg" />
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
            alt="Vijay Gore, Founder"
            loading="lazy"
            className="owner__photo"
          />
          <div className="owner__badge">
            <p className="owner__badge-num">15+</p>
            <p className="owner__badge-label">Years of Experience</p>
          </div>
        </div>

        <div className="owner__content">
          <p className="owner__tag">Meet the Owner</p>
          <h2 className="owner__name">Vijay Gore</h2>
          <p className="owner__quote">
            "Founder of Vijay Dehydration and Processing Plant with expertise in food processing and quality production."
          </p>
          <p className="owner__bio">
            With a profound commitment to agricultural value addition, Vijay established this plant with a singular vision: to bridge the gap between farm-fresh produce and global kitchen needs without compromising on nutrition or flavor. His dedication to maintaining strict hygiene standards and utilizing advanced dehydration technologies has positioned the company as a trusted exporter.
          </p>
          <div className="owner__highlights stagger">
            {highlights.map((h) => (
              <div key={h.title} className="owner__highlight fade-in-up">
                <div className="owner__highlight-icon">{h.icon}</div>
                <div>
                  <h4 className="owner__highlight-title">{h.title}</h4>
                  <p className="owner__highlight-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default OwnerSection;
