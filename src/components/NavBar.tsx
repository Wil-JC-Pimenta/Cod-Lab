import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const NavBar: React.FC = () => {
  return (
    <div>
      <Link
        to="/challenges"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Button color="inherit">Desafios</Button>
      </Link>
      <Link to="/concepts" style={{ textDecoration: "none", color: "inherit" }}>
        <Button color="inherit">Conceitos</Button>
      </Link>
    </div>
  );
};

export default NavBar;
