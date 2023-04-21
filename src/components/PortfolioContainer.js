import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Portfolio') {
            return <Portfolio />;
          }
          if (currentPage === 'Resume') {
            return <Resume />;
          }
          return <Contact />;
    }
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        
        <div class="m-5 bg-dark text-white">
            <Header/>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
       
      );
}