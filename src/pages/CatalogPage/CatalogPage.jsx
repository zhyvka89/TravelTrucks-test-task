import Grid from '@mui/material/Grid2';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import SearchBox from '../../components/SearchBox/SearchBox';
import TrucksList from '../../components/TrucksList/TrucksList';


function CatalogPage() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])


  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{paddingTop: '48px'}}>
        <Grid size={5}>
          <SearchBox />
        </Grid>
        <Grid container size={7} spacing={2}>
          <TrucksList />
        </Grid>
      </Grid>
    </Container>
  )
}

export default CatalogPage