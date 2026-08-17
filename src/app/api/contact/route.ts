import { NextResponse } from 'next/server';
import { addRequest } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, location, service, budgetRange, message } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    const created = addRequest({
      name,
      email,
      phone,
      location: location || 'Kinshasa',
      service,
      budgetRange,
      message,
    });

    return NextResponse.json({
      success: true,
      message: 'Votre demande de devis a été enregistrée avec succès. Notre équipe vous contactera dans les plus brefs délais.',
      data: created,
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Une erreur serveur s\'est produite. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
