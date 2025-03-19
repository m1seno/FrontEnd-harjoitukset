import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useLocation, useNavigate } from "react-router-dom";

function TabsNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="navigation tabs">
      <Tab label="Home" value="/" />
      <Tab label="Todos" value="/todolist" />
      <Tab label="About" value="/about" />
    </Tabs>
  );
}

export default TabsNavigation;
