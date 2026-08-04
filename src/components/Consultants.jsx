import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiCalendar,
  FiMessageSquare,
  FiStar,
  FiCheckCircle,
  FiCompass,
  FiMapPin,
  FiClock,
  FiSend,
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Consultation() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('1-2 Weeks');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Consultation request sent for ${destination || 'your trip'} (${duration})!`);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 px-6 md:px-12 overflow-hidden my-12"
    >
      {/* Full-width Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="./consultation....jpg" // Replace with your background image URL
          alt="Travel Planning Background"
          className="w-full h-full object-cover object-center"
        />
        
        {/* LOWER OPACITY OVERLAY (Adjust /40 to /30 or /50 depending on image lightness) */}
        <div className="absolute inset-0 bg-slate-950/40 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/70 backdrop-blur-[1px]" />
      </div>

      {/* Main Overlay Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center text-white"
      >
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-1.5 bg-blue-600/30 backdrop-blur-md border border-blue-400/40 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
            <FiCompass className="text-blue-400 text-sm" />
            <span>1-on-1 Personalized Planning</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
            <FiStar className="text-blue-400 fill-blue-400 text-xs" />
            <span>4.9/5 (1,200+ Itineraries)</span>
          </div>
        </div>

        {/* Headlines */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight drop-shadow-md">
          Plan your trip with a <span className="text-blue-400">Moveo</span> travel expert
        </h2>
        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mb-10 font-normal leading-relaxed drop-shadow">
          Our professional advisors craft custom, stress-free itineraries tailored specifically to your budget, group size, and travel style.
        </p>

        {/* Search Bar Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-slate-950/40 backdrop-blur-xl border border-white/20 p-3 md:p-3.5 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-3 mb-8"
        >
          {/* Destination Field */}
          <div className="flex items-center gap-2.5 bg-slate-900/80 border border-white/10 px-4 py-3 rounded-xl md:rounded-full w-full md:w-1/2">
            <FiMapPin className="text-blue-400 text-lg flex-shrink-0" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none w-full"
            />
          </div>

          {/* Duration Field */}
          <div className="flex items-center gap-2.5 bg-slate-900/80 border border-white/10 px-4 py-3 rounded-xl md:rounded-full w-full md:w-1/3">
            <FiClock className="text-blue-400 text-lg flex-shrink-0" />
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="bg-transparent text-white text-sm focus:outline-none w-full cursor-pointer [&>option]:bg-slate-900 [&>option]:text-white"
            >
              <option value="3-5 Days">3 - 5 Days</option>
              <option value="1-2 Weeks">1 - 2 Weeks</option>
              <option value="2+ Weeks">2+ Weeks</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-7 py-3.5 rounded-xl md:rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>Get Custom Plan</span>
            <FiSend className="text-sm" />
          </button>
        </form>

        {/* Secondary Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            type="button"
            className="flex items-center gap-2 bg-slate-950/50 hover:bg-slate-950/70 text-white border border-white/25 px-5 py-2.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all cursor-pointer shadow-md"
          >
            <FiCalendar className="text-blue-400 text-sm" />
            <span>Schedule Free 15-Min Call</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-2 bg-slate-950/50 hover:bg-slate-950/70 text-white border border-white/25 px-5 py-2.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all cursor-pointer shadow-md"
          >
            <FiMessageSquare className="text-blue-400 text-sm" />
            <span>Instant WhatsApp Chat</span>
          </button>
        </div>

        {/* Bottom Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-slate-200 text-xs font-medium border-t border-white/15 pt-8 w-full max-w-3xl drop-shadow">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-blue-400" />
            <span>100% Tailored Itineraries</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-blue-400" />
            <span>No Hidden Consultation Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-blue-400" />
            <span>Unlimited Plan Revisions</span>
          </div>
        </div>
      </div>
    </section>
  );
}