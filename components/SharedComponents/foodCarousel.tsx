/**
 * Title: Responsive Food Carousel Component
 * Description: Displays a carousel of food items with dynamic visibility based on screen width.
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FoodTypes } from "@/db/Food";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function FoodCarousel({ heading, headingPosition, foodItems }: {
  heading: string;
  headingPosition: string;
  foodItems: FoodTypes[];
}) {
  const [itemWidth, setItemWidth] = useState("100%"); 

  // Update item width based on screen size
  useEffect(() => {
    const updateItemWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemWidth("100%");
      } else if (width >= 640 && width < 1024) {
        setItemWidth("calc(50% - 10px)"); 
      } else {
        setItemWidth("calc(28% - 10px)"); 
      }
    };

    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);
    return () => {
      window.removeEventListener("resize", updateItemWidth);
    };
  }, []);

  return (
    <div className="w-full py-8 px-2 my-10 h-[600px] md:container md:mx-auto">
      {/* Section Heading */}
      <h2 className={`text-2xl font-bold text-gray-800 mb-3 sm:mb-6 ${headingPosition}`}>{heading}</h2>

      {/* Carousel Wrapper */}
      <Carousel className="relative overflow-hidden">
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white">
          ❮
        </CarouselPrevious>

        <CarouselContent className="flex gap-4 transition-transform ml-0 sm:ml-10">
          {foodItems.map((food: FoodTypes, index: number) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 bg-slate-50 border border-gray-200 rounded-md shadow-md p-2"
              style={{ flex: `0 0 ${itemWidth}` }} 
            >
              {/* Food Content */}
              <Image 
                src={food.image}
                alt={food.name}
                width={1000}
                height={1000}
                className="w-full h-60 object-contain mb-2 rounded-md"
              />
              <p className="text-sm text-[#f39c12]"><span style={{"fontSize":"125%", "color": "#f39c12"}}>★</span>{food.rating}/5</p>
              <Link href={`/item/${food.id}`} className="text-lg font-semibold text-gray-800 my-4">
                {food.name}
              </Link>
              <p className="font-semibold text-gray-600">${food.price.toFixed(2)}</p>
              <Button className="mt-2 w-full">Add to Cart</Button>

              <div className="mt-2 text-sm flex justify-center gap-4">
                <span className="text-red-500">Protein {food.protein}g</span> /
                <span className="text-red-500">Carbs {food.carbs}g</span> /
                <span className="text-red-500">Fat {food.fat}g</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="absolute right-0 top-1/2 transform md:-translate-y-1/2 z-10 bg-white">
          ❯
        </CarouselNext>
      </Carousel>
    </div>
  );
}
