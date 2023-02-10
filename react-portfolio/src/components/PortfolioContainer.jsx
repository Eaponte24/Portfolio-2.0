import React, { useState } from 'react';
import Work from './pages/Work';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './Header';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Work');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
		<div>
			<div>
				<Header currentPage={currentPage} handlePageChange={handlePageChange} />
			</div>
			<div>
				<main>{renderPage()}</main>
			</div>
		</div>
	);
}