import { NextResponse } from 'next/server';
import { getRequests, updateRequestStatus } from '@/lib/store';

export async function GET() {
  const requests = getRequests();
  return NextResponse.json({ requests });
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: 'ID et statut requis pour la mise à jour.' },
        { status: 400 }
      );
    }

    const updated = updateRequestStatus(id, status, notes);

    if (!updated) {
      return NextResponse.json(
        { error: 'Demande introuvable.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error('Error updating request:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour.' },
      { status: 500 }
    );
  }
}
