import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import PickSklad from "./pages/PickSklad";
import AddRep from "./pages/AddRep";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    axios
      .get(
        `https://inventura.flexibee.eu/v2/c/firma2/inventura.json/?detail=full`,

        {
          auth: {
            username: "uzivatel2",
            password: "uzivatel2uzivatel2",
          },
        }
      )
      .then((res) => {
        const persons = res;
        console.log(res);
      });
  }, []);

  const [sklad,setSklad] = useState(null)

  const editSklad = (newSklad ) => {
    setSklad(newSklad)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="addRep" element={<AddRep />} />
          <Route path="pickSklad" element={<PickSklad onSelect={editSklad} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
