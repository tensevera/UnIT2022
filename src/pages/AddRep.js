import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AddItem from "../components/AddItem.js";
import AddList from "../components/AddList.js";

function AddRep() {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>go back</Button>
    </div>
  );
}

export default AddRep;
