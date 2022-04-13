import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddRep({ sklad }) {
  const [isProd, setIsProd] = useState(false);

  function getProdukt(id) {
    axios
      .get(
        `https://inventura.flexibee.eu/v2/c/firma2/skladova-karta/(sklad = "code:${sklad}" and ucetObdobi = "code:2022" and cenik="ean:${id}").json?detail=full`,

        {
          auth: {
            username: "uzivatel2",
            password: "uzivatel2uzivatel2",
          },
        }
      )
      .then((res) => {
        console.log(res);
        const len = res.data.winstrom["skladova-karta"];
        setIsProd(len.length > 0);
        setName(len[0]?.nazev);
      });
  }

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  return (
    <div>
      <Button onClick={() => navigate(-1)}>go back</Button>
      <TextField
        id="outlined-basic"
        label="EAN"
        value={input}
        variant="outlined"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={(e) => getProdukt(input)}>check</Button>

      <h1>{name}</h1>
    </div>
  );
}

export default AddRep;
