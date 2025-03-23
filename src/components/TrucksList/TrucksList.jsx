import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TruckCard from "../TruckCard/TruckCard"
import { useSelector } from "react-redux";
import { selectFilteredCampers } from "../../redux/campersSlice";

function TrucksList() {
  const campers = useSelector(selectFilteredCampers);

  return (
    <>
      {campers.length > 0 ? (
        campers.map((camper) => (
          <Grid key={camper.id}>
            <TruckCard camper={camper}/>
          </Grid>
        ))
      ) : (
        <Typography>No campers found</Typography>
      )}
    </>
  );
}

export default TrucksList;
