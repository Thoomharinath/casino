import React, { useState } from "react";
import Button from "@mui/material/Button";
import getUrl from "./../../utils";

function GameModal({ closeModal,changeAmount}) {
  const symbolData = ["/diamond.jpg", "/dot.jpg", "/flower.jpg", "/love.jpg"];

  const symbolNames = ["diamond", "dot", "flower", "love"];

  const [data, setData] = useState(symbolNames);
  const [gameStatus,setGameStatus]=useState(true)

  const sortOrder = (buttonType) => {
  let latestdata=data.map(each=>symbolNames[Math.floor(Math.random()*3)])
  

    const resultData = JSON.parse(localStorage.getItem("resultData"));
    let amount = JSON.parse(localStorage.getItem("amount"));
    amount = parseInt(amount);


    if (buttonType !== "trial") {
        amount-=2

      const dotStatus = latestdata.forEach((each) => each === "dot");
      if (dotStatus) {
        amount = amount + 5;
      } else {
        for (let i in latestdata) {
          if (latestdata.forEach((each) => each === symbolNames[i])) {
            amount = amount + 2;
            break;
          } else {
            const fileterdData = latestdata.filter(
              (each) => each === symbolNames[i]
            );
            if (fileterdData.length === 2) {
              amount = amount + 0.5;
              break;
            }
          }
        }
      }


      let time= new Date().toLocaleTimeString();


        if (resultData === null) {

            
          localStorage.setItem(
            "resultData",
            JSON.stringify([{ images: latestdata, time:time }])
          );
        } else {
          resultData.push({ images: latestdata, time: time });
          localStorage.setItem("resultData", JSON.stringify(resultData));
        }
    }

   

    if (amount<=0){

      
        setTimeout(()=>closeModal(),2000)
    }


    amount = amount<=0?[0,setGameStatus(false)]:amount


    localStorage.setItem("amount",JSON.stringify(amount))
    changeAmount(amount)
    setData([...latestdata]);

    
    
   
  };

  const localdata = JSON.parse(localStorage.getItem("resultData"));

  console.log(localdata, "totaldata");


  

  return (
   gameStatus? <div className="game-modal">
      <table>
        <td className="table-column">
          <img src={getUrl(data[0])} alt="casino-icon" />
        </td>
        <td className="table-column">
          <img src={getUrl(data[1])} alt="casino-icon" />
        </td>
        <td className="table-column">
          <img src={getUrl(data[2])} alt="casino-icon" />
        </td>
      </table>
      <div className="btn-container">
        <Button
          variant="contained"
          onClick={sortOrder}
          sx={{ mt: 3, mb: 2, width: 150, backgroundColor: "green" }}
        >
          SPIN
        </Button>
        <Button
          variant="contained"
          onClick={() => sortOrder("trial")}
          sx={{ mt: 3, mb: 2, mx: 2, width: 150 }}
        >
          TRIAL BUTTON
        </Button>
        <Button
          variant="contained"
          onClick={() => closeModal()}
          sx={{ mt: 3, mb: 2, width: 150, backgroundColor: "red" }}
        >
          CLOSE
        </Button>
      </div>
    </div>:<div className="game-modal"><div><h1 style={{color:"red",fontSize:"40px"}}>GAME OVER!</h1></div></div>

  );
}

export default GameModal;
