import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/pickSklad">
        <Button variant="text">Nová inventura</Button>
      </Link>
      <Link to="/">
        <Button variant="text">Historie inventur</Button>
      </Link>
    </div>
  );
}

export default Home;
