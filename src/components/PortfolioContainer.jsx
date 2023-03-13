import React, { useState } from 'react';
import Work from './pages/Work';
import About from './pages/About';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';
import '../index.css'
import '../index.js'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Welcome');

  const styles = {
    background: {
      backgroundColor: "#B6EB7A",
      height: "100%",
      width: "100%",
      margin: 0,
      padding: 0,
    },
  };
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
		<div style={styles.background}>
			<div>
        {/* render welcome screen if on welcome screen */}
        {currentPage === 'Welcome' ? (
          <Welcome currentPage={currentPage} handlePageChange={handlePageChange}  />
        ) : (
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        )}
			</div>
			<div>
       {/* only render page if not on Welcome */}
        {currentPage !== 'Welcome' ? (
          renderPage() 
        ) : (
          <div></div>
        )}
			</div>
      <div>
        <Footer />
      </div>
		</div>
	);
}