import { Button } from "@mui/material";
import { Link } from "react-router-dom";

//default component
//home page

function Home({setStocktaking}) {
  return (
    <div align="center">
      <div align="center">
        <h1>Vyber akci:</h1>
      </div>
      <p align="center">
      <Link to="/pickSklad" style={{ textDecoration: 'none' }}>
        <Button onClick={() => setStocktaking()} variant="text">Nová inventura</Button>
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
