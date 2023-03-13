import React from 'react';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    height: '80px',
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
    color: '#000',
  },

  link: {
    color: '#000',
    textDecoration: 'none',
    fontSize: '2rem',
    fontWeight: 'bold',
  },

};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.nav}>
      <li className='navLinks' style={styles.navItem}>
        <a
          style={styles.link}
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'navItem active' : 'navItem'}
        >
          About
        </a>
      </li>
      <li className='navLinks' style={styles.navItem}>
        <a
          style={styles.link}
          href="#work"
          onClick={() => handlePageChange('Work')}
          className={currentPage === 'Work' ? 'navItem active' : 'navItem'}
        >
          Work
        </a>
      </li>
      <li  className='navLinks' style={styles.navItem}>
        <a
          style={styles.link}
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'navItem active' : 'navItem'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
