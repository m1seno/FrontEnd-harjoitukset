import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";

function Home() {
    return (
        <Container maxWidth="md">
          <Box textAlign="center" mt={5}>
            <Typography variant="h3" gutterBottom>
              Welcome to TodoList App
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph>
              Organize your tasks efficiently with our intuitive Todo List application.
              Add, prioritize, and track your tasks easily.
            </Typography>
          </Box>
        </Container>
      );
}

export default Home;