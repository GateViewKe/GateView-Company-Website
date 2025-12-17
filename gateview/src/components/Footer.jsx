import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-light text-center py-4">
      <p>&copy; {new Date().getFullYear()} GateView. All rights reserved.</p>
      <p>Contact: <a href="mailto:contact@gateview.com">contact@gateview.com</a></p>
    </footer>
  );
}
