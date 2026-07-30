import { Menu } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-wrap items-center justify-center gap-10 bg-neutral-100">
      <div className="bg-gradient-to-br from-orange-100 to-orange-200 flex h-160 w-230 overflow-hidden">
        <div className="flex flex-col w-1/2 p-20">
          <div className="flex justify-between w-full items-start gap-145">
            <div className="flex">
              <h1 className="font-bold text-2xl text-black">EAT</h1>
              <h1 className="text-2xl text-black">ERY</h1>
            </div>
            <button className="rounded-full p-2">
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-20">
            <h1 className="font-regular text-black text-[23px] uppercase">
              Black Friday Program Coupon Opt-In
            </h1>
            <h2 className="font-bold text-black text-1xl mt-2">
              Take 30% off The Healthy Home Chef Master's Program
            </h2>
            <p className="text-black text-[10px] mt-1 text-1xl">
              In this virtual series, you'll learn how to plan, cook,
              and eat healthy meals (on a budget and a time-crunch).
              We're offering all our new students a 30% discount PLUS a
              free bonus training video this Black Friday—that's a
              savings of $500. Don't miss out!
            </p>
            <button className="flex text-[14px] items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-6 py-1 rounded-full w-fit mt-2">
              Get 30% Off
            </button>
          </div>
        </div>
        <div className="relative w-1/2 flex items-center justify-center top-20">
          <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-br from-orange-300 to-orange-400 opacity-60 bottom-61 right-41" />
          <div className="relative w-[280px] h-[280px] rounded-3xl overflow-hidden shadow-xl z-10 bg-orange-300 bottom-21 right-23">
            <Image 
              src="/Image/2cffa3d5e7d60e7c4c3b2ab0039f332edce3c0f1.jpg" 
              alt="ImageOne"fill sizes="280px" className="object-cover"/>
          </div>
          <div className="absolute top-17 right-30 w-30 h-30 rounded-3xl overflow-hidden shadow-lg border-white z-20 bg-white">
            <Image
              src="/Image/fa172fb88d38d45237c5aa19794c3d1319a86be5 (2).jpg"
              alt="ImageTwo" fill sizes="120px" className="object-cover"/>
          </div>
          <div className="absolute bottom-58 right-30 w-30 h-30 rounded-3xl overflow-hidden shadow-lg rounded-35xl border-white z-20 bg-white">
            <Image
              src="/Image/e0ef5ac5e0c7f2719e425ebced6831c8ff3eb09b.jpg" 
              alt="ImageThree" fill sizes="120px" className="object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
}