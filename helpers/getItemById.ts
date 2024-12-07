/**
 * Title: Get Item By Id
 * Description: Get item id as parameter and return the item
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

import { FoodItems } from "@/db/Food";

export const getItemById = (id: number) => {
  return FoodItems.find((item: any) => item.id === id);
};
