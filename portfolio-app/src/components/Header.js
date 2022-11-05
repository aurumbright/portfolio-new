import React, { useState } from "react";
//navbar and footer
import Navigation from "./Navigation";
import Footer from "./Footer";
// individual pages
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";

// function for rendering pages
export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  // renders page based on currentPage value (as established in Navigation)
  const renderPage = () => {
    return currentPage === "About" ? (
      <About />
    ) : currentPage === "Projects" ? (
      <Projects />
    ) : currentPage === "Resume" ? (
      <Resume />
    ) : (
      <Contact />
    );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}
