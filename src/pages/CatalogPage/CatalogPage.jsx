import Grid from '@mui/material/Grid2';
import SearchBox from '../../components/SearchBox/SearchBox';
import TrucksList from '../../components/TrucksList/TrucksList';
import { Container } from '@mui/material';


function CatalogPage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid size={5}>
          <SearchBox />
        </Grid>
        <Grid size={7}>
          <TrucksList />
        </Grid>
      </Grid>
    </Container>
  )
}

export default CatalogPage