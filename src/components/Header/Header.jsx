import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import Navigation from "../Navigation/Navigation"


function Header() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box component="img" src="src\assets\icons\TravelTrucks.svg" alt="TravelTrucks Logo" sx={{width: 136, height: 15 }} />
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
              <Navigation />
            </Box>
            <Box sx={{ width: 136, height: 15 }} />
          </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header