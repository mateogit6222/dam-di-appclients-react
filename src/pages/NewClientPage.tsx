import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ClientsService } from '../services/ClientsService';

export const NewClientPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await ClientsService.addClient({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
      });
      navigate('/clients');
    } catch (err: any) {
      setError(err?.message || 'Error al guardar el cliente en Supabase');
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-dark text-white py-3">
              <h4 className="card-title mb-0 fw-bold">Añadir Nuevo Cliente</h4>
            </div>
            <div className="card-body p-4">
              {error && (
                <div className="alert alert-danger" role="alert">
                  <strong>Error:</strong> {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Nombre <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Ej. Juan Pérez"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Correo electrónico <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Ej. juan.perez@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="form-label fw-semibold">
                    Teléfono <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="Ej. +34 600 123 456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center pt-2">
                  <Link to="/clients" className="btn btn-outline-secondary">
                    Cancelar
                  </Link>
                  <button type="submit" className="btn btn-success px-4" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Guardando...
                      </>
                    ) : (
                      'Guardar Cliente'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClientPage;
