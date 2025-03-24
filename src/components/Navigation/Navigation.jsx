import { NavLink, useLocation } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";

function Navigation() {
  const location = useLocation();
  return (
    <Tabs
      value={location.pathname}
      textColor="primary"
      component="nav"
      sx={{
        "& .MuiTabs-indicator": { display: "none" },
      }}
    >
      <Tab
        label="Home"
        component={NavLink}
        to="/"
        value="/"
        sx={{
          color: "text.primary",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: 16,
          "&.active": { color: "#E44848" },
        }}
      />
      <Tab
        label="Catalog"
        component={NavLink}
        to="/catalog"
        value="/catalog"
        sx={{
          color: "text.primary",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: 16,
          "&.active": { color: "#E44848" },
        }}
      />
    </Tabs>
  );
}

export default Navigation;
