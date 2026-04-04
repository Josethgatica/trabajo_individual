import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Encabezado from "./components/navegacion/Encabezado";
import RutaProtegida from "./components/rutas/RutaProtegida";
import Inicio from "./views/Inicio";
import Categorias from "./views/Categorias";
import Catalogo from "./views/Catalogo";
import Productos from "./views/Productos";
import Login from "./views/Login";
import Pagina404 from "./views/Pagina404";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Encabezado />

      <main className="margen-superior-main">
        <Routes>
          {/* Ruta pública */}
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas */}
          <Route 
            path="/" 
            element={
              <RutaProtegida>
                <Inicio />
              </RutaProtegida>
            } 
          />

          <Route 
            path="/categorias" 
            element={
              <RutaProtegida>
                <Categorias />
              </RutaProtegida>
            } 
          />

          <Route 
            path="/catalogo" 
            element={<Catalogo />} 
          />

          <Route 
            path="/productos" 
            element={
              <RutaProtegida>
                <Productos />
              </RutaProtegida>
            } 
          />

          {/* Ruta 404 - siempre al final */}
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;