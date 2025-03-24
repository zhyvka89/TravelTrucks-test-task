import { Typography, Box, LinearProgress, Button } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import TruckCard from "../TruckCard/TruckCard";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredCampers,
  selectHasMore,
  selectStatus,
} from "../../redux/campersSlice";
import { fetchCampers } from "../../redux/campersOps";

function TrucksList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectFilteredCampers);
  const status = useSelector(selectStatus);
  const hasMore = useSelector(selectHasMore);
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchCampers({ page: nextPage, limit: 4 }));
  };

  return (
    <>
      {status === "loading" && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}

      {campers.length === 0 && status === "succeeded" && (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Typography color="primary">No campers found</Typography>
        </Box>
      )}

      {campers.length > 0 &&
        campers.map((camper) => (
          <Grid key={camper.id}>
            <TruckCard camper={camper} />
          </Grid>
        ))}

      {hasMore && status !== "loading" && (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleLoadMore}
          sx={{
            display: "block",
            margin: "20px auto",
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          Load More
        </Button>
      )}
    </>
  );
}

export default TrucksList;
