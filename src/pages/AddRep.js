import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AddRepHeader from "../components/AddRepHeader.js";

function AddRep() {
  const navigate = useNavigate();

  return (
    <div>
      <AddRepHeader/>
      <Button onClick={() => navigate(-1)}>go back</Button>
    </div>
  );
}

export default AddRep;
