import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const NavBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                style={{ width: 40 }}
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png"
                alt="App Logo"
              />
            </IconButton>
            <div style={{ marginLeft: "auto" }}>
              <Link to="/">
                <Button color="inherit" style={{ color: "white" }}>
                  Dashboard
                </Button>
              </Link>
              <Link to="/create-ads">
                <Button color="inherit" style={{ color: "white" }}>
                  Create Ads
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;
