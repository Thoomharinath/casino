import * as React from "react";
import { useState } from "react";
import { Navigate, Route, Outlet, useNavigate } from "react-router-dom";

import { auth } from "../../firebase";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import ModalComponent from "./Modal";



export default function SignIn() {
  const navigate = useNavigate();
  
 
  const [open, setOpen] = useState(false);

  const [loginModal, setLoginModal] = useState(false);

  const loginFunt = () => {
    localStorage.setItem("data", JSON.stringify({ data: "" }));
    navigate("/");
  };

  


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleOpens = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
   

    
      <div className="login-container casino-image">
        <Button
          onClick={() => loginFunt()}
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: "red" }}
          
        >
          GUEST
        </Button>
        <span className="line">---------OR-----------</span>
        <Button
          onClick={handleOpens}
          variant="contained"
    
          sx={{ mt: 3, mb: 2 }}
        
        >
          LOGIN
        </Button>
        <ModalComponent open={open} handleClose={handleClose}/>
        
      </div>
  
  );
}
