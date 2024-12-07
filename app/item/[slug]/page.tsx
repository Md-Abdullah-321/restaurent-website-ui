"use client";

import FoodCarousel from "@/components/SharedComponents/foodCarousel";
import { Button } from "@/components/ui/button";
import { FoodTypes } from "@/db/Food";
import { getItemById } from "@/helpers/getItemById";
import { getRelatedFoodsById } from "@/helpers/getRelatedFoodsById";
import AOS from "aos";
import "aos/dist/aos.css";
import Image, { StaticImageData } from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function FoodItem() {
  const { slug } = useParams();
  const router = useRouter();
  const [item, setItem] = useState<FoodTypes>();
  const [relatedFoods, setRelatedFoods] = useState<FoodTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchedItem = getItemById(parseInt(slug as string));
      if (fetchedItem) {
        setItem(fetchedItem);
        const relatedItems = getRelatedFoodsById(fetchedItem.relatedFoods);
        setRelatedFoods(relatedItems);
      } else {
        router.push("/404");
      }
      setIsLoading(false);
    }
  }, [slug, router]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  if (isLoading || !item) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="container mx-auto my-10">
      <div
        className="flex items-center gap-2 text-red-500 cursor-pointer hover:text-red-600"
        onClick={() => router.back()}
        data-aos="fade-right"
      >
        <IoMdArrowBack className="w-5 h-5" />
        <span className="underline hover:no-underline">Back</span>
      </div>

      {/* Food Details Section */}
      <div className="flex flex-col md:flex-row gap-10 mt-10 md:h-[420px]">
        {/* Left Image Section */}
        <div className="w-full md:w-6/12">
          <Image
            src={item.image as StaticImageData}
            alt={item.name}
            width={500}
            height={500}
            className="border-[10px] w-full h-full border-gray-200 rounded-[60px] object-cover"
            data-aos="zoom-in"
          />
        </div>

        {/* Right Details Section */}
        <div className="w-full md:w-6/12 p-4 sm:p-0">
          {/* Food Name */}
          <h2 className="text-3xl font-semibold text-gray-700" data-aos="fade-up">{item.name}</h2>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2" data-aos="fade-up">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="text-gray-600 text-lg">{item.rating}/5</span>
          </div>

          {/* Macronutrients */}
          <div className="flex items-center gap-2 text-sm text-red-500 mt-3" data-aos="fade-up">
            <span>Protein {item.protein}g</span>
            <span>/</span>
            <span>Carbs {item.carbs}g</span>
            <span>/</span>
            <span>Fat {item.fat}g</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold text-gray-800 mt-4" data-aos="fade-up">${item.price.toFixed(2)}</p>

          {/* Description */}
          <p className="text-gray-600 mt-3" data-aos="fade-up">{item.description}</p>

          {/* Add to Cart Button */}
          <Button className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg" data-aos="fade-up">
            Add to Cart
          </Button>

          {/* Ingredients and Instructions */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200" data-aos="fade-left">
              <h3 className="text-gray-700 font-semibold">Ingredients</h3>
              <span className="text-gray-600 font-semibold">{`>`}</span>
            </div>
            <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200" data-aos="fade-left">
              <h3 className="text-gray-700 font-semibold">Instructions</h3>
              <span className="text-gray-600 font-semibold">{`>`}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Foods */}
      {relatedFoods?.length > 0 && (
        <FoodCarousel heading="Related Products" headingPosition="text-start" foodItems={relatedFoods} />
      )}

       <button className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50">
        🛒
      </button>
    </div>
  );
}
