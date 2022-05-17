import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import PickSklad from "./pages/PickSklad";
import AddRep from "./pages/AddRep";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   axios
  //     .get(
  //       process.env.REACT_APP_API_URL,

  //       {
  //         auth: {
  //           username: process.env.REACT_APP_API_USERNAME,
  //           password: process.env.REACT_APP_API_PASSWORD,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       const persons = res;
  //     });
  // }, []);

  const [sklad,setSklad] = useState("SKLAD");
  const [skladID,setSkladID] = useState(null);

  const [stocktaking,setStocktaking] = useState(null);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setSkladID={setSkladID} setStocktaking={setStocktaking}/>} />
          <Route path="addRep" element={<AddRep sklad={sklad} stocktaking={stocktaking} />} />
          <Route path="pickSklad" element={<PickSklad setSklad={setSklad}  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
