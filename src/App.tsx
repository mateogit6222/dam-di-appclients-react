import { IonApp, setupIonicReact } from '@ionic/react';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

/* Bootstrap 5 CSS */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Theme variables and scroll overrides */
import './theme/variables.css';

import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ClientsPage from './pages/ClientsPage';
import NewClientPage from './pages/NewClientPage';

setupIonicReact();

export default function App(): React.JSX.Element {
  return (
    <IonApp
      style={{
        minHeight: '100vh',
        height: 'auto',
        overflowY: 'auto',
        display: 'block',
      }}
    >
      <BrowserRouter>
        <Navbar />
        <main className="pb-5">
          <Routes>
            <Route path="/" element={<Navigate to="/clients" replace />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/new-client" element={<NewClientPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/clients" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </IonApp>
  );
}
