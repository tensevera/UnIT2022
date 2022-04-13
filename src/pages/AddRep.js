import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import List from '@mui/material/List';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddRep() {
 const  sklad = "SKLAD"
  const [list,setList] = useState([]);
  const [isProd, setIsProd] = useState(false);
console.log(sklad);
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

  function addLocal(id,name){
    const item ={
      id:id,
      name:name
    }
    setList([...list ,item]);
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
      <Button onClick={(e) => addLocal(input)}>přidat</Button>

     
{list.map((l)=>{
  <h1>{l.name}</h1>
})}
      <h1>{name}</h1>
    </div>
  );
}

export default AddRep;
