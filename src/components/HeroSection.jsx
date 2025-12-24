import React from 'react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="text-center d-flex align-items-center"
      style={{
        backgroundColor: '#ebeddf',
        minHeight: '100vh',
        marginTop: '70px'
      }}
    >
      <div className="container">
        <h1 className="display-3 fw-bold text-dark mb-3">
          GateView
        </h1>

        <p className="lead text-secondary mb-4">
          Smarter Airport & Infrastructure Visualization
        </p>

        <a href="#contact" className="btn btn-dark btn-lg px-4">
          Contact Us
        </a>
      </div>
    </section>
  );
}
