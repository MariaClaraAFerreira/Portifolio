import Image from "next/image";
import Hero from "./_components/Hero";
import Sobre from "./_components/Sobre";
import Habilidades from "./_components/Habilidades";
import Projetos from "./_components/Projetos";
import Contatos from "./_components/Contatos";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contatos />
    </div>
  );
}
