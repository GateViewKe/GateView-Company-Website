import React from 'react';

export default function ServicesSection() {
  const services = [
    { title: '3D Mapping', description: 'Visualize complex spaces in 3D for better navigation.' },
    { title: 'Real-Time Updates', description: 'Get live updates of navigation paths and critical information.' },
    { title: 'Custom Solutions', description: 'Tailored solutions for airports, large campuses, and infrastructures.' }
  ];

  return (
    <section id="services" className="container py-5">
      <h2 className="mb-4">Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
