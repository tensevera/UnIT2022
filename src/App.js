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

  const [sklad,setSklad] = useState("SKLAD");
  const [skladID,setSkladID] = useState(null);

  const [inventura,setInventura] = useState(null);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setSkladID={setSkladID} setInventura={setInventura}/>} />
          <Route path="addRep" element={<AddRep sklad={sklad} inventura={inventura} />} />
          <Route path="pickSklad" element={<PickSklad setSklad={setSklad}  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
