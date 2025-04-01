import React from "react";
import Image from "next/image";

export default function Projetos() {
  return (
    <div>
      <div className="text-center flex flex-col items-center mt-10 gap-5">
        <h1 className="underline underline-offset-2 text-2xl uppercase">
          Projetos
        </h1>
        <span>Click nas imagens para ver os projetos</span>
      </div>
      <div className="flex flex-col p-6 text-center items-center sm:flex-row sm:text-start">
        <a
          href="https://climalavras.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/telaclima.png"
            alt="Imagem"
            quality={100}
            width={500}
            height={40}
            className="rounded-2xl cursor-pointer hover:opacity-80 transition"
          />
        </a>

        <div className="sm:ml-5">
          <h1 className="text-lg font-bold mt-4">Previsão do Tempo</h1>
          <p>
            Um front-end sobre a previsão do tempo da minha cidade, usando React
            e Tailwind.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center sm:flex-row-reverse sm:text-right">
        <a
          href="https://oficinadevmotors.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/telaoficina.png"
            alt="Imagem"
            quality={100}
            width={500}
            height={300}
            className="rounded-2xl w-full max-w-[500px] cursor-pointer hover:opacity-80 transition"
          />
        </a>
        <div className="sm:mr-5">
          <h1 className="text-lg font-bold mt-4 sm:mt-0">Oficina</h1>
          <p>
            Um front-end de uma pagina inicial de uma oficina, usando React e
            Tailwind.
          </p>
        </div>
      </div>
      <div className="flex flex-col p-6 text-center items-center sm:flex-row sm:text-start">
        <Image
          src="/projeto.webp"
          alt="Imagem"
          quality={100}
          width={500}
          height={40}
          className="rounded-2xl "
        />
        <div className="sm:ml-5">
          <h1 className="text-lg font-bold mt-4">Projeto Integrador</h1>
          <p>
            Um projeto FullStack que está em andamento. Ele será usado para o
            conclusão do curso. Com a formação do curso o projeto estará
            disponível aqui.
          </p>
        </div>
      </div>

      <div className="bg-white w-full h-20 sm:hidden"></div>
    </div>
  );
}
