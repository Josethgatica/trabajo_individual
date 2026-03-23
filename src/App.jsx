import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RutaProtegida from './componets/rutas/RutaProtegida';
import Inicio from "./views/Inicio";
import Categorias from "./views/Categorias";
import Catalogo from "./views/Catalogo";
import Productos from "./views/Productos";
import Login from "./views/Login";
import Pagina404 from "./views/Pagina404";



const App = () => {
  return (
    <Router>
      <Encabezado />

      <main className="margen-superior-main">
        <Routes> {/* Ruta pública */}
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas */}
          <Route 
            path="/" 
            element={<RutaProtegida><Inicio /></RutaProtegida>} 
          />
          <Route 
            path="/categorias" 
            element={<RutaProtegida><Categorias /></RutaProtegida>} 
          />
          
          {/* Ruta pública / catálogo */}
          <Route path="/catalogo" element={<Catalogo />} />
          
          <Route 
            path="/productos" 
            element={<RutaProtegida><Productos /></RutaProtegida>} 
          />

          {/* Manejo de error 404 */}
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;