import React from "react";

export default function header() {
  return (
    <div>
      <div className="text-sm bg-opacity-60 w-full h-10 z-50 absolute top-4 left-2">
        <div
          className="opacity-100 flex justify-center gap-2 font-bold bg-transparent
        "
        >
          <p className="text-sm hidden">INÍCIO</p>
          <p className="text-sm">SOBRE</p>
          <p className="text-sm">HABILIDADES</p>
          <p className="text-sm">PROJETOS</p>
          <p className="text-sm hidden">CONTATO</p>
        </div>
      </div>
    </div>
  );
}
