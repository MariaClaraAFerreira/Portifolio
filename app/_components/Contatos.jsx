"use client";
import React, { useEffect, useState } from "react";
import { sendEmail } from "../_actions/actions";
import { IoCheckbox } from "react-icons/io5";

export default function Contato() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // success or error

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    try {
      const response = await sendEmail(form);

      if (response.success) {
        setStatus("Email enviado com sucesso!");
        setStatusType("success"); // sucesso
        event.target.reset(); // Limpa o formulário
      } else {
        setStatus("Erro ao enviar email.");
        setStatusType("error"); // erro
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setStatus("Erro inesperado ao enviar email.");
      setStatusType("error"); // erro
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="text-center flex flex-col items-center mt-10 space-y-7"
      >
        <h1 className="underline underline-offset-2 text-2xl uppercase sm:mt-20">
          Entre em Contato
        </h1>

        <input
          type="text"
          name="nome"
          id="nome"
          required
          className="w-80 h-12 rounded-xl bg-gray-700 p-3"
          placeholder="Seu nome"
        />

        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-80 h-12 rounded-xl bg-gray-700 p-3"
          placeholder="Seu email"
        />

        <input
          type="number"
          name="celular"
          id="celular"
          required
          className="w-80 h-12 rounded-xl bg-gray-700 p-3"
          placeholder="Seu celular"
        />

        <input
          type="text"
          name="assunto"
          id="assunto"
          required
          className="w-80 h-12 rounded-xl bg-gray-700 p-3"
          placeholder="Assunto"
        />

        <textarea
          name="message"
          id="message"
          required
          className="w-80 h-60 rounded-xl bg-gray-700 p-3"
          placeholder="Sua mensagem"
        />

        <div>
          <input type="checkbox" id="whatss" name="whatss" />
          <label htmlFor="whatss" className="text-blue-500 ml-2 text-sm">
            Meu Celular é WhatsApp (marque se SIM).
          </label>
        </div>

        {/* Status message */}
        {status && (
          <div
            className={`${
              statusType === "success" ? "bg-green-500" : "bg-red-500"
            } text-white p-4 rounded-lg mb-4 text-center`}
          >
            {status}
          </div>
        )}

        <button type="submit" className="bg-slate-900 w-80 h-12 rounded-xl">
          Enviar
        </button>
      </form>
    </div>
  );
}
