import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardImg1 from "@/app/assets/automation.jpg";
import CardImg2 from "@/app/assets/media.jpg";
import CardImg3 from "@/app/assets/programming.jpg";
import CardImg4 from "@/app/assets/static.jpg";

const FlexBox = () => {
  return (
    <div>
      <div className=" text-center py-8">
        <Link
          href="/"
          className="bg-black text-white py-3 px-5 rounded-lg hover:text-black hover:bg-white hover:border-2"
        >
          Home
        </Link>
      </div>

      <div>
        <p className="text-center py-2">
          {" "}
          Class 09 Card Assigment with FlexBox
        </p>
      </div>

      <div className="flex justify-around items-center px-2 gap-3 sm:px-4 md:px-8 mt-7">
        <div className="shadow-2xl p-2 rounded-lg">
          <Image src={CardImg1} alt="Home img" className="w-[100%] md:h-[300px] rounded-xl " />
          <p  className="text-sm sm:text-base md:text-xl">Network Programmability </p>
        </div>
        <div className="shadow-2xl p-2 rounded-lg">
          <Image src={CardImg4} alt="Home img" className="w-[100%] md:h-[300px] rounded-xl " />
          <p className="text-sm sm:text-base md:text-xl">Program Fundamentals</p>
        </div>
      </div>

      <div className="flex justify-around items-center gap-3 px-2 sm:px-4 md:px-8 mt-7">
        <div className="shadow-2xl p-2 rounded-lg">
          <Image src={CardImg2} alt="Home img" className="w-[100%] md:h-[300px] rounded-xl " />
          <p  className="text-sm sm:text-base md:text-xl">Network Programmability </p>
        </div>
        <div className="shadow-2xl p-2 rounded-lg">
          <Image src={CardImg3} alt="Home img" className="w-[100%] md:h-[300px] rounded-xl " />
          <p className="text-sm sm:text-base md:text-xl">Programming Fundamentals</p>
        </div>
        <div className="shadow-2xl p-2 rounded-lg">
          <Image src={CardImg1} alt="Home img" className="w-[100%] md:h-[300px] rounded-xl " />
          <p className="text-sm sm:text-base md:text-xl">Artificial Intelligence </p>
        </div>
      </div>

    </div>
  );
};

export default FlexBox;
