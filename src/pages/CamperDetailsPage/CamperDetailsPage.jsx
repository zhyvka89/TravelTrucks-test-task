import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Box, Tab, LinearProgress } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { fetchCamperDetails } from "../../redux/campersOps";
import TruckDetails from "../../components/TruckDetails/TruckDetails";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import BookForm from "../../components/BookForm/BookForm"
import { selectSelectedCamper, selectStatus } from "../../redux/campersSlice";

function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);
  const status = useSelector(selectStatus);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [dispatch, id]);

  return (
    <Container maxWidth="lg">
      {status === "loading" && (
        <Box sx={{ width: "100%", paddingTop: "48px" }}>
          <LinearProgress />
        </Box>
      )}

      {camper && (
        <Box sx={{ paddingTop: "48px" }}>
          <TruckDetails camper={camper} />
          <Box sx={{display: 'flex', marginTop: "60px" }}>
            <Box sx={{ width: "100%"}}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList onChange={handleChange}>
                    <Tab
                      label="Features"
                      value="1"
                      sx={{
                        color: "text.primary",
                        "&.Mui-selected": { color: "text.primary" },
                        fontSize: 20,
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    />
                    <Tab
                      label="Reviews"
                      value="2"
                      sx={{
                        color: "text.primary",
                        "&.Mui-selected": { color: "text.primary" },
                        fontSize: 20,
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{padding: '44px 0'}}>
                  <Features camper={camper} />
                </TabPanel>
                <TabPanel value="2" sx={{padding: '44px 0'}}>
                  <Reviews reviews={camper.reviews} />
                </TabPanel>
              </TabContext>
            </Box>
            <BookForm/>
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default CamperDetailsPage;
