import React, { useState ,useEffect} from "react";
import { auth } from "../../firebase";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Navigate, Route, Outlet, useNavigate } from "react-router-dom";

// import { firebase } from 'firebase/app';
import HeadTable from "./Table";
import ModalComponent from "./Modal";

function Home() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const localData = JSON.parse(localStorage.getItem("data"));
  const totalAmount=JSON.parse(localStorage.getItem("amount"))
  

 const [amount,setAmount]=useState(totalAmount)
  

  if (localData === null) {
    return <Navigate to="/login" />;
  }

 
  const changeAmount=(value)=>{
      setAmount(value)
  }
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section className="header-container">
      <nav className="nav-bar">
        <img src="paktolus-logo.jpg" alt="logo" className="logo" />
        <div className="nav-right">
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <p>$ {amount}</p>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>{localData?.data===""?"G":localData?.email[0]}</Avatar>
            {localData.data === "" ? (
              <button className="log-btn" onClick={() => navigate("/login")}>
                LogIn
              </button>
            ) : (
              <button
                className="log-btn"
                onClick={() => [
                  localStorage.clear(),
                  navigate("/login"),
                  auth.signOut(),
                ]}
              >
                logout
              </button>
            )}
          </Stack>
        </div>
      </nav>
      <section className="content-section">
        <h1 style={{ color: "blue",textAlign:"center" }}>Game Result</h1>
        <section className="table-section">
          <HeadTable />
          <Button
            onClick={() => handleOpen()}
            id="Btton"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              height: 50,
              width: 200,
              backgroundColor: "green",
            }}
          >
            PLAY GAME
          </Button>
        </section>
      </section>
      <footer className="footer">
        <p style={{ color: "white", fontSize: "15px" }}>
          Copyright @{" "}
          <Link target="_blank" href="https://www.paktolus.com/">
            Paktolus.com
          </Link>{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
      <ModalComponent open={open} handleClose={handleClose} pageType={"home"} changeAmount={changeAmount}/>
    </section>
  );
}

export default Home;
