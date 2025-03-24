import { Typography, CircularProgress, Box, LinearProgress  } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TruckCard from "../TruckCard/TruckCard"
import { useSelector } from "react-redux";
import { selectFilteredCampers, selectStatus } from "../../redux/campersSlice";

function TrucksList() {
  const campers = useSelector(selectFilteredCampers);
  const status = useSelector(selectStatus);

  return (
    <>
      {status === 'loading' && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}

      {campers.length > 0 && (
        campers.map((camper) => (
          <Grid key={camper.id}>
            <TruckCard camper={camper}/>
          </Grid>
        ))
      )}

      {campers.length === 0 && status === 'succeeded' && (
        <Box sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
          <Typography color="primary">No campers found</Typography>
        </Box>
      )}
    </>
  );
}

export default TrucksList;
