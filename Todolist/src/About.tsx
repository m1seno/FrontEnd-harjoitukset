import { Container, List, ListItem, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About TodoList App
      </Typography>
      <Typography paragraph>
        The Todo-app allows you to manage your tasks efficiently. You can add tasks, set their priority, assign a due date, and delete completed or unnecessary tasks. The app uses an interactive table for an easy overview of your todos.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Features:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Add new todos with a description, priority, and due date." />
        </ListItem>
        <ListItem>
          <ListItemText primary="View your todos in a structured table with sortable columns." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Delete selected todos from the list." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Prioritize tasks with a color-coded priority system (High, Medium, Low)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Integrated date picker for setting due dates." />
        </ListItem>
      </List>
      <Typography paragraph>
        The app is built using React, React Router, Material-UI for UI components, and AG Grid for a powerful and flexible table experience.
      </Typography>
    </Container>
  );
}

export default About;