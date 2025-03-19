import Box from '@mui/material/Box';
import SearchBox from '../../components/SearchBox/SearchBox';
import TrucksList from '../../components/TrucksList/TrucksList';


function CatalogPage() {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <SearchBox />
      <TrucksList />
    </Box>
  )
}

export default CatalogPage