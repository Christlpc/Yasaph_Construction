import { ContactRequest } from '@/types/contact';

// Initial seed data for demo / backoffice presentation
export const initialRequests: ContactRequest[] = [
  {
    id: 'REQ-1001',
    name: 'Jean-Paul Mukendi',
    email: 'jp.mukendi@gmail.com',
    phone: '+243 81 555 0192',
    location: 'Kinshasa - Gombe',
    service: 'gros-oeuvres',
    budgetRange: '50 000$ - 150 000$',
    message: 'Bonjour, nous souhaitons lancer la construction en béton armé d\'un immeuble R+4 à usage commercial et résidentiel dans la commune de la Gombe.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    status: 'nouveau',
    notes: 'Priorité haute - Attente des plans de masse.',
  },
  {
    id: 'REQ-1002',
    name: 'Cabinet Kiamvu & Associés',
    email: 'contact@kiamvu-law.cd',
    phone: '+243 99 820 4410',
    location: 'Kinshasa - Ngaliema (Macampagne)',
    service: 'architecture',
    budgetRange: '20 000$ - 50 000$',
    message: 'Demande de conception architecturale et étude de structure 3D pour une villa de haut standing avec piscine et espaces paysagers.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    status: 'en_cours',
    notes: 'Rendez-vous fixé pour visite de terrain le 20 août.',
  },
  {
    id: 'REQ-1003',
    name: 'Sarah Mbemba',
    email: 'sarah.mbemba@outlook.fr',
    phone: '+243 82 109 3388',
    location: 'Kinshasa - Limete Industrial',
    service: 'renovation',
    budgetRange: '15 000$ - 30 000$',
    message: 'Réhabilitation complète de la toiture, étanchéité et réaménagement des bureaux administratifs de notre entrepôt.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 8).toISOString(),
    status: 'devis_envoye',
    notes: 'Devis V1 envoyé par email. Attente du retour client.',
  },
  {
    id: 'REQ-1004',
    name: 'Marc Tshitenge',
    email: 'm.tshitenge@group-t.cd',
    phone: '+243 85 990 1200',
    location: 'Kinshasa - Mont-Ngafula',
    service: 'gros-oeuvres',
    budgetRange: '100 000$ +',
    message: 'Travaux de fondations spéciales, radiers et élévation d\'un complexe scolaire.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString(),
    status: 'traite',
    notes: 'Contrat signé. Démarrage des fouilles.',
  },
];

// Global in-memory storage (persisted during dev server execution)
let inMemoryRequests: ContactRequest[] = [...initialRequests];

export function getRequests(): ContactRequest[] {
  return inMemoryRequests;
}

export function addRequest(requestData: Omit<ContactRequest, 'id' | 'createdAt' | 'status'>): ContactRequest {
  const newRequest: ContactRequest = {
    ...requestData,
    id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
    createdAt: new Date().toISOString(),
    status: 'nouveau',
  };
  inMemoryRequests = [newRequest, ...inMemoryRequests];
  return newRequest;
}

export function updateRequestStatus(id: string, status: ContactRequest['status'], notes?: string): ContactRequest | null {
  const index = inMemoryRequests.findIndex((r) => r.id === id);
  if (index === -1) return null;

  inMemoryRequests[index] = {
    ...inMemoryRequests[index],
    status,
    notes: notes !== undefined ? notes : inMemoryRequests[index].notes,
  };
  return inMemoryRequests[index];
}
