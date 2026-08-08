import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SpaceDetails from './pages/SpaceDetails';

import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/spaces/:id" element={<SpaceDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
