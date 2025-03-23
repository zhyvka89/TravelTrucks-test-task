import { Box, Typography, Button, Container } from "@mui/material";

function HomePage() {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: "url('src/assets/homepage.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Typography variant="h2" color="primary">
          Campers of your dreams
        </Typography>
        <Typography variant="h6" color="primary">
          You can find everything you want in our catalog
        </Typography>
        <Button variant="contained" color="primary" href="/catalog">
          View Now
        </Button>
      </Box>
    </Container>
  )
}

export default HomePage