import { Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";


import HomePage from "./pages/HomePage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";



function App() {
  return (
    <div className="App bg-success bg-opacity-10">
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<HomePage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes> 
      
    </div>
  );
}

export default App;
