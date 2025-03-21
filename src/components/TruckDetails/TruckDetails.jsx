import { Box, Typography } from "@mui/material"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Card, CardMedia, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";


function TruckDetails({camper}) {
  return (
    <Box sx={{width: '100%'}}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ color: "#101828", fontSize: 32, fontWeight: 600 }}
      >{camper.name}</Typography>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
          {camper.rating}
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
          {camper.location}
        </Typography>
      </Box>
      <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
        {camper.price}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {camper.gallery.map((img, index) => (
          <Grid item key={img.thumb}>
            <Card sx={{ maxWidth: 292 }}>
              <CardMedia component="img" height="312" image={img.thumb} alt={`Image ${index + 1}`} />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography>{camper.description}</Typography>
    </Box>
  )
}

export default TruckDetails