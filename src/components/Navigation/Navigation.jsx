import { NavLink, useLocation } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";

function Navigation() {
  const location = useLocation();

  const getTabValue = () => {
    if (location.pathname === "/") return "/";
    if (location.pathname.startsWith("/catalog")) return "/catalog";
    return false;
  };
  
  return (
    <Tabs
      value={getTabValue()}
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
