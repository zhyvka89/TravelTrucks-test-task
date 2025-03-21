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
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campersSlice";

function TrucksList() {
  const campers = useSelector(selectCampers);

  return (
    <>
      {campers.map((camper) => (
        <Card sx={{ minWidth: 888, display: "flex", padding: "24px" }} key={camper.id}>
          <Box sx={{ width: 292 }}>
            <CardMedia
              component="img"
              height="320"
              image={camper.gallery[0].thumb}
              alt="green iguana"
            />
          </Box>
          <Box sx={{width: 596}}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: " #101828", fontSize: 24, fontWeight: 600 }}>
                  {camper.name}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{  color: " #101828", fontSize: 24, fontWeight: 600 }}>
                    {camper.price}
                  </Typography>
                  <IconButton>
                    <FavoriteBorderOutlinedIcon/>
                  </IconButton>
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
                  {camper.rating}
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
                  {camper.location}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                  {camper.description}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small" href={`catalog/${camper.id}`}>Show more</Button>
            </CardActions>
          </Box>
        </Card>
      ))}
    </>
  );
}

export default TrucksList;
