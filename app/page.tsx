import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <section className="h-screen bg-slate-800 flex justify-center items-center gap-16">
        <div className="">
          <Image
            src={"/dog2.jpeg"}
            alt={""}
            width={500}
            height={500}
            className="rounded-xl  "
          />
        </div>

        <div className="w-[500px] h-[380px] border-2 text-[25px] rounded-xl">
         <h1 className="text-white p-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ea dolorem voluptates debitis deleniti in.</h1>
        </div>
      </section>
    </>
  );
}
