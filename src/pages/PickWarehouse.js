import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import NativeSelect from '@mui/material/NativeSelect';

//page for selection of the warehouse

function PickWarehouse({setWarehouse}) {
  const [warehouses,setWarehouses] = useState([]);
  const [currWare,setCurrWare] = useState(warehouses.length > 0 ? warehouses[0].nazev : null)

  const editCurrWare = (input) =>
  {
    setCurrWare(input);
    setWarehouse(input) ;
  }
  useEffect(() => {

    axios
      .get(
        `https://inventura.flexibee.eu/v2/c/firma2/sklad.json/?detail=full`,

        {
          auth: {
            username: process.env.REACT_APP_API_USERNAME,
            password: process.env.REACT_APP_API_PASSWORD,
          },
        }
      )
      .then((res) => {
        const warehousesArr = res;
        setWarehouses(warehousesArr.data.winstrom.sklad);
      });

  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Zpět</Button>
      <h3 align="center">Vybrat sklad: </h3>
      <div align="center">
        { warehouses.length > 0 ? (<NativeSelect onChange={(e) => editCurrWare(e.target.value)} >) 
        <option value="" selected disabled hidden>Vyber sklad</option>
        {warehouses.map( (ware) => ( <option key={ware.kod}> {ware.kod} </option>) )}</NativeSelect>) : (<option>Žádné sklady k dispozici</option>)}
      </div>
      { (warehouses.length !== 0) && currWare != null &&  <p align="center">
      <Link to="/addRep" style={{ textDecoration: 'none' }}>
        <Button variant="outlined">Potvrdit</Button>
      </Link>
      </p>}
    </div>
  );
}

export default PickWarehouse;
