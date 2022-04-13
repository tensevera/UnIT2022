import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import PickSklad from "./pages/PickSklad";
import AddRep from "./pages/AddRep";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="addRep" element={<AddRep />} />
          <Route path="pickSklad" element={<PickSklad />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
