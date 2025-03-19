import {
  CardActions,
  Typography,
  CardContent,
  CardMedia,
  Card,
  Box,
  Button,
  IconButton
} from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function TrucksList() {
  return (
    <Card sx={{ minWidth: 888, display: "flex", padding: "24px" }}>
      <Box sx={{ width: 292 }}>
        <CardMedia
          component="img"
          height="320"
          image="src\assets\homepage.png"
          alt="green iguana"
        />
      </Box>
      <Box sx={{width: 596}}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ color: " #101828", fontSize: 24, fontWeight: 600 }}>
            Name
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{  color: " #101828", fontSize: 24, fontWeight: 600 }}>
              Price
            </Typography>
            <IconButton>
              <FavoriteBorderOutlinedIcon/>
            </IconButton>

          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
            Rating(length of reviews)
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
            Location
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            Description
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Show more</Button>
      </CardActions>
      </Box>
    </Card>
  );
}

export default TrucksList;
