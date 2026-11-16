import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import type { Client } from '../interfaces/Client';
import { ClientsService } from '../services/ClientsService';

export const ClientsPage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClients = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const data = await ClientsService.getClients();
      setClients(data);
    } catch (err: any) {
      setError(err?.message || 'Error al obtener la lista de clientes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchClients();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Listado de Clientes</h2>
          <p className="text-muted mb-0">Gestión de registros de clientes en Supabase</p>
        </div>
        <Link to="/new-client" className="btn btn-primary">
          + Añadir Cliente
        </Link>
      </div>

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando clientes...</span>
          </div>
          <p className="mt-2 text-muted">Cargando clientes desde Supabase...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
          <div>
            <strong>Error:</strong> {error}
          </div>
          <button className="btn btn-sm btn-outline-danger" onClick={() => void fetchClients()}>
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && clients.length === 0 && (
        <div className="alert alert-info text-center py-4" role="alert">
          <p className="mb-2">No se encontraron clientes registrados en la base de datos.</p>
          <Link to="/new-client" className="btn btn-sm btn-success">
            Crear el primer cliente
          </Link>
        </div>
      )}

      {!loading && !error && clients.length > 0 && (
        <div className="table-responsive shadow-sm rounded">
          <table className="table table-striped table-bordered table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th scope="col" style={{ width: '80px' }}>
                  ID
                </th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Teléfono</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id ?? `${client.name}-${client.email}`}>
                  <td className="fw-bold">{client.id}</td>
                  <td>{client.name}</td>
                  <td>
                    <a href={`mailto:${client.email}`} className="text-decoration-none">
                      {client.email}
                    </a>
                  </td>
                  <td>
                    <a href={`tel:${client.phone}`} className="text-decoration-none">
                      {client.phone}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ClientsPage;
