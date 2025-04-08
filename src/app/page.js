import Footer from "@/components/Footer";
import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
  <div className="w-full">
<div className="relative">
<Navbar/>
  <Section1/>
  </div>  
  <Section2/>  
  <Section3/>
<div className="py-[45px] border-t border-t-[#66666688]">
<Footer/>
</div>
  </div>
  );
}
