import { Box, Typography, Card, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

function TruckDetails({ camper }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ fontSize: 24, fontWeight: 600, lineHeight: "1.33" }}>
        {camper.name}
      </Typography>
      <Box sx={{ display: "flex", marginTop: "8px", marginBottom: "16px" }}>
        <StarOutlinedIcon fontSize="small" sx={{ color: "primary.light" }} />
        <Typography sx={{ marginRight: "16px" }}>{camper.rating}</Typography>
        <MapOutlinedIcon fontSize="small" />
        <Typography sx={{ fontSize: 16 }}>{camper.location}</Typography>
      </Box>

      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 600,
          lineHeight: "1.33",
        }}
      >
        {"$" + camper.price + ".00"}
      </Typography>

      <Grid container spacing={4} sx={{ margin: "28px 0" }}>
        {camper.gallery.map((img, index) => (
          <Grid key={img.thumb}>
            <Card sx={{ maxWidth: 292 }}>
              <CardMedia
                component="img"
                height="312"
                image={img.thumb}
                alt={`Image ${index + 1}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography color="secondary" sx={{}}>
        {camper.description}
      </Typography>
    </Box>
  );
}

export default TruckDetails;
