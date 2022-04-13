import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";

function PickSklad({setSklad}) {
  const [warehouses,setWarehouses] = useState([]);
  const [currWare,setCurrWare] = useState(warehouses.length > 0 ? warehouses[0].nazev : null)

  const editCurrWare = (input) =>
  {
    setCurrWare(input)
    setSklad(input)
  }
  useEffect(() => {
    //GET request using fetch inside useEffect React hook

    axios
      .get(
        `https://inventura.flexibee.eu/v2/c/firma2/sklad.json/?detail=full`,

        {
          auth: {
            username: "uzivatel2",
            password: "uzivatel2uzivatel2",
          },
        }
      )
      .then((res) => {
        const warehousesArr = res.data.winstrom.sklad;
        setWarehouses(warehousesArr);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div>
      {console.log(currWare)}
      <l>Vybrat sklad: </l>
      <p>
        { warehouses.length > 0 ? (<select onChange={(e) => editCurrWare(e.target.value)} >) 
        <option value="" selected disabled hidden>Vyber sklad</option>
        {warehouses.map( (ware) => ( <option> {ware.nazev} </option>) )}</select>) : (<option>Žádné sklady k dispozici</option>)}
      </p>
      { (warehouses.length != 0) && currWare != null &&  <p>
      <Link to="/addRep">
        <Button variant="text" >Potvrdit</Button>
      </Link>
      </p>}
    </div>
  );
}

export default PickSklad;
