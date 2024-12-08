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
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  // State variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const { data: session, status } = useSession(); 
  const router = useRouter();

  // Handle form submission
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");

    // Perform login using NextAuth
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log(res?.error);
    if (res?.error) {
      
      setError("Invalid email or password.");
    } else if (res?.ok) {
      router.push("/"); 
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    window.location.href = "/";
  }
  

  return (
    <div className="w-full h-[75vh] sm:h-screen relative">
      {/* Background Image */}
      <Image
        src={BackgroundImage}
        alt="Background"
        className="w-full h-full object-cover object-center"
        quality={100}
      />

      {/* Login Form Card */}
      <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-bold text-center">
            Sign in to your account
          </CardTitle>
          <CardDescription className="text-center text-sm text-gray-600">
            Please enter your email and password to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                placeholder="Asadujjaman@gmail.com"
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
                <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black">
                  👁️
                </span>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            {/* Remember Password and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  id="remember-password"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <Label
                  htmlFor="remember-password"
                  className="text-sm font-medium text-gray-600"
                >
                  Remember Password
                </Label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-red-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Log in
            </Button>
          </form>
        </CardContent>
        {/* Sign Up */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-orange-500 font-medium hover:underline">
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  );
}
