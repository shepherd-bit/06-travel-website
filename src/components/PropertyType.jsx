import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import { FiChevronLeft, FiChevronRight, FiImage, FiTrendingUp } from 'react-icons/fi';

const allPropertyTypes = [
  {
    id: 1,
    name: 'Hotels',
    count: '12,400+ Stays',
    badge: 'Popular',
    description: 'Perfect for couples, business travelers, and small families of 2 to 4 guests seeking full-service luxury. Enjoy 24/7 room service, daily housekeeping, and premium amenities designed for effortless, hassle-free stays in central urban hubs.',
    imgSrc: './property-types/hotels-1.jpg',
  },
  {
    id: 2,
    name: 'Apartments',
    count: '8,200+ Stays',
    badge: 'Trending',
    description: 'Ideal for extended stays, digital nomads, and medium families of 3 to 5 members. Features fully equipped kitchens, in-unit laundry, and private living areas that offer occupiers the exact comfort, privacy, and flexibility of home.',
    imgSrc: './property-types/apartments-2.jpg',
  },
  {
    id: 3,
    name: 'Resorts',
    count: '4,100+ Stays',
    badge: 'Top Rated',
    description: 'Tailored for multi-generational families and groups of 4 to 8 guests craving complete relaxation. Packed with on-site dining, infinity pools, kids clubs, and spa facilities so occupiers never have to leave the property.',
    imgSrc: './property-types/resorts-3.jpg',
  },
  {
    id: 4,
    name: 'Villas',
    count: '3,500+ Stays',
    badge: 'Luxury',
    description: 'Built for large families and groups of 6 to 12 people seeking total exclusivity. Offers private swimming pools, expansive gardens, and multiple en-suite bedrooms where guests can host private gatherings in total tranquility.',
    imgSrc: './property-types/villas-4.jpg',
  },
  {
    id: 5,
    name: 'Cabins',
    count: '2,900+ Stays',
    badge: 'Cozy Pick',
    description: 'Best suited for romantic couples or small families of 2 to 4 looking for a secluded mountain retreat. Features cozy wood-burning fireplaces, outdoor hot tubs, and direct nature access for occupiers wanting a peaceful escape.',
    imgSrc: './property-types/cabins-5.jpg',
  },
  {
    id: 6,
    name: 'Cottages',
    count: '1,800+ Stays',
    badge: 'Charming',
    description: 'Great for small families of 3 to 5 or retirees wanting a calm countryside holiday. Features vintage charm, lush private gardens, and quiet surroundings perfectly tailored for occupiers looking to unwind in a slow-paced environment.',
    imgSrc: './property-types/cottages-6.jpg',
  },
  {
    id: 7,
    name: 'Glamping Sites',
    count: '1,200+ Stays',
    badge: 'Eco Escape',
    description: 'Tailored for adventurous couples and young families of 2 to 4 who love nature without sacrificing luxury. Offers heated geodesic domes or canvas tents with comfortable plush beds and stargazing decks immersed in the wild.',
    imgSrc: './property-types/glamping-sites-7.jpg',
  },
  {
    id: 8,
    name: 'Hostels',
    count: '5,600+ Stays',
    badge: 'Budget Friendly',
    description: 'Designed for solo backpackers and small social groups of 1 to 3 friends traveling on a budget. Offers shared or private dorms with communal kitchens and vibrant lounges ideal for meeting fellow international travelers.',
    imgSrc: './property-types/hostels-8.jpg',
  },
  {
    id: 9,
    name: 'Motels',
    count: '3,100+ Stays',
    badge: 'Road Trip',
    description: 'Engineered for road-trippers, solo drivers, and families of 2 to 4 needing convenient overnight stops. Features direct park-at-your-door access, fast check-ins, and budget rates right off major highway routes.',
    imgSrc: './property-types/motels-9.jpg',
  },
  {
    id: 10,
    name: 'B&Bs',
    count: '2,400+ Stays',
    badge: 'Homey',
    description: 'Suited for couples and small family groups of 2 to 3 seeking personalized hospitality. Hosted by friendly locals offering boutique decorated rooms and fresh, home-cooked breakfasts for an authentic cultural stay.',
    imgSrc: './property-types/B&Bs-10.jpg',
  },
  {
    id: 11,
    name: 'Penthouses',
    count: '850+ Stays',
    badge: 'Exclusive',
    description: 'Tailored for high-end corporate executives, VIPs, and groups of 2 to 6 who value skyline luxury. Located on top building floors featuring wraparound floor-to-ceiling glass, private rooftop terraces, and high-end tech.',
    imgSrc: './property-types/penthouse-11.jpg',
  },
  {
    id: 12,
    name: 'Beach Houses',
    count: '2,100+ Stays',
    badge: 'Oceanfront',
    description: 'Designed for beach-loving families and friends of 4 to 10 guests. Sits directly on the shoreline with private boardwalk access, outdoor showers, and expansive sundecks perfect for coastal summer vacations.',
    imgSrc: './property-types/beach-house-12.jpg',
  },
  {
    id: 13,
    name: 'Luxury Tents',
    count: '940+ Stays',
    badge: 'Safari Style',
    description: 'Crafted for eco-travelers and small safari groups of 2 to 4 guests. Features spacious canvas rooms with ensuite bathrooms, hardwood floors, and guided wildlife excursions right outside your doorstep.',
    imgSrc: './property-types/luxury-tents-13.jpg',
  },
  {
    id: 14,
    name: 'Castles',
    count: '420+ Stays',
    badge: 'Historic',
    description: 'Uniquely suited for grand celebrations, weddings, and large family reunions of 10 to 20+ guests. Step into living history with grand banqueting halls, sprawling grounds, and majestic royal architecture.',
    imgSrc: './property-types/castle-14.jpg',
  },
  {
    id: 15,
    name: 'Treehouses',
    count: '650+ Stays',
    badge: 'Unique',
    description: 'Constructed for adventurous couples or small families of 2 to 3 seeking a childhood dream stay. Elevated high in the forest canopy, offering unique wooden architecture, suspension bridges, and panoramic treetop views.',
    imgSrc: './property-types/treehouse-15.jpg',
  },
  {
    id: 16,
    name: 'Eco Lodges',
    count: '1,500+ Stays',
    badge: 'Sustainable',
    description: 'Best for environmentally conscious travelers and nature lovers in groups of 2 to 6. Built with sustainable materials, solar power, and low-impact designs that blend seamlessly into protected natural reserves.',
    imgSrc: './property-types/eco-lodges-16.jpg',
  },
];

