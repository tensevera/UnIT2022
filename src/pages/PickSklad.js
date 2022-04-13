import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { getSklads } from "../api/api";

function PickSklad() {
  const [sklad, useSklad] = useState([]);

  useEffect(() => {
    getSklads().then((x) => console.log(x));
  }, []);
  return (
    <div>
      <Link to="/addRep">
        <Button variant="text">Text</Button>
      </Link>
    </div>
  );
}

export default PickSklad;
