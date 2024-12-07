import logo from '@/public/restaurent_website_logo.png';
import Image from "next/image";
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <div className="w-full">
      {/* menu  */}
      <div className="w-full bg-slate-50 py-10">
        <div className="p-4 md:p-0 md:container mx-auto flex flex-col md:flex-row gap-10 md:gap-20 ">
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-3/12">
            <Image src={logo} alt="logo" width={1000} height={1000} className="w-32 h-32" />
          </div>

          {/* Menu 1 */}
          <div className="flex flex-col gap-3 text-gray-700 w-full md:w-2/12">
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Our Menus</Link>
            <Link href={'/'}>Meal Plans</Link>
            <Link href={'/'}>Catering</Link>
          </div>

          {/* Menu 2 */}
          <div className="flex flex-col gap-3 text-gray-700 w-full md:w-2/12">
            <Link href={'/'}>How it works</Link>
            <Link href={'/'}>Testimonials</Link>
            <Link href={'/'}>FAQ</Link>
            <Link href={'/'}>Contact</Link>
          </div>

          {/* Subscribe & Social Icons */}
          <div className="w-full md:w-5/12">
            <h2 className="text-lg font-medium text-gray-600">Subscribe to our Email Alerts</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-1.5 px-4 border border-gray-300 rounded-lg"
              />
              <Button>Subscribe</Button>
            </div>
            <div className="flex justify-center md:justify-start gap-6 mt-4">
              {/* Facebook */}
              <Link href="https://www.facebook.com" className="text-blue-600">
                <FaFacebook size={24} />
              </Link>

              {/* Instagram */}
              <Link href="https://www.instagram.com" className="text-pink-600">
                <FaInstagram size={24} />
              </Link>

              {/* LinkedIn */}
              <Link href="https://www.linkedin.com" className="text-blue-700">
                <FaLinkedin size={24} />
              </Link>

              {/* X (Twitter) Logo */}
              <Link href="https://www.x.com" className="text-blue-500">
                <FaTwitter size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Rights */}
      <div className="w-full h-10 flex justify-center items-center bg-black text-white">
        <h3>© All rights reserved by Simply Good Foods</h3>
      </div>
    </div>
  );
}
