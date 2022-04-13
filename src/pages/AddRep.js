import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function AddRep() {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>go back</Button>
    </div>
  );
}

export default AddRep;
