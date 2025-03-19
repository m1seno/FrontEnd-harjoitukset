import TabsNavigation from "./TabsNavigation";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import './App.css'

function App() {
  return (
    <Container
      maxWidth="xl"
      sx={{ margin: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo List</Typography>
        </Toolbar>
      </AppBar>
      <TabsNavigation />
    </Container>
  );
}

export default App;
