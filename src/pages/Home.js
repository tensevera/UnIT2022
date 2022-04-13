import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cont: {
    display: "flex" /* or inline-flex */,
    flexDirection: "column",
    justifyContent: "center",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.cont}>
      <h1>Vyber akci</h1>
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
