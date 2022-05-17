import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import PickWarehouse from "./pages/PickWarehouse";
import AddRep from "./pages/AddRep";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [warehouse,setWarehouse] = useState("SKLAD");

  const [stocktaking,setStocktaking] = useState(null);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setStocktaking={setStocktaking}/>} />
          <Route path="addRep" element={<AddRep warehouse={warehouse} stocktaking={stocktaking} />} />
          <Route path="pickWarehouse" element={<PickWarehouse setWarehouse={setWarehouse}  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
