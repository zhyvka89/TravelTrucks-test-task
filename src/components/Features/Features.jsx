import { Card, List, ListItem, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2";
import { useSelector } from "react-redux";
import { selectFeatures } from "../../redux/campersSlice";

function Features({camper}) {
  const features = useSelector(selectFeatures);


  return (
    <Card sx={{padding: 2, width: 630}}>
      <List sx={{display: 'flex', width:'100%'}}>
        {features.map(([key, value]) => (
          <ListItem sx={{justifyContent: 'center', width: 'unset'}} key={key}>
            <Typography>{key}</Typography>
          </ListItem>
        ))}
      </List>
      <Typography>Vehicle Details</Typography>
      <hr />
      <Grid container spacing={2} direction="column">
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Form</Typography>
          <Typography>{camper.form}</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Length</Typography>
          <Typography>{camper.length}</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Width</Typography>
          <Typography>{camper.width}</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Height</Typography>
          <Typography>{camper.height}</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Tank</Typography>
          <Typography>{camper.tank}</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Consumption</Typography>
          <Typography>{camper.consumption}</Typography>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Features