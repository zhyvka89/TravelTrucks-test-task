import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  InputLabel,
  Typography,
} from "@mui/material";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined";
import { setFilters } from "../../redux/filterSlice";

function SearchBox() {
  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState([]);
  const [vehicleType, setVehicleType] = useState([]);
  const dispatch = useDispatch();

  function handleLocationChange(event) {
    setLocation(event.target.value);
  };

  function handleEquipmentChange(event, newEquipment) {
    setEquipment(newEquipment);
  }

  function handleVehicleTypeChange(event, newVehicleType) {
    setVehicleType(newVehicleType);
  }

  function handleSearch() {
    const formData = {
      location,
      equipment,
      vehicleType,
    };
    dispatch(setFilters(formData));
    console.log("Collected Data:", formData);
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <InputLabel shrink htmlFor="location">
        Location
      </InputLabel>
      <TextField
        id="location"
        variant="outlined"
        value={location}
        onChange={handleLocationChange}
      />
      <Box>
        <Typography>Filters</Typography>
        <Typography>Vehicle Equipment</Typography>
        <hr />
        <ToggleButtonGroup
          color="primary"
          value={equipment}
          onChange={handleEquipmentChange}
          multiple
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <ToggleButton value="AC">
            <AirOutlinedIcon />
            AC
          </ToggleButton>
          <ToggleButton value="transmission">
            <HubOutlinedIcon />
            Automatic
          </ToggleButton>
          <ToggleButton value="kitchen">
            <LocalCafeOutlinedIcon />
            Kitchen
          </ToggleButton>
          <ToggleButton value="TV">
            <TvOutlinedIcon />
            TV
          </ToggleButton>
          <ToggleButton value="bathroom">
            <ShowerOutlinedIcon />
            Bathroom
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography>Vehicle type</Typography>
        <hr />
        <ToggleButtonGroup
          color="primary"
          value={vehicleType}
          onChange={handleVehicleTypeChange}
        >
          <ToggleButton value="panelTruck">
            <ViewQuiltOutlinedIcon />
            Van
          </ToggleButton>
          <ToggleButton value="fullyIntegrated">
            <ViewModuleOutlinedIcon />
            Fully integrated
          </ToggleButton>
          <ToggleButton value="alcove">
            <ViewWeekOutlinedIcon />
            Alcove
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
}

export default SearchBox;
