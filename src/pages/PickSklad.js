import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import NativeSelect from '@mui/material/NativeSelect';

//page for selection of the warehouse

function PickSklad({setSklad,setSkladID}) {
  const [warehouses,setWarehouses] = useState([]);
  const [currWare,setCurrWare] = useState(warehouses.length > 0 ? warehouses[0].nazev : null)

  const editCurrWare = (input) =>
  {
    setCurrWare(input);
    setSklad(input) ;
  }
  useEffect(() => {

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

  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Zpět</Button>
      {console.log(currWare)}
      <h3 align="center">Vybrat sklad: </h3>
      <p align="center">
        { warehouses.length > 0 ? (<NativeSelect onChange={(e) => editCurrWare(e.target.value)} >) 
        <option value="" selected disabled hidden>Vyber sklad</option>
        {warehouses.map( (ware) => ( <option> {ware.kod} </option>) )}</NativeSelect>) : (<option>Žádné sklady k dispozici</option>)}
      </p>
      { (warehouses.length != 0) && currWare != null &&  <p align="center">
      <Link to="/addRep" style={{ textDecoration: 'none' }}>
        <Button variant="outlined">Potvrdit</Button>
      </Link>
      </p>}
    </div>
  );
}

export default PickSklad;
