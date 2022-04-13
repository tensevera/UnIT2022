import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function PickSklad() {
  return (
    <div>
      <Link to="/addRep">
        <Button variant="text">Text</Button>
      </Link>
    </div>
  );
}

export default PickSklad;
