/* import { NextResponse } from 'next/server';
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
} */
  import { NextResponse } from 'next/server';
  import { Resend } from 'resend';
  
  const resend = new Resend(process.env.RESEND_API_KEY2);
  
  export async function POST(request: Request) {
    try {
      console.log('Received request');
      const { firstName, lastName, email, message } = await request.json();
      console.log('Request body:', { firstName, lastName, email, message });
  
      if (!process.env.RESEND_API_KEY2) {
        console.error('RESEND_API_KEY is not set');
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
      }
  
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['nicolaspalaciodev@gmail.com'], // Cambia esto a tu dirección de correo verificada
        subject: `New message from ${firstName} ${lastName}`,
        text: `
          Name: ${firstName} ${lastName}
          Email: ${email}
          Message: ${message}
        `,
      });
  
      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json({ error: error.message }, { status: 400 });
      }
  
      console.log('Email sent successfully:', data);
      return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
    } catch (error: unknown) {
      console.error('Detailed error:', error);
      if (error instanceof Error) {
        return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
      } else {
        return NextResponse.json({ message: 'Error sending email', error: 'An unknown error occurred' }, { status: 500 });
      }
    }
  }
  