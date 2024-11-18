import React from "react";
import Link from "next/link";
import Image from "next/image";
// import HomeImg from "@/app/assets/Logo.png";
import CardImg1 from "@/app/assets/automation.jpg";
import CardImg2 from "@/app/assets/media.jpg";
import CardImg3 from "@/app/assets/programming.jpg";
import CardImg4 from "@/app/assets/static.jpg";

interface CardType {
  img: any;
  title: string;
}
const CardData: CardType[] = [
  {
    img: CardImg1,
    title: "Network Programmability and Automation",
  },
  {
    img: CardImg2,
    title: "Artificial Intelligence (AI) and Deep Learning",
  },
  {
    img: CardImg3,
    title: "Programming Fundamentals",
  },
  {
    img: CardImg4,
    title: "Web2 Using NextJS",
  },
];

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
        <p className="text-center py-2"> Class 09 Card Assigment with FlexBox</p>
      </div>
      {/* <Image src={HomeImg} alt="Home Image" className="w-[300px] h-[300px]" /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CardData.map((card) => (
          <div key={card.title} className="shadow-2xl p-1 md:p-2 rounded-md">
            <Image
              src={card.img}
              alt={card.title}
              className="w-full rounded-lg"
            />
            <h4 className="md:text-lg p-2">{card.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexBox;
