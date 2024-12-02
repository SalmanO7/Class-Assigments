import Link from "next/link";

export default function Home({ classWork }: any) {
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
          Slot : <span className="font-bold">Sunday 2-5</span>
        </h4>
        <h3>Assigments</h3>
      </div>
      <div className="flex  gap-3">
        <Link
          href="/flexbox"
          className="bg-green-600 hover:bg-green-800 text-white rounded-lg py-3 px-5"
        >
          FlexBox Assigment
        </Link>
      </div>
      <div className="flex  gap-3 my-4">
        <Link
          href="/gridcard"
          className="bg-green-600 hover:bg-green-800 text-white rounded-lg py-3 px-5"
        >
          Class 10 Assigment
        </Link>
      </div>
      <div className="mt-10">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mx-4">
          Sunday 11th Class Assigment Complete
        </h1>
        <div className="flex flex-col justify-center items-start pl-4 md:pl-16 py-8">
          <div>
            Name:{" "}
            <span className="font-bold text-green-500">
              {classWork.Student}
            </span>
          </div>
          <div>
            Teacher:{" "}
            <span className="font-bold text-green-500">
              {classWork.Teacher}
            </span>
          </div>
          <div>
            Task 1:{" "}
            <span className="font-bold text-green-500"> {classWork.Task1}</span>
          </div>
          <div>
            Task 2:{" "}
            <span className="font-bold text-green-500">{classWork.Task2}</span>
          </div>
          <div>
            Task:{" "}
            <span className="font-bold text-green-500">
              {classWork.Complete}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
