import React from "react";
import Link from "next/link";
import Image from "next/image";
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
        <p className="text-center text-sm sm:text-base py-2">
          1. Make Responsive Product Card Component. <br />
          2. On lg devices there should be 3 card per row. <br />
          3. On md devices there should be 2 card perrow.
          <br /> 4. On sm devices there should be 1 card per row. <br />
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 md:p-10">
        {CardData.map((card) => (
          <div key={card.title} className="shadow-2xl p-2 md:p-4 rounded-md">
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
