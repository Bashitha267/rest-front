import { useEffect, useState } from "react";
import { ChevronLeft, ChevronsRight } from "react-feather";

export default function GallerySlide({ children }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(current === 0 ? children.length - 1 : current - 1);
  const next = () => setCurrent(current === children.length - 1 ? 0 : current + 1);
  useEffect(() => {
    const interval = setInterval(next, 3000); // Change to the next slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [current]); // Re-run the effect when the `current` slide changes


  return (
    <div className="overflow-hidden relative w-full ">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-1000 "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children.map((slide, index) => (
          <div key={index} className="w-full h-auto   flex-shrink-0 ">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="md:flex hidden">
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="p-1 rounded-full bg-gray-200 bg-opacity-50"
          onClick={prev}
        >
          <ChevronLeft size={40} />
        </button>
        <button
          className="p-1 rounded-full bg-gray-200 bg-opacity-50"
          onClick={next}
        >
          <ChevronsRight size={40} />
        </button>
      </div>
      </div>
    </div>
  );
}
