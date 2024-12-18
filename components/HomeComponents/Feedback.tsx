"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FeedbackTypes } from "@/db/FeedBack";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";


export default function ReviewsCarousel({ heading, headingPosition, reviews }: {
  heading: string;
  headingPosition: string;
  reviews: FeedbackTypes[];
}) {
  const [itemWidth, setItemWidth] = useState("100%"); 

  // Update item width based on screen size
  useEffect(() => {
    AOS.init({
      duration: 500,
    })
    const updateItemWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemWidth("90%");
      } else {
        setItemWidth("calc(45% - 10px)"); 
      } 
    };

    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);
    return () => {
      window.removeEventListener("resize", updateItemWidth);
    };
  }, []);

  
  return (
    <div className="w-full py-8 m-4 md:container mx-auto relative">
      {/* Section Heading */}
      <h2 className={`text-2xl font-bold text-gray-800 mb-3 sm:mb-6 ${headingPosition}`} data-aos="fade-up">{heading}</h2>

      {/* Carousel Wrapper */}
      <Carousel className="relative sm:-mr-[calc(50vw-50%)]" data-aos="fade-left" data-aos-delay="200">
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white">
          ❮
        </CarouselPrevious>

        <CarouselContent className="flex gap-4 transition-transform">
          {reviews?.map((review: FeedbackTypes, index: number) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 bg-slate-50 border border-gray-200 rounded-md shadow-md px-4 py-8"
              style={{ flex: `0 0 ${itemWidth}` }} 
            >
              <div className="flex items-center space-x-4">
                <img
                  src={review.userImage}
                  alt={review.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{review.name}</h3>
                  <p className="text-sm text-orange-500">{review.designation}</p>
                  <p className=" text-gray-500 text-sm">{review.message}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white">
          ❯
        </CarouselNext>
      </Carousel>
    </div>
  );
}
