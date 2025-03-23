import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, selectFavorites } from "../../redux/favoriteSlice";
import {
  CardActions,
  Typography,
  CardContent,
  CardMedia,
  Card,
  Box,
  Button,
  IconButton,
  List,
  ListItem
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteIcon from "@mui/icons-material/Favorite";

function TruckCard({camper}) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleToggleFavorite = (camperId) => {
    dispatch(toggleFavorite(camperId));
  };

  return (
    <Card
      sx={{ display: "flex", gap: "24px", padding: "24px", borderRadius: '20px', border: '1px solid #DADDE1' }}
    >
      <Box sx={{borderRadius: "10px", overflow: 'hidden', width: 292}}>
        <CardMedia
          component="img"
          height="320"
          sx={{ width: 292 }}
          image={camper.gallery[0].thumb}
          alt="green iguana"
        />
      </Box>
      <Box sx={{width: 524}}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'flex-start' }}>
            <Typography 
              sx={{ fontSize: 24, fontWeight: 600, lineHeight: '1.33' }}
            >
              {camper.name}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ fontSize: 24, fontWeight: 600, lineHeight: '1.33', marginRight: '12px' }}
              >
                {"$" + camper.price + ".00"}
              </Typography>
              <IconButton onClick={() => handleToggleFavorite(camper.id)} sx={{ color: 'text.primary', padding: 0}}>
                {favorites.includes(camper.id) ? (
                    <FavoriteIcon color="primary" />
                  ) : (
                    <FavoriteBorderOutlinedIcon />
                  )}
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: "flex", marginTop: "8px" }}>
            <StarOutlinedIcon fontSize="small" sx={{color: "primary.light"}}/>
            <Typography sx={{marginRight: '16px'}}>
              {camper.rating}
            </Typography>
            <MapOutlinedIcon fontSize="small"/>
            <Typography sx={{ fontSize: 16 }}>
              {camper.location}
            </Typography>
          </Box>
          <Box sx={{ marginTop: "24px"}}>
            <Typography sx={{ color: "text.secondary" }}>
              {camper.description.slice(0, 50) + ' ...'}
            </Typography>
          </Box>
          <List sx={{display: 'flex', gap: '8px', flexWrap: 'wrap', width:'100%', marginTop: '24px'}}>
            {Object.entries(camper).filter(([key, value]) => typeof(value) === 'boolean' && value === true).map(([key, value]) => (
              <ListItem sx={{justifyContent: 'center', width: 'unset', backgroundColor: 'background.default', borderRadius: '100px'}} key={key}>
                <Typography sx={{textTransform: 'capitalize'}}>{key}</Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions>
          <Button variant="contained" href={`catalog/${camper.id}`}>
            Show more
          </Button>
        </CardActions>
      </Box>
    </Card>
  )
}

export default TruckCard