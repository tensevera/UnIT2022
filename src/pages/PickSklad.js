import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";

function PickSklad() {
  const [warehouses, setWarehouses] = useState([]);

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
      <Link to="/addRep">
        <Button variant="text">Potvrdit</Button>
      </Link>
    </div>
  );
}

export default PickSklad;
