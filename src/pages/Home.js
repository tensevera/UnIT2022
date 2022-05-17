import { Button } from "@mui/material";
// import axios from "axios";
import { Link } from "react-router-dom";

//default component
//home page

function Home({setInventura}) {
  // function setInventura( ) {
  //   axios
  //     .post(
  //       `https://inventura.flexibee.eu/v2/c/firma2/inventura`,
  //     {
  //       "winstrom": {
  //         "inventura": [
  //         {
  //           "popisInventury": "super inventura",
  //           "typInventury": "string",
  //           "datZahaj": "2022-04-20",
  //           "stavK": `stavInventury.zahajena`
  //         }
  //       ]
  //             }
  //     },

  //       {
  //         auth: {
  //           username: process.env.REACT_APP_API_USERNAME,
  //           password: process.env.REACT_APP_API_PASSWORD,
  //         }
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data.winstrom.results[0].id);
  //     });
  // }
  return (
    <div align="center">
      <div align="center">
        <h1>Vyber akci:</h1>
      </div>
      <p align="center">
      <Link to="/pickSklad" style={{ textDecoration: 'none' }}>
        <Button onClick={() => setInventura()} variant="text">Nová inventura</Button>
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
