import TodoList from "./TodoList";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

//import './App.css'

function App() {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo List</Typography>
        </Toolbar>
      </AppBar>
      <TodoList />
    </Container>
  );
}

export default App;
