import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'lightgray', padding: '20px', textAlign: 'center' }}>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/">Home</Link></li>
          <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/about">About</Link></li>
          <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
