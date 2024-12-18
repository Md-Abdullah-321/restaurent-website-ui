/**
 * Title: Food Items
 * Description: Food Items - From where I am using the data to display Foods.
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

import foodImageOne from "@/public/foods/food-1.png";
import foodImageTwo from "@/public/foods/food-2.png";
import foodImageThree from "@/public/foods/food-3.png";
import foodImageFour from "@/public/foods/food-4.png";
import foodImageFive from "@/public/foods/food-5.png";
import foodImageSix from "@/public/foods/food-6.png";
import { StaticImageData } from "next/image";

export interface FoodTypes {
  id: number;
  name: string;
  image: StaticImageData;
  rating: number;
  protein: number;
  carbs: number;
  fat: number;
  price: number;
  description: string;
  relatedFoods: number[];
}
export const FoodItems: FoodTypes[] = [
  {
    id: 1,
    name: "Grilled Chicken Salad",
    image: foodImageOne,
    rating: 4.5,
    protein: 25,
    carbs: 10,
    fat: 5,
    price: 12.99,
    description:
      "A healthy and delicious salad topped with grilled chicken, fresh vegetables, and a light vinaigrette.",
    relatedFoods: [2, 3, 4, 5, 6],
  },
  {
    id: 2,
    name: "Quinoa Bowl",
    image: foodImageTwo,
    rating: 4.7,
    protein: 15,
    carbs: 30,
    fat: 7,
    price: 10.49,
    description:
      "A nutritious bowl of quinoa, avocado, roasted vegetables, and a lemon tahini dressing.",
    relatedFoods: [1, 3, 4, 5, 6],
  },
  {
    id: 3,
    name: "Avocado Toast",
    image: foodImageThree,
    rating: 4.2,
    protein: 7,
    carbs: 20,
    fat: 10,
    price: 8.99,
    description:
      "Creamy avocado spread on toasted multigrain bread, topped with a sprinkle of chili flakes.",
    relatedFoods: [1, 2, 4, 5, 6],
  },
  {
    id: 4,
    name: "Grilled Salmon",
    image: foodImageFour,
    rating: 4.8,
    protein: 30,
    carbs: 5,
    fat: 12,
    price: 15.99,
    description:
      "Perfectly grilled salmon served with a side of roasted vegetables and a lemon wedge.",
    relatedFoods: [1, 2, 3, 5, 6],
  },
  {
    id: 5,
    name: "Vegan Buddha Bowl",
    image: foodImageFive,
    rating: 4.6,
    protein: 12,
    carbs: 35,
    fat: 8,
    price: 11.99,
    description:
      "A vibrant bowl of fresh greens, roasted sweet potatoes, chickpeas, and a creamy tahini dressing.",
    relatedFoods: [1, 2, 3, 4, 6],
  },
  {
    id: 6,
    name: "Chicken Wrap",
    image: foodImageSix,
    rating: 4.3,
    protein: 20,
    carbs: 25,
    fat: 9,
    price: 9.99,
    description:
      "A flavorful wrap filled with grilled chicken, lettuce, tomatoes, and a spicy mayo sauce.",
    relatedFoods: [1, 2, 3, 4, 5],
  },
];
