'use client';

import React, { useState, useEffect } from 'react';
import {
  ContactRequest,
  RequestStatus,
  ServiceCategory,
} from '@/types/contact';
import {
  Search,
  Eye,
  Sparkles,
  X,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [selectedRequest, setSelectedRequest] = useState<ContactRequest | null>(null);
  const [updating, setUpdating] = useState(false);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/requests');
      const data = await res.json();
      if (data.requests) {
        setRequests(data.requests);
      }
    } catch (err) {
      console.error('Error fetching admin requests:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: RequestStatus, notes?: string) => {
    setUpdating(true);
    try {
      const res = await fetch('/api/admin/requests', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus, notes }),
      });
      const data = await res.json();
      if (data.success) {
        setRequests((prev) =>
          prev.map((req) => (req.id === id ? { ...req, status: newStatus, notes: notes ?? req.notes } : req))
        );
        if (selectedRequest && selectedRequest.id === id) {
          setSelectedRequest({ ...selectedRequest, status: newStatus, notes: notes ?? selectedRequest.notes });
        }
      }
    } catch (err) {
      console.error('Error updating status:', err);
    } finally {
      setUpdating(false);
    }
  };

  const filteredRequests = requests.filter((req) => {
    const matchesSearch =
      req.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (req.location && req.location.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === 'all' || req.status === statusFilter;
    const matchesService = serviceFilter === 'all' || req.service === serviceFilter;

    return matchesSearch && matchesStatus && matchesService;
  });

  const getStatusBadge = (status: RequestStatus) => {
    switch (status) {
      case 'nouveau':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">Nouveau</span>;
      case 'en_cours':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-sky-100 text-[#0090D0] border border-sky-300">En étude</span>;
      case 'devis_envoye':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-300">Devis envoyé</span>;
      case 'traite':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">Traité / Signé</span>;
    }
  };

  const getServiceLabel = (service: ServiceCategory) => {
    switch (service) {
      case 'gros-oeuvres':
        return 'Gros Œuvres';
      case 'architecture':
        return 'Plan & Architecture';
      case 'renovation':
        return 'Rénovation';
      default:
        return 'Autre';
    }
  };

  const counts = {
    total: requests.length,
    nouveau: requests.filter((r) => r.status === 'nouveau').length,
    enCours: requests.filter((r) => r.status === 'en_cours' || r.status === 'devis_envoye').length,
    traite: requests.filter((r) => r.status === 'traite').length,
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-slate-50 text-[#0F2744]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#0090D0] text-xs font-bold uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Backoffice Administration
          </div>
          <h1 className="text-3xl font-extrabold text-[#0F2744]">Gestion des Demandes de Devis</h1>
          <p className="text-slate-600 text-sm font-medium">Yasaph Construction — Kinshasa, RDC</p>
        </div>

        <button
          onClick={fetchRequests}
          className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:text-[#0090D0] hover:border-[#0090D0] shadow-sm transition-all self-start md:self-auto"
        >
          Rafraîchir les données
        </button>
      </div>

      {/* METRICS CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <p className="text-xs font-bold text-slate-500 uppercase">Total Demandes</p>
          <p className="text-3xl font-extrabold text-[#0F2744]">{counts.total}</p>
        </div>

        <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 shadow-sm space-y-1">
          <p className="text-xs font-bold text-amber-800 uppercase">Nouvelles (À traiter)</p>
          <p className="text-3xl font-extrabold text-amber-700">{counts.nouveau}</p>
        </div>

        <div className="bg-sky-50 p-5 rounded-2xl border border-sky-200 shadow-sm space-y-1">
          <p className="text-xs font-bold text-sky-800 uppercase">En cours / Devis</p>
          <p className="text-3xl font-extrabold text-[#0090D0]">{counts.enCours}</p>
        </div>

        <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 shadow-sm space-y-1">
          <p className="text-xs font-bold text-emerald-800 uppercase">Projets Confirmés</p>
          <p className="text-3xl font-extrabold text-emerald-700">{counts.traite}</p>
        </div>
      </div>

      {/* SEARCH AND FILTERS */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Rechercher nom, email, ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-semibold focus:outline-none focus:border-amber-500"
          >
            <option value="all">Tous les statuts</option>
            <option value="nouveau">Nouveau</option>
            <option value="en_cours">En étude</option>
            <option value="devis_envoye">Devis envoyé</option>
            <option value="traite">Traité / Signé</option>
          </select>

          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-semibold focus:outline-none focus:border-amber-500"
          >
            <option value="all">Tous les services</option>
            <option value="gros-oeuvres">Gros Œuvres</option>
            <option value="architecture">Architecture</option>
            <option value="renovation">Rénovation</option>
          </select>
        </div>
      </div>

      {/* TABLE OF REQUESTS */}
      <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-100 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Réf & Date</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Localisation & Budget</th>
                <th className="px-6 py-4">Statut</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-slate-500">
                    Chargement des demandes...
                  </td>
                </tr>
              ) : filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-slate-500">
                    Aucune demande ne correspond à vos filtres.
                  </td>
                </tr>
              ) : (
                filteredRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-mono">
                      <span className="font-bold text-amber-700">{req.id}</span>
                      <span className="block text-[10px] text-slate-500">
                        {new Date(req.createdAt).toLocaleDateString('fr-FR')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-900 text-sm">{req.name}</p>
                      <p className="text-slate-500">{req.phone}</p>
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-800">
                      {getServiceLabel(req.service)}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-slate-900 font-bold">{req.location || 'Kinshasa'}</p>
                      <p className="text-slate-500 text-[11px] font-medium">{req.budgetRange}</p>
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(req.status)}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => setSelectedRequest(req)}
                        className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-300 px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-amber-600 hover:text-white transition-all shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" /> Voir détails
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* DETAIL MODAL */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedRequest(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-700">{selectedRequest.id}</span>
                {getStatusBadge(selectedRequest.status)}
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{selectedRequest.name}</h2>
              <p className="text-xs text-slate-500">
                Reçu le {new Date(selectedRequest.createdAt).toLocaleString('fr-FR')}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 block uppercase font-bold">Téléphone / WhatsApp</span>
                <span className="text-slate-900 font-semibold">{selectedRequest.phone}</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase font-bold">Email</span>
                <span className="text-slate-900 font-semibold">{selectedRequest.email}</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase font-bold">Service</span>
                <span className="text-amber-700 font-bold">{getServiceLabel(selectedRequest.service)}</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase font-bold">Budget Estimé</span>
                <span className="text-slate-900 font-semibold">{selectedRequest.budgetRange || 'Non spécifié'}</span>
              </div>
            </div>

            {/* Client Message */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Message & Détails du projet</h3>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs leading-relaxed whitespace-pre-wrap font-medium">
                {selectedRequest.message}
              </div>
            </div>

            {/* Status Change Selector */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-700">Changer le statut</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { status: 'nouveau', label: 'Nouveau' },
                  { status: 'en_cours', label: 'En étude' },
                  { status: 'devis_envoye', label: 'Devis envoyé' },
                  { status: 'traite', label: 'Traité / Signé' },
                ].map((st) => (
                  <button
                    key={st.status}
                    disabled={updating}
                    onClick={() => handleUpdateStatus(selectedRequest.id, st.status as RequestStatus)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      selectedRequest.status === st.status
                        ? 'bg-amber-600 text-white border-amber-600 shadow-md font-bold'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-amber-500'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedRequest(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
