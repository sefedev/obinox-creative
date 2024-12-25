import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";

// function ImageCarousel() {
//   const [scrollOffset, setScrollOffset] = useState(0);
//   const imageContainerRef = useRef(null);

//   const handleScroll = (direction) => {
//     const containerWidth = imageContainerRef.current.scrollWidth;
//     const imageWidth = imageContainerRef.current.offsetWidth;
//     const maxScrollOffset = containerWidth - imageWidth;

//     if (direction === "left") {
//       setScrollOffset(Math.max(0, scrollOffset - imageWidth));
//     } else if (direction === "right") {
//       setScrollOffset(Math.min(maxScrollOffset, scrollOffset + imageWidth));
//     }
//   };
//   return (
//     <>
//       <div className="relative flex w-full gap-4 overflow-x-hidden">
//         {[1, 2, 3, 4, 5, 6, 7].map((design, id) => (
//           <Image
//             key={id}
//             src={`/assets/images/design-${design}.png`}
//             alt={`design-${design}`}
//             ref={imageContainerRef}
//             className="flex transition-transform duration-300 rounded-lg"
//             style={{ transform: `translateX(-${scrollOffset}px)` }}
//             width={300}
//             height={200}
//           />
//         ))}
//       </div>
//       <div className="flex items-center justify-between w-3/4">
//         <button onClick={() => handleScroll("left")}>
//           <Image
//             src="/assets/icons/arrow-prev.svg"
//             alt="arrow"
//             width={20}
//             height={20}
//           />
//         </button>
//         <button onClick={() => handleScroll("right")}>
//           <Image
//             src="/assets/icons/arrow-next.svg"
//             alt="arrow"
//             width={20}
//             height={20}
//           />
//         </button>
//       </div>
//     </>
//   );
// }

const ImageCarousel = () => {
  return (
    // 33% of the carousel width.
    <Carousel className="relative">
      <CarouselContent className="relative flex w-full">
        {[1, 2, 3, 4, 5, 6, 7].map((index, id) => (
          <CarouselItem key={id} className="md:basis-1/4 basis-3/4">
            <Image
              key={id}
              src={`/assets/images/design-${index}.png`}
              alt={`design-${index}`}
              className="flex transition-transform duration-300 rounded-lg"
              width={300}
              height={200}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center w-full gap-12 mt-8">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
