import React from "react";
import Image from "next/image";

export default function Sobre() {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="underline underline-offset-2 text-2xl uppercase">
          Sobre Mim
        </h1>
      </div>
      <div className=" flex flex-col items-center justify-center mt-5 sm:flex sm:flex-row">
        <div className=" relative w-60 h-60 rounded-full mt-10 overflow-hidden">
          <Image
            src="/minhafoto.jpg"
            alt="Imagem"
            fill
            quality={100}
            priority
            className="object-cover z-10"
            sizes="(max-width:760px) 100vw (max-width:1200px) 10vw"
          />
        </div>
        <div className="mt-10 sm:w-1/2 sm:ml-5 ">
          <p className="text-justify p-4 font-mono">
            Sou desenvolvedora com foco em desenvolvimento web e mobile,
            apaixonada por tecnologia e inovação. Tenho experiência em Python,
            JavaScript, HTML e CSS, além de habilidades em criação de interfaces
            modernas e responsivas. Meu objetivo é construir aplicações
            eficientes e intuitivas, garantindo a melhor experiência para os
            usuários. Além do meu trabalho como desenvolvedora, gosto de
            explorar novas tecnologias e aprimorar minhas habilidades
            constantemente. Nos momentos livres, adoro jogar, ler e codar, pois
            acredito que esses hobbies estimulam minha criatividade e pensamento
            lógico.
          </p>
        </div>
      </div>
    </div>
  );
}
