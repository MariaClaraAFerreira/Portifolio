"use server";
import nodemailer from "nodemailer";

//Envio Sem Anexo
export async function sendEmail(formData) {
  const email = formData.get("email");
  const message = `${formData.get("message")}`;
  const nome = formData.get("nome");
  const celular = formData.get("celular");
  const assunto = `${formData.get("assunto")}`;
  const whatss = formData.get("whatss");
  let frase = " ";

  //Dados recebidos pelo FrontEnd
  console.log(nome);
  console.log(email);
  console.log(celular);
  console.log(assunto);
  console.log(message);
  console.log(whatss);

  if (whatss === "on") {
    frase = "O celular é WhatsApp";
  } else {
    frase = "O celular NÃO é WhatsApp";
  }

  console.log(frase);

  //dados email
  const dados_email = [];
  dados_email.push(process.env.EMAIL_USER);
  dados_email.push(process.env.EMAIL_PASS);
  dados_email.push(process.env.EMAIL_PARTICULAR);
  console.log(dados_email);

  //return {success: false, message: "Dados Recebidos Com Sucesso."}
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_USER, //Defina no .env.local
      pass: process.env.EMAIL_PASS, //Senha de APP criada no GMAIL
    },
  });

  //Mandar o primeiro email
  try {
    const emailBody = `
      Você recebeu uma nova mensagem de:

      Nome: ${nome}
      E-mail: ${email}
      Celular: ${celular}
      Assunto: ${assunto}
      Mensagem: ${message}
      ${frase}
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_PARTICULAR,
      subject: `Nova mensagem de ${nome}: ${assunto}`,
      text: emailBody,
    });

    console.log("Email Enviado com Sucesso");
    console.log(dados_email);
    return {
      success: true,
      message: "Obrigado, a equipe recebeu seu e-mail!",
      dados_email,
    };
  } catch (error) {
    console.log("Erro ao enviar e-mail:", error);
    console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASS);
    return {
      success: false,
      message: "Falha ao enviar e-mail",
      error_msg: error.message || error,
      dados_email,
    };
  }
}
