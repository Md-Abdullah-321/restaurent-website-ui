/**
 * Title: Signup Page
 * Description: Signup Page - Where user can signup to create an account
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BackgroundImage from "@/public/chicken_lolipop.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  // State variables
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contactNo, setContactNo] = useState<string>("");
  const [permanentAddress, setPermanentAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Handle form submission with type definition
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !contactNo || !permanentAddress || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Clear error message if valid
    setError("");

    // Perform registration action (this can be an API call)
    console.log("Registering user with", username, email, contactNo, permanentAddress, password);

    // Optionally, redirect after successful registration
    // router.push("/dashboard");
  };

  return (
    <div className="w-full h-[135vh] relative">
      {/* Background Image */}
      <Image
        src={BackgroundImage}
        alt="Background"
        className="w-full h-full object-cover object-center"
        quality={100}
      />

      {/* Registration Form Card */}
      <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 md:translate-x-1/3 -translate-y-1/2 w-full max-w-md bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-bold text-center">
            Create a new account
          </CardTitle>
          <CardDescription className="text-center text-sm text-gray-600">
            Please enter your details to register
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your username"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                required
              />
            </div>

            {/* Contact No Field */}
            <div className="space-y-2">
              <Label htmlFor="contactNo" className="text-sm font-medium">
                Contact No
              </Label>
              <Input
                id="contactNo"
                type="text"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                placeholder="Your contact number"
                required
              />
            </div>

            {/* Permanent Address Field */}
            <div className="space-y-2">
              <Label htmlFor="permanentAddress" className="text-sm font-medium">
                Permanent Address
              </Label>
              <Input
                id="permanentAddress"
                type="text"
                value={permanentAddress}
                onChange={(e) => setPermanentAddress(e.target.value)}
                placeholder="Your permanent address"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  required
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="********"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            {/* Register Button */}
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Register
            </Button>
          </form>
        </CardContent>
        {/* Login Link */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 font-medium hover:underline">
            Login
          </Link>
        </div>
      </Card>
    </div>
  );
}
