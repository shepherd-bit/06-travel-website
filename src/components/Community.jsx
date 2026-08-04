import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiImage } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const communities = [
  {
    id: 1,
    title: 'India',
    subtitle: 'Travel community',
    members: '155,073 travelers',
    imgSrc: './community/indian.jpg', // Insert image URL here
  },
  {
    id: 2,
    title: 'Travel Talk',
    subtitle: 'Travel community',
    members: '155,073 travelers',
    imgSrc: './community/travel-talk.jpg', // Insert image URL here
  },
  {
    id: 3,
    title: 'Beach',
    subtitle: 'Travel community',
    members: '155,073 travelers',
    imgSrc: './community/beach.jpg', // Insert image URL here
  },
  {
    id: 4,
    title: 'Mountains',
    subtitle: 'Travel community',
    members: '155,073 travelers',
    imgSrc: './community/mountain.jpg', // Insert image URL here
  },
];

export default function CommunitySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Staggered cards reveal animation
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-6 md:px-12 max-w-7xl mx-auto font-sans">
      {/* Section Header */}
      <h2
        ref={headingRef}
        className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8"
      >
        Connect with other travelers in our community
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {communities.map((item, idx) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container Slot */}
            <div className="relative w-full h-[180px] sm:h-[190px] rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-200/60">
              {item.imgSrc ? (
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-400 p-2 text-center">
                  <FiImage className="text-3xl mb-1 text-slate-400" />
                  <span className="text-[10px] font-medium uppercase tracking-wider">
                    Insert Image for {item.title}
                  </span>
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="pt-4 pb-2 px-1">
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                {item.subtitle}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {item.members}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}