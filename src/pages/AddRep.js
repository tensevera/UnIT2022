import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, {  useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./AddRep.css";

//stocktaking page

function AddRep({warehouse,stocktaking}) {
  // if(!stocktaking){
  //   stocktaking =4;
  // }
  // debuggin feature
  const [list,setList] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [id, setID] = useState("");
  const [count, setCount] = useState(1);

  const [isProduct,setIsProduct] = useState(null);

function setStocktakingState( ) {
  axios
    .post(
      `https://inventura.flexibee.eu/v2/c/firma2/inventura`,
    {
      "winstrom": {
        "inventura": [
        {
          "id":stocktaking,
          "stavK": `stavInventury.hotova`
        }
      ]
            }
    },

      {
        auth: {
          username: process.env.REACT_APP_API_USERNAME,
          password: process.env.REACT_APP_API_PASSWORD,
        }
      }
    )
    .then((res) => {
      console.log(res.data.winstrom.results[0].id);
    });
  }
  function getProdukt(id) {
    axios
      .get(
        `https://inventura.flexibee.eu/v2/c/firma2/skladova-karta/(sklad = "code:${warehouse}" and ucetObdobi = "code:2022" and cenik="ean:${id}").json?detail=full`,

        {
          auth: {
            username:  process.env.REACT_APP_API_USERNAME,
            password:  process.env.REACT_APP_API_PASSWORD,
          },
        }
      )
      .then((res) => {
        console.log(res);
        const len = res.data.winstrom["skladova-karta"];
        setIsProduct(len.length > 0);
        len.length > 0 ? setName(len[0].nazev) : setName("nenalezen");
      });
  }

  function sentProd() {
    if(list.length ===0){
      return;
    }
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
            username:  process.env.REACT_APP_API_USERNAME,
            password:  process.env.REACT_APP_API_PASSWORD,
          }
        }
      )
      .then((res) => {
        console.log(res);
      });
      setStocktakingState();
      setList([]);
      setName("");
  }


  function addLocal(id,name,count){
    if(!isProduct){
      return 0;
    }
    const item ={
      name: name,
      count:count,
      "inventura": stocktaking,
      "sklad": 4,
      "cenik": `ean:${id}`,
      "mnozMjReal": count
    }
    let isPresent = false;
    list.map( (element) => 
      {if(item.cenik===element.cenik)
      {
        element.count = element.count*1 + count*1
        isPresent = true
        setList(prevState => [...prevState])
      }
    }
    )
    !isPresent && setList(prevState => [...prevState, item]);
    console.log(list);
  }

 

  return (
    <div align="center">
      <Button style={{position: "absolute" , left:"10px", up:"10px"}} onClick={() => navigate(-1)}>Zpět</Button>
      <div style={{display:"flex" ,justifyContent:"center",alignItems:"center",paddingTop:"100px"}} >

     
        <TextField
          id="outlined-basic"
          label="EAN"
          value={id}
          variant="outlined"
          onChange={(e) => setID(e.target.value)}
        />
      <TextField
      style={{width: "100px" }}
        id="outlined-basic"
        label="počet"
        value={count}
        variant="outlined"
        onChange={(e) => setCount(e.target.value)}
      />

      <Button onClick={(e) => getProdukt(id)}>check</Button>
      <Button onClick={(e) => addLocal(id,name,count)}>přidat</Button>
      </div>

      <h1>{"Současný produkt: "+ name}</h1>

     
{list.map((l)=>{
  return <h1>{l.name} ,{l.count}</h1>
})}
      <Button onClick={(e) => sentProd(list)}>Poslat</Button>
    </div>
  );
  


}

export default AddRep;