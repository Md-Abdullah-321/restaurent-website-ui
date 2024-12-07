/**
 * Title: Get Related Foods By Id
 * Description: Get current food id as parameter and return the related food
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

import { FoodItems } from "@/db/Food";

export const getRelatedFoodsById = (relatedFoodId: number[]) => {
  return FoodItems.filter((item: any) => relatedFoodId.includes(item.id));
};
