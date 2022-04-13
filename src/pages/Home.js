import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//default component
//home page

function Home({setInventura}) {
  function setInventura( ) {
    axios
      .post(
        `https://inventura.flexibee.eu/v2/c/firma2/inventura`,
      {
        "winstrom": {
          "inventura": [
          {
            "popisInventury": "super inventura",
            "typInventury": "string",
            "datZahaj": "2022-04-20",
            "stavK": `stavInventury.zahajena`
          }
        ]
              }
      },

        {
          auth: {
            username: "uzivatel2",
            password: "uzivatel2uzivatel2",
          }
        }
      )
      .then((res) => {
        console.log(res.data.winstrom.results[0].id);
      });
  }
  return (
    <div align="center">
      <p align="center">
        <h1>Vyber akci:</h1>
      </p>
      <p align="center">
      <Link to="/pickSklad" style={{ textDecoration: 'none' }}>
        <Button onClick={() => setInventura()} variant="text">Nová inventura</Button>
      </Link>
      </p>
      <p align="center">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="text">Historie inventur</Button>
      </Link>
      </p>
    </div>
  );
}

export default Home;
