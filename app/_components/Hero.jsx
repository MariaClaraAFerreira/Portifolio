import React from "react";
import Image from "next/image";
import Header from "./Header";
export default function Hero() {
  return (
    <div className="relative top-0 left-0 h-[500px]">
      <Header />
      <Image
        src="/header.webp"
        alt="Imagem"
        fill
        quality={100}
        priority
        className="object-cover z-10"
        sizes="(max-width:768px) 100vw (max-width:1200px) 10vw"
      />
      <div className=" w-full h-96 flex flex-col items-center justify-center text-center absolute inset-0 z-50">
        <h1 className="font-bold text-5xl font-[MOntserrat]  ">
          Oi,eu sou a Maria Clara!
        </h1>
        <h1 className="font-bold text-xl  underline font-[Montserrat] ">
          Profissional em Full Stack
        </h1>
      </div>
    </div>
  );
}
