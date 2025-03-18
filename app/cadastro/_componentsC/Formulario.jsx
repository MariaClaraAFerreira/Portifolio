"use client";

import React from "react";
import { Dados } from "../_actionsC/actionsC";

export default function Cadastro() {
  return (
    <form
      onSubmit={handleSubmit}
      className="sm:flex sm:flex-col sm:items-center"
    >
      <div className="flex justify-center flex-col gap-3 m-5">
        <p className="font-bold font-mono text-lg">Nome Completo</p>
        <input
          type="text"
          name="nome"
          id="nome"
          required
          className="h-12 w-80 rounded-md p-3 text-black"
          placeholder="Digite seu nome completo"
        ></input>
      </div>

      <div className="flex justify-center flex-col gap-3 m-5">
        <p className="font-bold font-mono text-lg">Endereço completo</p>
        <textarea
          name="endereco"
          id="endereco"
          required
          className="h-24 w-80 rounded-md p-3 text-black"
          placeholder="Digite seu endereço completo (rua,número,bairro,cidade,estado, CEP)"
        ></textarea>
      </div>

      <div className="flex justify-center flex-col gap-3 m-5">
        <p className="font-bold font-mono text-lg">Celular</p>
        <input
          type="number"
          name="celular"
          id="celular"
          required
          className="h-12 w-80 rounded-md p-3 text-black"
          placeholder="(00) 00000-0000"
        ></input>
      </div>

      <div className="flex justify-center flex-col gap-3 m-5">
        <p className="font-bold font-mono text-lg">Email</p>
        <input
          type="text"
          name="email"
          id="email"
          required
          className="h-12 w-80 rounded-md p-3 text-black"
          placeholder="seu.email@exemplo.com"
        ></input>
      </div>

      <div className="sm:flex-col">
        <div className="ml-5">
          <p className="font-bold text-lg">Gênero</p>
          <input type="radio" />
          <label htmlFor="whatss" className=" ml-2 text-sm ">
            Masculino
          </label>
        </div>
        <div className="ml-5">
          <input type="radio" />
          <label htmlFor="whatss" className=" ml-2 text-sm">
            Feminino
          </label>
        </div>

        <div className="ml-5">
          <input type="radio" />
          <label htmlFor="whatss" className=" ml-2 text-sm">
            Outro
          </label>
        </div>

        <div className="ml-5">
          <input type="radio" />
          <label htmlFor="whatss" className=" ml-2 text-sm">
            Prefiro não informar
          </label>
        </div>

        <div className="text-center mt-5 flex justify-center mb-5">
          <button
            type="submit"
            className="h-12 w-72 rounded-md p-3 text-black bg-slate-900 "
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}
