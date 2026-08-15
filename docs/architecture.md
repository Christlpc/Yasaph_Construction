# Architecture Specification - Yasaph Construction

## 1. Architecture Générale
Projet basé sur **Next.js (App Router)** avec **TypeScript** et **Tailwind CSS**.

```
yasaph-construction/
├── docs/                      # Spécifications BMAD (PRD, Architecture)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root Layout avec Header & Footer
│   │   ├── page.tsx           # Page d'accueil Vitrine
│   │   ├── services/
│   │   │   └── page.tsx       # Page des 3 services (Gros œuvres, Architecture, Rénovation)
│   │   ├── a-propos/
│   │   │   └── page.tsx       # Présentation de l'entreprise à Kinshasa
│   │   ├── contact/
│   │   │   └── page.tsx       # Formulaire de demande de devis & contact
│   │   ├── admin/
│   │   │   └── page.tsx       # Backoffice de gestion des demandes client
│   │   └── api/
│   │       ├── contact/
│   │       │   └── route.ts   # Handler POST (soumettre devis)
│   │       └── admin/
│   │           └── requests/
│   │               └── route.ts # Handler GET & PATCH (consulter & modifier statut)
│   ├── components/            # Composants UI réutilisables (Navbar, Footer, Modals, Cards)
│   ├── lib/                   # Base de données / Store temporaire des demandes
│   └── types/                 # Interfaces et types TypeScript
```

## 2. Modèle de Données (`types/contact.ts`)

```typescript
export type ServiceCategory = 'gros-oeuvres' | 'architecture' | 'renovation' | 'autre';

export type RequestStatus = 'nouveau' | 'en_cours' | 'devis_envoye' | 'traite';

export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  location?: string; // ex: Gombe, Ngaliema, Limete, etc.
  service: ServiceCategory;
  budgetRange?: string;
  message: string;
  createdAt: string; // ISO String
  status: RequestStatus;
  notes?: string;
}
```

## 3. Flux des Demandes
1. L'utilisateur remplit le formulaire `/contact`.
2. Requête `POST /api/contact` -> La demande est stockée et un accusé de réception est généré.
3. L'administrateur accède à `/admin` -> Consulte les demandes reçues, filtre par statut/service et met à jour leur état.
