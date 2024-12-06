/**
 * Title: Home Page
 * Description: Home Page - Restaurant Website
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

import AnnouncementBar from "@/components/HomeComponents/AnnouncementBar";
import HeroSection from "@/components/HomeComponents/HeroSection";
import SimpleGoodFood from "@/components/HomeComponents/SimpleGoodFood";
import Header from "@/components/SharedComponents/header";

export default function Home() {
return (
  <div>
    <AnnouncementBar/>
    <Header/>
    <HeroSection/>
    <SimpleGoodFood/>
  </div>
);
}
