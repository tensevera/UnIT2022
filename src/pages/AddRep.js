import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import List from '@mui/material/List';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SettingsVoiceOutlined } from "@material-ui/icons";

function AddRep({sklad}) {
 //const  sklad = "SKLAD"
  const [list,setList] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [id, setID] = useState("");
  const [count, setCount] = useState(1);

  const [isProduct,setIsProduct] = useState(null);
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
        setIsProduct(len.length > 0);
        setName(len[0]?.nazev);
      });
  }

  function sentProd(id,count) {
    axios
      .post(
        `https://inventura.flexibee.eu/v2/c/firma2/inventura-polozka`,
      {
        "winstrom": {
          "inventura-polozka": [
           ...list
            
          ]
        }
      },

        {
          auth: {
            username: "uzivatel2",
            password: "uzivatel2uzivatel2",
          }
        }
      )
      .then((res) => {
        console.log(res);
      });
  }


  function addLocal(id,name,count){
    const item ={
      name: name,
      count:count,
      "inventura": 1,
      "sklad": 4,
      "cenik": `ean:${id}`,
      "mnozMjReal": count
    }
    setList(prevState => [...prevState, item]);
    console.log(list);
  }

 

  return (
    <div>
      <Button onClick={() => navigate(-1)}>go back</Button>
      <TextField
        id="outlined-basic"
        label="počet"
        value={count}
        variant="outlined"
        onChange={(e) => setCount(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="EAN"
        value={id}
        variant="outlined"
        onChange={(e) => setID(e.target.value)}
      />

      <Button onClick={(e) => getProdukt(id)}>check</Button>
      <Button onClick={(e) => addLocal(id,name,count)}>přidat</Button>



     
{list.map((l)=>{
  return <h1>{l.name} ,{l.count}</h1>
})}
      <h1>{name}</h1>
      <Button onClick={(e) => sentProd(list)}>Poslat</Button>
    </div>
  );
  


}

export default AddRep;
