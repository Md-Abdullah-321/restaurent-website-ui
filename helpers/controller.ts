/**
 * Title:
 * Description:
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

import bcrypt from "bcryptjs";

// Check if the code is running on the client-side
const isClient = typeof window !== "undefined";

// Simulate database in localStorage
const getUsers = (): any[] => {
  if (isClient) {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  }
  return [];
};

// Get user by email from the "database"
export const getUserByEmail = (email: string): any | null => {
  if (isClient) {
    const users = getUsers();
    const user = users.find((user: any) => user.email === email);
    return user || null;
  }
  return null;
};

// Verify password with bcryptjs
export const verifyPassword = (
  enteredPassword: string,
  storedPassword: string
): boolean => {
  return bcrypt.compareSync(enteredPassword, storedPassword);
};
