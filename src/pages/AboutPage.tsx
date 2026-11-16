import React, { useEffect } from 'react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10" style={{ maxWidth: '720px' }}>
          <header className="mb-4 text-center">
            <h2 className="display-6 fw-bold text-dark mb-2">Acerca de AppClients React</h2>
            <p className="lead text-secondary mb-0">
              Práctica de gestión de clientes (CRUD) desarrollada para el módulo de{' '}
              <strong>Desarrollo de Interfaces (DI)</strong> en <strong>2º DAM</strong>.
            </p>
          </header>

          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-3">Propósito y Arquitectura</h4>
              <p className="text-muted">
                <strong>AppClients React</strong> conecta una interfaz de usuario moderna desarrollada con React 19 y
                TypeScript a una base de datos PostgreSQL en la nube alojada en Supabase (Backend as a Service).
              </p>
              <p className="text-muted mb-4">
                El diseño desacopla la capa de presentación (componentes Bootstrap e Ionic) de la capa de datos (
                <code>ClientsService</code>), garantizando un flujo de datos predecible y tipado seguro.
              </p>

              <div className="text-center mb-4">
                <img
                  src="/images/proyecto.webp"
                  alt="AppClients React - Arquitectura CRUD"
                  className="img-fluid rounded-3 shadow-sm border"
                  style={{ width: '100%', maxWidth: '720px', height: 'auto', display: 'block', margin: '0 auto' }}
                />
                <small className="text-muted d-block mt-2">Diagrama arquitectónico del proyecto (formato WebP)</small>
              </div>

              <h5 className="fw-bold mb-3">Stack Tecnológico</h5>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item px-0">
                  <strong>React 19 &amp; TypeScript:</strong> Creación de vistas reactivas con tipado estático estricto.
                </li>
                <li className="list-group-item px-0">
                  <strong>Ionic Framework 9:</strong> Infraestructura híbrida para aplicaciones multiplataforma.
                </li>
                <li className="list-group-item px-0">
                  <strong>Vite:</strong> Entorno de ejecución rápido y empaquetado optimizado.
                </li>
                <li className="list-group-item px-0">
                  <strong>Bootstrap 5:</strong> Sistema de rejilla responsive y componentes de interfaz limpios.
                </li>
                <li className="list-group-item px-0">
                  <strong>Supabase (PostgreSQL):</strong> Persistencia de datos, API REST instantánea y seguridad.
                </li>
                <li className="list-group-item px-0">
                  <strong>React Router v6:</strong> Enrutamiento SPA fluido para navegación del lado del cliente.
                </li>
              </ul>

              <h5 className="fw-bold mb-3">Vídeo Demostrativo</h5>
              <div
                className="ratio ratio-16x9 rounded-3 shadow-sm overflow-hidden border"
                style={{ width: '100%', maxWidth: '720px', margin: '0 auto' }}
              >
                <iframe
                  src="https://www.youtube.com/embed/SqcY0GlETPk"
                  title="Demostración de AppClients React"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
