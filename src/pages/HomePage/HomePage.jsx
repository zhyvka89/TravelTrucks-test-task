import { Box, Typography, Button, Container } from "@mui/material";
import bgHero from "../../assets/homepage.png";

function HomePage() {
  return (
    <Box
      sx={{
        height: "calc(100vh - 76px)",
        width: "100wv",
        backgroundImage: `url(${bgHero})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          color="background.inputs"
          sx={{
            fontSize: 48,
            fontWeight: 600,
            marginBottom: "16px",
            lineHeight: 0.67,
          }}
        >
          Campers of your dreams
        </Typography>
        <Typography
          variant="h2"
          color="background.inputs"
          sx={{
            fontSize: 24,
            fontWeight: 600,
            marginBottom: "40px",
            lineHeight: 1.33,
          }}
        >
          You can find everything you want in our catalog
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/catalog"
          sx={{ padding: "16px 48px" }}
        >
          View Now
        </Button>
      </Container>
    </Box>
  );
}

export default HomePage;
