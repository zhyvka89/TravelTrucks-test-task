import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { fetchCamperDetails } from "../../redux/campersOps";
import TruckDetails from '../../components/TruckDetails/TruckDetails';
import Features from '../../components/Features/Features';
import Reviews from '../../components/Reviews/Reviews';
import { selectSelectedCamper, selectStatus } from "../../redux/campersSlice";

function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);
  const status = useSelector(selectStatus);
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  useEffect(() => {
    dispatch(fetchCamperDetails(id))
  }, [dispatch, id]);

  return (
    <Container maxWidth="lg">
      {status === 'loading' && <p>Loading...</p>}
      {camper && (
        <>
        <TruckDetails camper={camper}/>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange}>
                <Tab label="Features" value="1" />
                <Tab label="Reviews" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1"><Features camper={camper} /></TabPanel>
            <TabPanel value="2"><Reviews reviews={camper.reviews}/></TabPanel>
          </TabContext>
        </Box>
        
        </>
      )}
    </Container>
  )
}

export default CamperDetailsPage