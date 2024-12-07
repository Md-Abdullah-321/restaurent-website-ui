/**
 * Title: Header
 * Description: Header - Where user can navigate to different pages
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

"use client";

import logo from "@/public/restaurent_website_logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = [
  { title: "Home", url: "/" },
  { title: "Our menus", url: "#" },
  { title: "Meal plans", url: "#" },
  { title: "Catering", url: "#" },
  { title: "How it works", url: "#" },
  { title: "Testimonials", url: "#" },
  { title: "FAQ", url: "#" },
];

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="w-full bg-white border-b-2 border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link href={"/"} className="flex-shrink-0 cursor-pointer">
          <Image src={logo} alt="logo" width={500} height={500} className="w-20 h-20" />
        </Link>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleSidebar} className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-4 text-gray-600">
            {Menu.map((item, index) => (
              <li key={item.title} className="flex space-x-4">
                <Link
                  href={item.url}
                  className="hover:text-green-500 transition duration-200 hover:font-medium"
                >
                  {item.title}
                </Link>

                {index !== Menu.length - 1 && <span className="mx-2">|</span>}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href={"/login"} className="px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-50">
            Log in
          </Link>
          <Link href={"/signup"} className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">Sign up</Link>
        </div>
      </div>

      {/* Sidebar on Mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white p-4 z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4 bg-slate-100 p-2">
          <Image src={logo} alt="logo" width={60} height={60} />
          <button
            onClick={toggleSidebar}
            className="text-gray-600 p-2 rounded-md hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu items inside the sidebar */}
        <ul className="space-y-2 text-gray-600">
          {Menu.map((item) => (
            <li key={item.title}>
              <Link
                href={item.url}
                className="block text-lg py-2 px-4 hover:text-green-500 hover:bg-gray-100 rounded-lg"
                onClick={toggleSidebar}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons inside the sidebar */}
        <div className="mt-6 flex flex-col space-y-4">
            <Link href={"/login"} className="px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-50">
              Log in
            </Link>
            <Link href={"/signup"} className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">Sign up</Link>
        </div>
      </div>
    </header>
  );
}
