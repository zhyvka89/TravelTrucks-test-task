import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import Navigation from "../Navigation/Navigation"


function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar component="header" sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box component="img" src="src\assets\icons\TravelTrucks.svg" alt="TravelTrucks Logo" sx={{width: 136, height: 15 }} />
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Navigation />
          </Box>
          <Box sx={{ width: 136, height: 15 }} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header