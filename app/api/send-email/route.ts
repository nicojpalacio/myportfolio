import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // Configurar el transporter de Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Enviar el correo electrónico
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'nicojpalacio@gmail.com',
      subject: `Nuevo mensaje de ${firstName} ${lastName}`,
      text: `
        Nombre: ${firstName} ${lastName}
        Email: ${email}
        Mensaje: ${message}
      `
    });

    return NextResponse.json({ message: 'Correo enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ message: 'Error al enviar el correo' }, { status: 500 });
  }
}