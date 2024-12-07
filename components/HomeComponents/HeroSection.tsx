/**
 * Title: HeroSection
 * Description: Hero Section with a background image and styled content
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

import HeroBackgroundImage from "@/public/Hero_section_bg.png";
import HeroRightImage from "@/public/hero_section_right_image.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[550px]">
      {/* Background Image */}
      <Image
        src={HeroBackgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex items-center container mx-auto px-6">
        {/* Left Content */}
        <div className="flex-1 text-left space-y-6">
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-snug">
            Keep track of <br />
            <span className="text-green-700">Fitness Goal</span>
          </h2>
          <p className="text-lg text-gray-600">Order on Simply Good Food</p>
          <button className="flex items-center px-6 py-3 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition duration-300">
            Explore Menu 
            <span className="ml-2 text-xl">↗</span>
          </button>
        </div>

        {/* Right Content */}
        <div className="hidden md:flex flex-1 justify-center relative">
          {/* Circular Container */}
          <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] rounded-full border-[40px] border-green-500 flex items-center justify-center">
            <Image
              src={HeroRightImage}
              alt="Healthy Food"
              className="w-[85%] h-[85%] rounded-full object-cover"
            />
            {/* Navigation Buttons */}
            <button className="absolute left-0 transform -translate-x-[110%] bg-white border border-gray-300 rounded-full py-1 px-3 hover:bg-gray-100">
              ❮
            </button>
            <button className="absolute right-0 transform translate-x-[110%] bg-white border border-gray-300 rounded-full py-1 px-3 hover:bg-gray-100">
              ❯
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Cart Button */}
      <button className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50">
        🛒
      </button>
    </div>
  );
}
