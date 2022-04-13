import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import PickSklad from "./pages/PickSklad";
import AddRep from "./pages/AddRep";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    // GET request using fetch inside useEffect React hook

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

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

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
