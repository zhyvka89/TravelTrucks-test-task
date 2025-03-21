import { Container } from "@mui/material"
import Navigation from "../Navigation/Navigation"


function Header() {
  return (
    <header>
      <Container maxWidth="lg">
        <p>TravelTrucks</p>
        <Navigation />
      </Container>
    </header>
  )
}

export default Header