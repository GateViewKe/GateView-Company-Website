import React, { useEffect, useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundPositionY: `${scrollY * 0.4}px`,
      }}
    >
      <div className="hero-overlay" />

      <div className="container hero-content text-center">
        <h1 className="hero-title">GateView</h1>

        <p
          className="hero-tagline"
          style={{
            opacity: Math.max(1 - scrollY / 300, 0),
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          Smarter Airport & Infrastructure Visualization
        </p>

        <p className="hero-subtext">Concierge & Commerce</p>

        <a href="#contact" className="btn btn-dark btn-lg px-4 mt-3">
          Contact Us
        </a>

        {/* Glass Card */}
        <div className="hero-glass-card">
          <h5>What GateView Does</h5>
          <p>
            Real-time 3D airport visualization, indoor navigation,
            and intelligent commercial engagement — built for
            modern infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
