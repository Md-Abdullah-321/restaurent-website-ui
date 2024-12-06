/**
 * Title: Header
 * Description: Header - Where user can navigate to different pages
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

import { Button } from "@/components/ui/button";
import logo from "@/public/restaurent_website_logo.png";
import Image from "next/image";
import Link from "next/link";

const Menu = [
  { title: "Home", url: "/" },
  { title: "Our menus", url: "#" },
  { title: "Meal plans", url: "#" },
  { title: "Catering", url: "#" },
  { title: "How it work", url: "#" },
  { title: "Testimonials", url: "#" },
  { title: "FAQ", url: "#" },
];

export default function Header() {
  return (
    <header className="w-full bg-white border-b-2 border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex-shrink-0">
            <Image src={logo} alt="logo" width={80} height={80} />
        </div>

        {/* Menu */}
        <nav className="flex">
            <ul className="flex space-x-4 text-gray-600">
            {Menu.map((item, index) => (
                <li key={item.title} className="flex space-x-4">
                <Link
                    href={item.url}
                    className="hover:text-green-500 transition duration-200 hover:font-medium"
                >
                    {item.title}
                </Link>

                {
                    index !== Menu.length - 1 && <span className="mx-2">|</span>
                }
                </li>
            ))}
            </ul>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
            <Button variant={"outline"}>
            Log in
            </Button>
            <Button className="">
            Sign up
            </Button>
        </div>
      </div>
    </header>
  );
}
