/**
 * Title: Home Page
 * Description: Home Page - Restaurant Website
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

import FAQ from "@/components/HomeComponents/FAQ";
import ReviewsCarousel from "@/components/HomeComponents/Feedback";
import HeroSection from "@/components/HomeComponents/HeroSection";
import MealPlans from "@/components/HomeComponents/MealPlans";
import SimpleGoodFood from "@/components/HomeComponents/SimpleGoodFood";
import FoodCarousel from "@/components/SharedComponents/foodCarousel";
import { Feedbacks } from "@/db/FeedBack";
import { FoodItems } from "@/db/Food";

export default function Home() {
return (
  <div>
    <HeroSection/>
    <SimpleGoodFood/>
    <FoodCarousel heading="Popular Foods" headingPosition="text-start" foodItems={FoodItems} />
    <MealPlans/>
    <FAQ/>
    <ReviewsCarousel heading="Feedbacks" headingPosition="text-center" reviews={Feedbacks} />
  </div>
);
}
