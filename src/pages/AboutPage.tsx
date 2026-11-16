import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="container mt-4 mb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold text-dark mb-3">Acerca de AppClients React</h1>
              <p className="lead text-secondary">
                Proyecto desarrollado para el módulo de <strong>Desarrollo de Interfaces (DI)</strong> en el ciclo
                formativo de <strong>2º de Desarrollo de Aplicaciones Multiplataforma (DAM)</strong>.
              </p>

              <hr className="my-4" />

              <div className="row g-4 align-items-center mb-5">
                <div className="col-12 col-md-6">
                  <h4 className="fw-bold mb-3">Propósito y Arquitectura</h4>
                  <p className="text-muted">
                    El objetivo principal de esta aplicación es implementar un sistema completo de gestión de clientes
                    (CRUD) conectando una interfaz moderna desarrollada con React y TypeScript a una base de datos
                    PostgreSQL alojada en Supabase (Backend as a Service).
                  </p>
                  <p className="text-muted">
                    La arquitectura sigue una separación estricta por capas: interfaces tipadas, servicios desacoplados
                    para la capa de datos, componentes de navegación reutilizables y vistas modulares.
                  </p>

                  <h5 className="fw-bold mt-4 mb-2">Stack Tecnológico</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item px-0">
                      <strong>React 19 &amp; TypeScript:</strong> Biblioteca base para componentes reactivos y tipado
                      estático seguro.
                    </li>
                    <li className="list-group-item px-0">
                      <strong>Ionic Framework 9:</strong> Infraestructura para aplicaciones multiplataforma y móviles.
                    </li>
                    <li className="list-group-item px-0">
                      <strong>Vite:</strong> Entorno de desarrollo rápido y empaquetador ultraligero.
                    </li>
                    <li className="list-group-item px-0">
                      <strong>Bootstrap 5:</strong> Sistema de diseño responsive, componentes accesibles y estilos
                      visuales limpios.
                    </li>
                    <li className="list-group-item px-0">
                      <strong>Supabase (@supabase/supabase-js):</strong> Backend as a Service para base de datos
                      PostgreSQL, autenticación y persistencia en la nube.
                    </li>
                    <li className="list-group-item px-0">
                      <strong>React Router DOM v6:</strong> Gestión del enrutamiento SPA del lado del cliente.
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-md-6 text-center">
                  <div className="p-3 bg-light rounded-3 shadow-sm border">
                    <img
                      src="/images/proyecto.webp"
                      alt="Captura del proyecto AppClients React"
                      className="img-fluid rounded shadow-sm mb-3"
                      style={{ maxHeight: '280px', objectFit: 'cover', width: '100%' }}
                    />
                    <p className="text-muted small mb-0">
                      Recurso local: <code>public/images/proyecto.webp</code>
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="fw-bold mb-3">Demostración en Vídeo</h4>
              <p className="text-muted mb-3">
                Consulta a continuación la demostración del flujo de trabajo y la estructura de la aplicación:
              </p>
              <div className="ratio ratio-16x9 rounded-3 shadow-sm overflow-hidden border">
                <iframe
                  src="https://www.youtube.com/embed/SqcY0GlETPk"
                  title="Demostración del proyecto AppClients React"
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
