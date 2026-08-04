import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import { FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi';

const allPropertyTypes = [
  { id: 1, name: 'Hotels', imgSrc: '' },
  { id: 2, name: 'Apartments', imgSrc: '' },
  { id: 3, name: 'Resorts', imgSrc: '' },
  { id: 4, name: 'Villas', imgSrc: '' },
  { id: 5, name: 'Cabins', imgSrc: '' },
  { id: 6, name: 'Cottages', imgSrc: '' },
  { id: 7, name: 'Glamping Sites', imgSrc: '' },
  { id: 8, name: 'Hostels', imgSrc: '' },
  { id: 9, name: 'Motels', imgSrc: '' },
  { id: 10, name: 'B&Bs', imgSrc: '' },
  { id: 11, name: 'Penthouses', imgSrc: '' },
  { id: 12, name: 'Beach Houses', imgSrc: '' },
  { id: 13, name: 'Luxury Tents', imgSrc: '' },
  { id: 14, name: 'Castles', imgSrc: '' },
  { id: 15, name: 'Treehouses', imgSrc: '' },
  { id: 16, name: 'Eco Lodges', imgSrc: '' },
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

  const apply3DState = useCallback((targetIndex) => {
    const slides = slideRefs.current.filter(Boolean);
    if (!slides.length) return;

    slides.forEach((slide, idx) => {
      let position = idx - targetIndex;

      if (position > totalItems / 2) {
        position -= totalItems;
      } else if (position < -totalItems / 2) {
        position += totalItems;
      }

      // Base centered position offsets
      let x = '-50%';
      let y = '-50%';
      let z = -600;
      let rotationY = 0;
      let scale = 0.65;
      let opacity = 0;
      let zIndex = -100;

      // CENTER Active Slide
      if (position === 0) {
        z = 0;
        rotationY = 0;
        scale = 1;
        opacity = 1;
        zIndex = 100;
      }
      // Left 1 (Previous)
      else if (position === -1) {
        x = '-155%';
        z = -180;
        rotationY = 35;
        scale = 0.82;
        opacity = 0.7;
        zIndex = 80;
      }
      // Right 1 (Next)
      else if (position === 1) {
        x = '55%';
        z = -180;
        rotationY = -35;
        scale = 0.82;
        opacity = 0.7;
        zIndex = 80;
      }
      // Far Left 2
      else if (position === -2) {
        x = '-240%';
        z = -380;
        rotationY = 50;
        scale = 0.68;
        opacity = 0.35;
        zIndex = 60;
      }
      // Far Right 2
      else if (position === 2) {
        x = '140%';
        z = -380;
        rotationY = -50;
        scale = 0.68;
        opacity = 0.35;
        zIndex = 60;
      }

      gsap.to(slide, {
        x: x,
        y: y,
        z: z,
        rotationY: rotationY,
        scale: scale,
        opacity: opacity,
        zIndex: zIndex,
        duration: 0.7,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    });
  }, [totalItems]);

  useEffect(() => {
    apply3DState(activeIndex);
  }, [activeIndex, apply3DState]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  return (
    <section ref={containerRef} className="py-12 px-6 md:px-12 max-w-7xl mx-auto text-slate-900 bg-white overflow-hidden relative">
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

      {/* 3D Perspective Stage */}
      <div
        style={{ perspective: '1000px' }}
        className="w-full h-[320px] md:h-[360px] relative flex justify-center items-center"
      >
        <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
          {memoizedTypes.map((type, idx) => (
            <div
              key={`${type.id}-${type.originalIndex}`}
              ref={(el) => (slideRefs.current[idx] = el)}
              className="absolute top-1/2 left-1/2 w-[300px] sm:w-[360px] md:w-[420px] h-[200px] sm:h-[240px] md:h-[260px] rounded-2xl border border-slate-200/80 shadow-md bg-white overflow-hidden p-3 group transition-shadow duration-300 hover:shadow-xl"
              style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
            >
              {/* Rectangular Image Box */}
              <div className="relative w-full h-[140px] sm:h-[170px] md:h-[185px] rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-200/60">
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
              </div>

              {/* Text Label */}
              <div className="p-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {type.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}