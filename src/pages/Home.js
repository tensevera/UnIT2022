import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div align="center" justify="center">
      <p align="center">
        <h1>Vyber akci:</h1>
      </p>
      <p align="center">
      <Link to="/pickSklad">
        <Button variant="text">Nová inventura</Button>
      </Link>
      </p>
      <p align="center">
      <Link to="/">
        <Button variant="text">Historie inventur</Button>
      </Link>
      </p>
    </div>
  );
}

export default Home;
