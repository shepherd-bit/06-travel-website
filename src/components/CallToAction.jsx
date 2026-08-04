import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {  } from 'react-icons/fi';

// Import your mockup image here:
// import phoneMockupImg from '../assets/iPhone 13 Mockup.png';

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const containerRef = useRef(null);
  const phoneRef = useRef(null);
  const contentRef = useRef(null);

  const [tab, setTab] = useState('mobile');
  const [contactValue, setContactValue] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance reveal for text and actions
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );

      // Entrance animation for Mobile Mockup
      gsap.fromTo(
        phoneRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
          onComplete: () => {
            // Floating continuous idle animation after entry
            gsap.to(phoneRef.current, {
              y: -12,
              duration: 2.5,
              repeat: -1,
              yoyo: true,
              ease: 'sine.easeInOut',
            });
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Download link sent to: ${contactValue || 'your input'}`);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 px-6 md:px-12 overflow-hidden my-12"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="./CTA-background.jpg" // Insert your background image URL here
          alt="Mountains Landscape"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/45 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/60 backdrop-blur-[1px]" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Clean Image Container */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div
            ref={phoneRef}
            className="relative w-[280px] sm:w-[320px] md:w-[340px] drop-shadow-2xl flex items-center justify-center"
          >
            <img
              src="./iPhone-13-Mockup.png" // Pass the imported image path or URL here
              alt="iPhone 13 Travel App Mockup"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Column: Text & Actions */}
        <div ref={contentRef} className="lg:col-span-7 text-white flex flex-col justify-center">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight drop-shadow-md">
            Your all-in-one travel app.
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mb-8 leading-relaxed font-normal drop-shadow">
            Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!
          </p>

          {/* Download Options Block */}
          <div className="flex flex-col xl:flex-row items-start xl:items-center gap-8">
            
            {/* Form Box */}
            <div className="w-full xl:w-auto flex-grow max-w-md">
              <div className="flex items-center gap-4 mb-3">
                <button
                  type="button"
                  onClick={() => setTab('mobile')}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    tab === 'mobile'
                      ? 'bg-white/25 text-white border border-white/30 backdrop-blur-md'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Mobile
                </button>
                <button
                  type="button"
                  onClick={() => setTab('email')}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    tab === 'email'
                      ? 'bg-white/25 text-white border border-white/30 backdrop-blur-md'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Email
                </button>
              </div>

              <p className="text-xs text-slate-300 mb-3">
                {tab === 'mobile'
                  ? 'Enter your phone number to receive a text with a link to download the app.'
                  : 'Enter your email address to receive a link to download the app.'}
              </p>

              <form
                onSubmit={handleSubmit}
                className="bg-slate-900/60 backdrop-blur-xl border border-white/20 p-1.5 rounded-full shadow-xl flex items-center"
              >
                <div className="flex items-center px-4 w-full">
                  {tab === 'mobile' && (
                    <span className="text-xs font-bold text-slate-300 mr-2 flex-shrink-0">
                      +91
                    </span>
                  )}
                  <input
                    type={tab === 'mobile' ? 'tel' : 'email'}
                    placeholder={tab === 'mobile' ? 'Mobile number' : 'Email address'}
                    value={contactValue}
                    onChange={(e) => setContactValue(e.target.value)}
                    className="bg-transparent text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-md flex-shrink-0"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Divider */}
            <div className="hidden xl:flex flex-col items-center justify-center text-xs text-slate-400 font-medium">
              <div className="w-[1px] h-8 bg-white/20 mb-2" />
              <span>or</span>
              <div className="w-[1px] h-8 bg-white/20 mt-2" />
            </div>

            {/* Store Badges */}
            <div className="flex flex-row xl:flex-col gap-3 flex-shrink-0">
              <a
                href="#google-play"
                className="bg-black/90 hover:bg-black text-white border border-white/20 px-4 py-2 rounded-xl flex items-center gap-3 transition-transform hover:scale-105 shadow-lg group"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.373 2.373 0 0 1-.61-1.613V3.427c0-.623.224-1.2.609-1.613zM15.206 13.414l2.454-2.454-12.8-7.39 10.346 9.844zm0-2.828L4.86 1.132l12.8 7.39-2.454 2.064zm1.884 1.414l3.86-2.228a1.2 1.2 0 0 0 0-2.072l-3.86-2.228-2.454 2.454 2.454 4.074z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase tracking-wider font-semibold text-slate-400">
                    GET IT ON
                  </div>
                  <div className="text-xs font-bold font-sans">Google Play</div>
                </div>
              </a>

              <a
                href="#app-store"
                className="bg-black/90 hover:bg-black text-white border border-white/20 px-4 py-2 rounded-xl flex items-center gap-3 transition-transform hover:scale-105 shadow-lg group"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.36-.58.67-1.09 1.75-.95 2.78 1.01.08 2.05-.54 2.67-1.29z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase tracking-wider font-semibold text-slate-400">
                    Download on the
                  </div>
                  <div className="text-xs font-bold font-sans">App Store</div>
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}