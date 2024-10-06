import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TitleWithVideo from './components/Jsx/TitleWithVideo';
import HeroSection from './components/Jsx/HeroSection';
import Footer from './components/Jsx/Footer';
import Header from './components/Jsx/Header';
import Torneos from './components/Jsx/Torneos'; // Importar la página de Torneos
import Formulario from './components/Jsx/Formulario'; // Importar el componente Formulario
import Clases from './components/Jsx/Clases';
import ClasesFormulario from './components/Jsx/ClasesFormulario';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <TitleWithVideo />
              <HeroSection />
            </>
          } />
          
          <Route path="/torneos" element={<Torneos />} />
          <Route path="/formulario" element={<Formulario />} /> {/* Añadir esta línea */}
          <Route path="/clases" element={<Clases />} />
          <Route path="/ClasesFormulario" element={<ClasesFormulario />} />
        </Routes>

        <Footer /> {/* Mantén el footer en todas las rutas */}
      </div>
    </Router>
  );
}

export default App;
