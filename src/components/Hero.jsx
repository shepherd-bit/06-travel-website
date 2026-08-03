import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FiSearch, FiCalendar, FiUser } from 'react-icons/fi';

// 10 World Tourist Destination Background Images
const bgImages = [
  './hero-fades/hero-1.avif',
  './hero-fades/hero-2.avif',
  './hero-fades/hero-3.avif',
  './hero-fades/hero-4.avif',
  './hero-fades/hero-5.avif',
  './hero-fades/hero-6.avif',
  './hero-fades/hero-7.avif',
  './hero-fades/hero-8.avif',
  './hero-fades/hero-9.avif',
  './hero-fades/hero-10.avif',
];

// Top Categories Placeholder Data
const categories = [
  { name: 'Beaches', iconSrc: './category-icons/beaches.png' },
  { name: 'Deserts', iconSrc: './category-icons/deserts.png' },
  { name: 'Mountains', iconSrc: './category-icons/mountains.png' },
  { name: 'Iconic Cities', iconSrc: './category-icons/iconic-cities.png' },
  { name: 'Houseboats', iconSrc: './category-icons/houseboats.png' },
  { name: 'Countryside', iconSrc: './category-icons/country-side.png' },
  { name: 'Camping', iconSrc: './category-icons/camping.png' },
  { name: 'Castles', iconSrc: './category-icons/castles.png' },
  { name: 'Skiing', iconSrc: './category-icons/skiing.png' },
  { name: 'Tropical', iconSrc: './category-icons/tropical.png' },
];

// 15 Top Vacation Destinations
const destinations = [
  { id: 1, name: 'Bali, Indonesia', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Kerry, Ireland', img: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Sydney, Australia', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Paris, France', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'Santorini, Greece', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: 'Tokyo, Japan', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80' },
  { id: 7, name: 'Rome, Italy', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80' },
  { id: 8, name: 'Maui, Hawaii', img: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80' },
  { id: 9, name: 'Swiss Alps, Switzerland', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80' },
  { id: 10, name: 'Cairo, Egypt', img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80' },
  { id: 11, name: 'Reykjavik, Iceland', img: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80' },
  { id: 12, name: 'Cape Town, South Africa', img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80' },
  { id: 13, name: 'Dubai, UAE', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
  { id: 14, name: 'Banff, Canada', img: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80' },
  { id: 15, name: 'Machu Picchu, Peru', img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80' },
];

export default function Hero() {
  const bgRefs = useRef([]);
  const trackRef = useRef(null);

  useEffect(() => {
    // 1. Background Image Crossfade Animation (Fades every 10 seconds)
    let currentIndex = 0;
    const images = bgRefs.current.filter(Boolean);

    gsap.set(images, { opacity: 0 });
    if (images[0]) gsap.set(images[0], { opacity: 1 });

    const fadeInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;

      gsap.to(images[currentIndex], { opacity: 0, duration: 1.5, ease: 'power2.inOut' });
      gsap.to(images[nextIndex], { opacity: 1, duration: 1.5, ease: 'power2.inOut' });

      currentIndex = nextIndex;
    }, 10000); // 10000ms = 10 seconds

    // 2. Ultra-slow Continuous Destination Carousel (3x slower: 135 seconds)
    let carouselAnimation;
    if (trackRef.current) {
      carouselAnimation = gsap.to(trackRef.current, {
        xPercent: -50,
        ease: 'none',
        duration: 135, // 3x slower speed
        repeat: -1,
      });
    }

    return () => {
      clearInterval(fadeInterval);
      if (carouselAnimation) carouselAnimation.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen text-white pt-28 pb-16 overflow-hidden flex flex-col justify-between">
      {/* Background Images Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        {bgImages.map((src, idx) => (
          <div
            key={idx}
            ref={(el) => (bgRefs.current[idx] = el)}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        {/* Subtle Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-center my-8">
        
        {/* Center-Aligned Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md mb-3">
            The whole world awaits...
          </h1>
          <p className="text-xl md:text-2xl font-medium text-cyan-300 tracking-wide drop-shadow">
            Discover extraordinary places and create unforgettable memories.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-2xl shadow-2xl max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          
          {/* Destination Search */}
          <div className="md:col-span-4 flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl border border-white/10">
            <FiSearch className="text-slate-300 text-xl flex-shrink-0" />
            <input
              type="text"
              placeholder="Search destinations, hotels"
              className="bg-transparent text-white placeholder-slate-300 text-sm focus:outline-none w-full"
            />
          </div>

          {/* Check In */}
          <div className="md:col-span-2 flex items-center gap-2 bg-white/10 px-4 py-3 rounded-xl border border-white/10">
            <FiCalendar className="text-slate-300 text-lg flex-shrink-0" />
            <input
              type="text"
              placeholder="Check in"
              className="bg-transparent text-white placeholder-slate-300 text-sm focus:outline-none w-full"
            />
          </div>

          {/* Check Out */}
          <div className="md:col-span-2 flex items-center gap-2 bg-white/10 px-4 py-3 rounded-xl border border-white/10">
            <FiCalendar className="text-slate-300 text-lg flex-shrink-0" />
            <input
              type="text"
              placeholder="Check out"
              className="bg-transparent text-white placeholder-slate-300 text-sm focus:outline-none w-full"
            />
          </div>

          {/* Guests */}
          <div className="md:col-span-2 flex items-center gap-2 bg-white/10 px-4 py-3 rounded-xl border border-white/10">
            <FiUser className="text-slate-300 text-lg flex-shrink-0" />
            <input
              type="text"
              placeholder="1 room, 2 adults"
              className="bg-transparent text-white placeholder-slate-300 text-sm focus:outline-none w-full"
            />
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="md:col-span-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Top Categories */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white drop-shadow">
            Top categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-4 text-center">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer group"
              >
                {/* Transparent Icon Container with Glow Effect */}
                <div className="w-10 h-10 mb-2 flex items-center justify-center">
                  {cat.iconSrc ? (
                    <img
                      src={cat.iconSrc}
                      alt={cat.name}
                      className="w-8 h-8 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.9)] transition-all duration-300"
                    />
                  ) : (
                    <span className="text-xs text-slate-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                      Icon
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold text-slate-200">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Top Vacation Destinations Infinite Continuous Carousel */}
      <div className="relative z-10 w-full mt-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow">
            Top Vacation Destinations
          </h2>
        </div>

        {/* Infinite Track Overflow Container */}
        <div className="w-full overflow-hidden">
          <div ref={trackRef} className="flex gap-6 w-max">
            {/* Original 15 Cards + Cloned 15 Cards for Seamless Loop */}
            {[...destinations, ...destinations].map((dest, idx) => (
              <div
                key={idx}
                className="relative w-64 md:w-72 h-44 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border border-white/20 group"
              >
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-base md:text-lg font-bold text-white drop-shadow">
                  {dest.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}