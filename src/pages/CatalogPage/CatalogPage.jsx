import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import SearchBox from "../../components/SearchBox/SearchBox";
import TrucksList from "../../components/TrucksList/TrucksList";

function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, limit: 4 }));
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ paddingTop: "48px" }}>
        <Grid size={4}>
          <SearchBox />
        </Grid>
        <Grid container size={8} spacing={2}>
          <TrucksList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CatalogPage;
