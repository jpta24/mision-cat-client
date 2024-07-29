import { Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";


import HomePage from "./pages/HomePage";
import Misas from "./pages/Misas";
import Sacramentos from "./pages/Sacramentos";
import NosotrosPage from "./pages/NosotrosPage";
import PastoralPage from "./pages/Pastoral";
import AsociacionPage from "./pages/AsociacionPage";
import ContactoPage from "./pages/ContactoPage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";



function App() {
  return (

<div className="App bg-opacity-10">
      <Navbar />

      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/misas" element={<Misas />} />
        <Route  path="/sacramentos" element={<Sacramentos />} />
        <Route  path="/nosotros" element={<NosotrosPage />} />
        <Route  path="/pastoral" element={<PastoralPage />} />
        <Route  path="/asociacion" element={<AsociacionPage />} />
        <Route  path="/contacto" element={<ContactoPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>

    </div>
  );
}

export default App;
