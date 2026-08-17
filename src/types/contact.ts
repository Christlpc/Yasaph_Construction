export type ServiceCategory = 'gros-oeuvres' | 'architecture' | 'renovation' | 'autre';

export type RequestStatus = 'nouveau' | 'en_cours' | 'devis_envoye' | 'traite';

export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  location?: string;
  service: ServiceCategory;
  budgetRange?: string;
  message: string;
  createdAt: string;
  status: RequestStatus;
  notes?: string;
}
