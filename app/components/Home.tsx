import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="mybio">
        <h2 className="text-xl sm:text-2xl py-8 md:text-4xl text-center">
          All My Sunday Class Assigments
        </h2>
        <h4>
          Name : <span className="font-bold">Muhammad Salman</span>
        </h4>
        <h4>
          Slot : <span className="font-bold" >Sunday 2-5</span>
        </h4>
        <h3>Assigments</h3>
      </div>
      <div className="bg-green-600 text-white py-3 px-5 rounded-lg  hover:bg-green-800 ">
        <Link href="/flexbox" className="">
          FlexBox Assigments
        </Link>
      </div>
    </div>
  );
}
