import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import OwnerSection from "../components/OwnerSection";
import "./pages.css";
import "./Home.css";

const features = [
  {
    title: "100% Natural",
    desc: "No artificial preservatives or colors added. We maintain the natural goodness of the raw produce.",
    img: "natural.jpg",
  },
  {
    title: "Export Quality",
    desc: "Meeting stringent international quality standards for global export demands with top-tier hygiene.",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Extended Shelf Life",
    desc: "Advanced dehydration extends the life of food while retaining nutritional profiles perfectly.",
    img: "Stor.jpg",
  },
];

const testimonials = [
  {
    text: "The quality of ginger powder we received was outstanding. The aroma and flavor are unparalleled compared to other suppliers.",
    author: "Rajesh S.",
    company: "Spice Dynamics",
  },
  {
    text: "Vijay  Dehydration has been our reliable partner for exporting bulk onion flakes. Their packaging and on-time delivery are excellent.",
    author: "Sarah J.",
    company: "Global Organics Limited",
  },
];

const Home = () => (
  <div className="page-enter" style={{ background: "var(--earth-50)" }}>
    <section className="home-hero">
      <div className="home-hero__bg hero-bg" />
      <div className="home-hero__content">
        <div className="home-hero__badge fade-in-up">
          Premium Food Processing &amp; Dehydration
        </div>
        <h1
          className="home-hero__title fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Vijay Dehydration&nbsp;
          <br />
          <span className="home-hero__title-accent">and Processing Plant</span>
        </h1>
        <p
          className="home-hero__sub fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Preserving Freshness, Delivering Quality. Bringing the best of Indian
          agriculture to the world through sustainable dehydration processes.
        </p>
        <div
          className="home-hero__ctas fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link to="/products" className="btn-primary">
            View Products <ArrowRight size={20} />
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="home-features">
      <div className="container">
        <div className="section-center">
          <p className="section-tag">Features</p>
          <h2 className="section-title">Why Choose Our Products</h2>
          <p className="section-desc">
            We guarantee the highest standards in food processing, ensuring the
            natural flavor and nutrients are locked in.
          </p>
        </div>
        <div className="grid-3 stagger">
          {features.map((f, i) => (
            <div
              key={i}
              className="home-feature-card card card-hover fade-in-up"
            >
              <div className="home-feature-card__img-wrap">
                <div className="home-feature-card__overlay" />
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="home-feature-card__img"
                />
              </div>
              <div className="home-feature-card__body">
                <div className="home-feature-card__title-row">
                  <CheckCircle2
                    size={24}
                    style={{ color: "var(--green-500)", flexShrink: 0 }}
                  />
                  <h3 className="home-feature-card__title">{f.title}</h3>
                </div>
                <p className="home-feature-card__desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <OwnerSection />

    {/* Testimonials */}
    <section className="home-testimonials">
      <div className="container">
        <div className="section-center">
          <p className="section-tag">Testimonials</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="grid-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card card card-hover fade-in-up"
            >
              <Star size={32} className="testimonial-card__star" />
              <div className="testimonial-card__stars">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={20}
                    style={{ color: "#facc15", fill: "#facc15" }}
                  />
                ))}
              </div>
              <p className="testimonial-card__text">"{t.text}"</p>
              <div>
                <p className="testimonial-card__author">{t.author}</p>
                <p className="testimonial-card__company">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
