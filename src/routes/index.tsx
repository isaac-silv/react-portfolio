import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';

import { Home, Habilidades, Projetos, Contato } from '../pages/index';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Home',
        path: '/home',
      },
      {
        label: 'Habilidades',
        path: '/habilidades',
      },
      {
        label: 'Projetos',
        path: '/projetos',
      },
      {
        label: 'Contato',
        path: '/contato',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/habilidades"
        element={<Habilidades />}
      />
      <Route
        path="/projetos"
        element={<Projetos />}
      />
      <Route
        path="/contato"
        element={<Contato />}
      />


      <Route
        path="*"
        element={<Navigate to="/home" />}
      />
    </Routes>
  );
};
