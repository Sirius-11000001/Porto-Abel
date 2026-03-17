import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center px-8 py-6 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="text-xl font-bold tracking-tighter text-white cursor-pointer" onClick={() => scrollToSection('home')}>
        ABEL
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-sm border border-blue-500/50 px-4 py-2 rounded-full text-white hover:bg-blue-500/10 transition-all">
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="text-sm border border-blue-500/50 px-4 py-2 rounded-full text-white hover:bg-blue-500/10 transition-all">
          About
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="text-sm border border-blue-500/50 px-4 py-2 rounded-full text-white hover:bg-blue-500/10 transition-all">
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-sm border border-blue-500/50 px-4 py-2 rounded-full text-white hover:bg-blue-500/10 transition-all">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;