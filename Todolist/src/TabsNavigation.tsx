import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TodoList from "./TodoList";

function TabsNavigation() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" />
        <Tab label="Todos" />
      </Tabs>

      {value === 0 && (
        <Box>
          <h2>Welcome to the Todo List -app</h2>
          <p>Here you can add new Todo -items to your list and delete them</p>
        </Box>
      )}
      {value === 1 && <TodoList />}
    </Box>
  );
}

export default TabsNavigation;
