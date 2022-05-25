import {
  Route,
  BrowserRouter as Router,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import firebase from 'firebase/compat/app';
import React, { useEffect, useState, Fragment } from "react";
import logo from "../../assets/images/logo.svg";

import { auth } from "../../firebase";
import Home from "./Home";

import SignIn from "./LoginPage";
import "./App.css";

function App() {
  const [presentUser, setPresentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem(
          "data",
          JSON.stringify({ uid: user?.uid, email: user?.email })
        );

        console.log(user,"harinath")
        setPresentUser({
          uid: user?.uid,
          email: user?.email,
        });
      } else {
        localStorage.clear();
        setPresentUser(null);
        
  

      }

      localStorage.setItem("amount",9)
    });
  }, []);

 

  

  return (
    <div className="App">
    
      <header className="App-header">
        <BrowserRouter>
          
          <Routes>
            <Route exact path="/login" element={<SignIn />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
  
      </header>
    </div>
  );
}

export default App;
