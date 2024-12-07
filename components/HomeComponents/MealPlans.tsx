/**
 * Title: MealPlans
 * Description: Meal Plans - Home Page Component
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

import RightImage from "@/public/tandoori-aloo-are-roasted-potato.png";
import Image from "next/image";
import { Button } from "../ui/button";



export default function MealPlans() {
  return (
    <div className='h-[500px] w-full flex flex-col-reverse md:flex-row mt-20 mb-10'>
      <div className="w-full md:w-1/2 bg-slate-200 flex items-center">
        <div className="w-[90%] bg-white flex flex-col gap-4 items-start p-10 pl-32 rounded-tr-[150px] rounded-br-[150px]">
            <h2 className="text-3xl font-bold">Make daily meals healthy and modarate</h2>
            <p>Ingredients are naturally rich and full of taste.</p>
            <Button variant={"secondary"}>Meal Plans <span className="ml-2 text-xl">↗</span></Button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Image src={RightImage} alt="right image" className="w-full h-full object-cover" quality={100}/>
      </div>
    </div>
  )
}
