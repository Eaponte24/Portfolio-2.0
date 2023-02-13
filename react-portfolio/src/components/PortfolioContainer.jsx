import React, { useState } from 'react';
import Work from './pages/Work';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';
import '../index.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Welcome');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Welcome') {
      return <Welcome />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
		<div>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>  
			<div>
				<Header currentPage={currentPage} handlePageChange={handlePageChange} /> 
			</div>
			<div>
				<main>{renderPage()}</main>
			</div>
      <div>
        <Footer />
      </div>
		</div>
	);
}