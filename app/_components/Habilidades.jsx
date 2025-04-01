import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

export default function () {
  return (
    <div>
      <h1 className="underline underline-offset-2 text-2xl text-center sm:text-center uppercase">
        Habilidades
      </h1>
      <div className="flex flex-col sm:flex-col gap-10 justify-center items-center mt-10">
        {/* Primeira Coluna */}
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex flex-col bg-gray-800 w-[320px] h-[220px] rounded-3xl justify-center items-center">
            <FaHtml5
              size={80}
              color="#FF4500"
              className="bg-orange-300 border-4 border-[#FF4500] rounded-[15px] p-2 shadow-[0px_4px_10px_rgba(227,79,38,0.7)]"
            />
            <h1 className="text-white text-lg font-semibold mt-2">HTML</h1>
            <p className="p-2 text-justify">
              Estrutura páginas web com marcação semântica.
            </p>
          </div>

          <div className="flex flex-col bg-gray-800 w-[320px] h-[220px] rounded-3xl justify-center items-center">
            <IoLogoCss3
              size={80}
              color="#264DE4"
              className="bg-white border-4 border-[#264DE4] rounded-[15px] p-2 shadow-[0px_4px_10px_rgba(38,77,228,0.7)]"
            />
            <h1 className="text-white text-lg font-semibold mt-2">CSS</h1>
            <p className="p-2 text-justify">
              Linguagem responsável por estilizar páginas web.
            </p>
          </div>

          <div className="flex flex-col bg-gray-800 w-[320px] h-[220px] rounded-3xl justify-center items-center">
            <DiJavascript
              size={80}
              color="#F7DF1E"
              className="bg-black border-4 border-[#F7DF1E] rounded-[15px] p-2 shadow-[0px_4px_10px_rgba(247,223,30,0.7)]"
            />
            <h1 className="text-white text-lg font-semibold mt-2">
              JavaScript
            </h1>
            <p className="p-2 text-justify">
              Linguagem responsável por adicionar interatividade aos sites.
            </p>
          </div>

          <div className="flex flex-col bg-gray-800 w-[320px] h-[220px] rounded-3xl justify-center items-center">
            <FaPython
              size={80}
              color="#FFD43B"
              className="bg-[#3776AB] border-4 border-[#FFD43B] rounded-[15px] p-2 shadow-[0px_4px_10px_rgba(255,212,59,0.7)]"
            />
            <h1 className="text-white text-lg font-semibold mt-2">Python</h1>
            <p className="p-2 text-justify">
              Linguagem versátil usada para web, IA e automação.
            </p>
          </div>
        </div>

        {/* Segunda Coluna */}
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex flex-col bg-gray-800 w-[320px] h-[220px] rounded-3xl justify-center items-center">
            <RiTailwindCssFill
              size={80}
              color="#38BDF8"
              className="bg-[#0F172A] border-4 border-[#38BDF8] rounded-[15px] p-2 shadow-[0px_4px_10px_rgba(56,189,248,0.7)]"
            />
            <h1 className="text-white text-lg font-semibold mt-2">
              Tailwind CSS
            </h1>
            <p className="p-2 text-justify">
              Framework CSS para estilização rápida e responsiva.
            </p>
          </div>

          <div className="flex flex-col bg-gray-800 w-[320px] h-[220px] rounded-3xl justify-center items-center">
            <FaReact
              size={80}
              color="#61DAFB"
              className="bg-[#20232A] border-4 border-[#61DAFB] rounded-[15px] p-2 shadow-[0px_4px_10px_rgba(97,218,251,0.7)]"
            />
            <h1 className="text-white text-lg font-semibold mt-2">React</h1>
            <p className="p-2 text-justify">
              Biblioteca JavaScript para criar interfaces modernas.
            </p>
          </div>

          <div className="flex flex-col bg-gray-800 w-[320px] h-[220px] rounded-3xl justify-center items-center">
            <SiPrisma
              size={80}
              color="#2D3748"
              className="bg-white border-4 border-[#2D3748] rounded-[15px] p-2 shadow-[0px_4px_10px_rgba(45,55,72,0.7)]"
            />
            <h1 className="text-white text-lg font-semibold mt-2">Prisma</h1>
            <p className="p-2 text-justify">
              ORM moderno para manipular bancos de dados com facilidade.
            </p>
          </div>

          <div className="flex flex-col bg-gray-800 w-[320px] h-[220px] rounded-3xl justify-center items-center">
            <FaDatabase
              size={80}
              color="#F29111"
              className="bg-blue-700 border-4 border-[#F29111] rounded-[15px] p-2 shadow-[0px_4px_10px_rgba(242,145,17,0.7)]"
            />
            <h1 className="text-white text-lg font-semibold mt-2">SQL</h1>
            <p className="p-2 text-justify">
              Gerencia e manipula bancos de dados relacionais com eficiência.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
