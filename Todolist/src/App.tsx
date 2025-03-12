import TodoList from './TodoList';
import Container from "@mui/material/Container"
import CssBaseline from '@mui/material/CssBaseline';
//import './App.css'

function App() {
  return (
    <Container maxWidth="xl">
      <CssBaseline/>
      <h1>Todo List</h1>
      <TodoList />
      </Container>
  );
}

export default App;