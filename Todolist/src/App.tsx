import TabsNavigation from "./TabsNavigation";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import './App.css'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container
      maxWidth="xl"
      sx={{ margin: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">TodoList</Typography>
        </Toolbar>
      </AppBar>
      <TabsNavigation />
      <Outlet/>
    </Container>
  );
}

export default App;
