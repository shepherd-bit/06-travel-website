import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaCompass } from 'react-icons/fa';

export default function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const actionsRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [logoRef.current, ...linksRef.current, actionsRef.current],
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }, navRef);

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Stays', href: '#' },
    { name: 'Flights', href: '#' },
    { name: 'Packages', href: '#' },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-slate-900/40 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Brand Logo + Name */}
        <a
          href="#"
          ref={logoRef}
          className="flex items-center gap-2 text-2xl font-black tracking-wider text-white hover:opacity-90 transition-opacity"
        >
          <FaCompass className="text-blue-400 text-3xl" />
          <span>MOVEO</span>
        </a>

        {/* Center: Main Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              ref={(el) => (linksRef.current[index] = el)}
              className="relative text-base font-semibold text-white/90 hover:text-white transition-colors duration-200 py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Login & Sign Up Buttons */}
        <div ref={actionsRef} className="flex items-center gap-3">
          <button
            type="button"
            className="px-4 py-2 text-sm font-bold rounded-lg border border-white/40 text-white hover:bg-white/10 transition-all duration-200"
          >
            Login
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm border border-blue-500 transition-all duration-200"
          >
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
}