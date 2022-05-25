import * as React from "react";
import { useState } from "react";
import { Navigate, Route, Outlet, useNavigate } from "react-router-dom";

import { auth } from "../../firebase";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getModalUtilityClass } from "@mui/material";


function LoginPop() {


    const theme = createTheme();

    const [data, setData] = useState({
        email: "",
        password: "",
      });

      

    
  const [errorMessage, setError] = useState("");
  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const localData = JSON.parse(localStorage.getItem("data"));

  const signIn = (e) => {
    
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => [console.log(err), setError(err.message)]);
    // console.log(event)
    console.log({
      email: email,
      password: password,
    });
  };

  const signUp = (e) => {
    e.preventDefault();

    //const data = new FormData(e.currentTarget);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => console.log(err, "jio2"), setError("error"));
  };

  if (localData !== null && localData.data!=="") {
    // return <Navigate to="/" />
    return <Navigate to="/" />;
  }

  


  return (
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={changeHandler}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={changeHandler}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {console.log(errorMessage, "jio")}
            {errorMessage !== "" && (
              <p className="error-message" label="">
                Wrong Credentials/User doen't exists.
              </p>
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={(e) => signIn(e)}
              fullWidth
              variant="contained"
              id="login"
              sx={{ mt: 3, mb: 2 }}
              value="login"
            >
              Log In
            </Button>

            <Button
              fullWidth
              id="signup"
              onClick={(e) => signUp(e)}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    
  )
}

export default LoginPop;