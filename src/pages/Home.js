import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/pickSklad">
        <Button variant="text">pridat</Button>
      </Link>
    </div>
  );
}

export default Home;
