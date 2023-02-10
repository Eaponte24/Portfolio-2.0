import React from 'react';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    height: '80px',
    backgroundColor: '#f5f5f5',
  },

  navLink: {
    color: '#000',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },

  active: {
    color: '#000',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },

  navItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    height: '80px',
    backgroundColor: '#f5f5f5',
    
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.nav}>
      <li style={styles.navItem}>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'navLink active' : 'navLink'}
        >
          About
        </a>
      </li>
      <li style={styles.navItem}>
        <a
          href="#work"
          onClick={() => handlePageChange('Work')}
          className={currentPage === 'Work' ? 'navLink active' : 'navLink'}
        >
          Work
        </a>
      </li>
      <li style={styles.navItem}>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'navLink active' : 'navLink'}
        >
          Resume
        </a>
      </li>
      <li style={styles.navItem}>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'navLink active' : 'navLink'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
