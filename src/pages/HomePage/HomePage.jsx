import { Box, Typography, Button } from "@mui/material";

function HomePage() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('src/assets/homepage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
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
  )
}

export default HomePage