/**
 * Title: Simple Good Food
 * Description: Good Food - Where user can learn about good food
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

"use client";

import GoodFoodOneIcon from "@/public/goodfoodOne.png";
import GoodFoodThreeIcon from "@/public/goodfoodthree.png";
import GoodFoodTwoIcon from "@/public/goodfoodtwo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const goodFoods = [
    {
        title: "Health Awareness",
        image: GoodFoodOneIcon,
        description: "Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best."
    },
    {
        title: "More Protein",
        image: GoodFoodTwoIcon,
        description: "Protein rich meals to FUEL your workouts, improve recuperation, and increase outcomes"
    },
    {
        title: "Unending Variety",
        image: GoodFoodThreeIcon,
        description: "Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine"
    }
]
export default function SimpleGoodFood() {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    }, [])
  return (
    <div className="bg-white w-full container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center">Why Simply Good Food</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
         {
             goodFoods.map((item, index) => (
                 <div key={index} className="flex flex-col items-center gap-2" data-aos="zoom-in">
                     <Image src={item.image} alt="food image"  width={100} height={100}/>
                     <h3 className="text-xl font-bold">{item.title}</h3>
                     <p className="text-center text-gray-600">{item.description}</p>
                 </div>
             ))
         }
      </div>
    </div>
  )
}
