import React from 'react';
import { Container, Typography } from "@mui/material";
import "./Accueil.css";

const Accueil = () => {
  return (
    <div>
    <Container sx={{ bgcolor: "lightgray", height: "100vh"}}>
    <Typography variant= "h1">Welcome to Shoeter's</Typography>
    <div className="home-card" >
        
    </div>
    </Container>
    </div>
  )
}

export default Accueil