export default function PropertyType() {
  const containerRef = useRef(null);
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const memoizedTypes = useMemo(() => {
    return allPropertyTypes.map((type, index) => ({
      ...type,
      originalIndex: index,
    }));
  }, []);

  const totalItems = memoizedTypes.length;

  const applyFlatState = useCallback((targetIndex) => {
    const slides = slideRefs.current.filter(Boolean);
    if (!slides.length) return;

    slides.forEach((slide, idx) => {
      let position = idx - targetIndex;

      if (position > totalItems / 2) {
        position -= totalItems;
      } else if (position < -totalItems / 2) {
        position += totalItems;
      }

      // Default offscreen/hidden state
      let x = '-50%';
      let y = '-50%';
      let scale = 0.6;
      let opacity = 0;
      let zIndex = -100;

      // CENTER Active Card (Focus)
      if (position === 0) {
        x = '-50%';
        scale = 1;
        opacity = 1;
        zIndex = 100;
      }
      // Left 1 (Straight, slightly smaller & faded)
      else if (position === -1) {
        x = '-155%';
        scale = 0.82;
        opacity = 0.65;
        zIndex = 80;
      }
      // Right 1 (Straight, slightly smaller & faded)
      else if (position === 1) {
        x = '55%';
        scale = 0.82;
        opacity = 0.65;
        zIndex = 80;
      }
      // Far Left 2
      else if (position === -2) {
        x = '-235%';
        scale = 0.68;
        opacity = 0.25;
        zIndex = 60;
      }
      // Far Right 2
      else if (position === 2) {
        x = '135%';
        scale = 0.68;
        opacity = 0.25;
        zIndex = 60;
      }

      // Animate with GSAP (rotationY explicitly set to 0 for a flat look)
      gsap.to(slide, {
        x: x,
        y: y,
        rotationY: 0,
        scale: scale,
        opacity: opacity,
        zIndex: zIndex,
        duration: 0.65,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    });
  }, [totalItems]);

  useEffect(() => {
    applyFlatState(activeIndex);
  }, [activeIndex, applyFlatState]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  return (
    <section ref={containerRef} className="py-16 px-6 md:px-12 max-w-7xl mx-auto text-slate-900 bg-white overflow-hidden relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-6 relative z-10">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Browse by property type
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Explore 16+ unique types of stays tailored to your preference
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-700 transition-all duration-200 cursor-pointer shadow-sm"
            title="Previous"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 cursor-pointer shadow-md shadow-blue-200"
            title="Next"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Stage Container */}
      <div className="w-full h-[480px] sm:h-[500px] md:h-[520px] relative flex justify-center items-center">
        <div className="w-full h-full relative">
          {memoizedTypes.map((type, idx) => (
            <div
              key={`${type.id}-${type.originalIndex}`}
              ref={(el) => (slideRefs.current[idx] = el)}
              className="absolute top-1/2 left-1/2 w-[310px] sm:w-[380px] md:w-[440px] h-[420px] sm:h-[440px] md:h-[460px] rounded-2xl border border-slate-200/80 shadow-md bg-white overflow-hidden p-4 group transition-shadow duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Image Box with Floating Stats Widget */}
              <div className="relative w-full h-[170px] sm:h-[190px] md:h-[210px] rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-200/60 flex-shrink-0">
                {type.imgSrc ? (
                  <img
                    src={type.imgSrc}
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-400 p-2 text-center">
                    <FiImage className="text-3xl mb-1 text-slate-400" />
                    <span className="text-[10px] font-medium uppercase tracking-wider">
                      Insert Image for {type.name}
                    </span>
                  </div>
                )}

                {/* Statistics Widget Pill */}
                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md border border-slate-200/80 px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5 text-slate-800">
                  <FiTrendingUp className="text-blue-600 text-xs" />
                  <span className="text-[11px] font-bold tracking-tight">{type.count}</span>
                </div>
              </div>

              {/* Text & Detailed Description Block */}
              <div className="pt-3 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {type.name}
                    </h3>
                    <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      {type.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-4">
                    {type.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}