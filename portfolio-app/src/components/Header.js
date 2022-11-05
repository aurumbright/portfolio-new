import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

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
