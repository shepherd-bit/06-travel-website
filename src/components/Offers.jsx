import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCopy, FiCheck, FiImage } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const offersData = [
  {
    id: 1,
    category: 'Flights',
    badge: 'Domestic Flights',
    discount: 'SAVE $50',
    title: 'Huge savings on flight with Moveo.',
    description: 'Book domestic flights starting @ just $49',
    code: 'MOVEOFLIGHT',
    imgSrc: './offers/domentic-flights.jpg', // Add image path here
  },
  {
    id: 2,
    category: 'Hotels',
    badge: 'International Hotels',
    discount: '20% OFF',
    title: 'Enjoy upto 20% off on International Hotels',
    description: 'Make the most of this deal on your first booking with Moveo.',
    code: 'HOTEL20OFF',
    imgSrc: './offers/international-hotels.jpg', // Add image path here
  },
  {
    id: 3,
    category: 'Bank Offers',
    badge: 'Bank Offer',
    discount: '30% INSTANT',
    title: 'Get upto 30% instant discount',
    description: 'Get discount on flights, hotels and holiday packages with credit card.',
    code: 'BANK30SPECIAL',
    imgSrc: './offers/discount.jpg', // Add image path here
  },
];

const categories = ['All', 'Flights', 'Hotels', 'Bank Offers'];

export default function Offers() {
  const [activeTab, setActiveTab] = useState('All');
  const [copiedId, setCopiedId] = useState(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const badgesRef = useRef([]);

  // Filter offers based on active tab
  const filteredOffers =
    activeTab === 'All'
      ? offersData
      : offersData.filter((offer) => offer.category === activeTab);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Stagger Animation on Scroll
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        }
      );

      // 2. Floating Badge Idle Animation
      badgesRef.current.forEach((badge) => {
        if (badge) {
          gsap.to(badge, {
            y: -5,
            duration: 1.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [filteredOffers]);

  // Copy promo code logic
  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section ref={containerRef} className="py-12 px-6 md:px-12 max-w-7xl mx-auto text-slate-900">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Exclusive Offers
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Promotions, deals, and special offers for you
          </p>
        </div>

        {/* Minimal Pill Tabs */}
        <div className="flex gap-2 bg-slate-100 p-1 rounded-full self-start sm:self-auto border border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredOffers.map((offer, idx) => (
          <div
            key={offer.id}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="group relative bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-row items-center gap-4"
          >
            {/* Left Image Box with Floating Discount Badge Widget */}
            <div className="relative w-2/5 h-40 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 flex items-center justify-center border border-slate-200/60">
              {offer.imgSrc ? (
                <img
                  src={offer.imgSrc}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-400 p-2 text-center">
                  <FiImage className="text-2xl mb-1 text-slate-400" />
                  <span className="text-[10px] font-medium uppercase tracking-wider">
                    Insert Image
                  </span>
                </div>
              )}

              {/* Interactive Floating Badge Widget */}
              <div
                ref={(el) => (badgesRef.current[idx] = el)}
                className="absolute top-2 left-2 bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-bold px-2.5 py-1 rounded-md shadow-md border border-white/20"
              >
                {offer.discount}
              </div>
            </div>

            {/* Right Details Box */}
            <div className="w-3/5 flex flex-col justify-between h-40 py-1">
              <div>
                <span className="text-[11px] font-medium text-slate-400 block mb-1">
                  {offer.badge}
                </span>
                <h3 className="text-sm md:text-base font-bold text-slate-900 leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {offer.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {offer.description}
                </p>
              </div>

              {/* Actions: Copy Code & Book Button */}
              <div className="flex items-center justify-between gap-2 mt-2">
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  Book Now
                </button>

                {/* Micro Copy Widget */}
                <button
                  onClick={() => handleCopy(offer.code, offer.id)}
                  className="flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                  title="Copy Code"
                >
                  {copiedId === offer.id ? (
                    <>
                      <FiCheck className="text-emerald-600 text-xs" />
                      <span className="text-emerald-600 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="text-xs" />
                      <span>Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}