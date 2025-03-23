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
  Input
} from "@mui/material";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
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
      <Input
        id="location"
        value={location}
        onChange={handleLocationChange}
        placeholder="City"
        disableUnderline={true}
        sx={{width: '360px', marginTop: '8px', paddingLeft: '20px'}}
        startAdornment = {
          <InputAdornment position="start">
            <MapOutlinedIcon />
          </InputAdornment>
        }
      />
      <Box sx={{marginTop: '40px', marginBottom: '40px'}}>
        <Typography sx={{color: 'text.secondary', marginBottom: '32px'}}>Filters</Typography>
        <Typography sx={{fontWeight: 600, fontSize: 20, lineHeight: 1.2, marginBottom: '24px'}}>Vehicle Equipment</Typography>
        <Divider color='devider' sx={{marginBottom: '24px'}}/>
        <ToggleButtonGroup
          value={equipment}
          onChange={handleEquipmentChange}
          multiple
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            marginBottom: '24px'
          }}
        >
          <ToggleButton value="AC" sx={{ color: 'text.primary'}}>
            <AirOutlinedIcon />
            AC
          </ToggleButton>
          <ToggleButton value="transmission" sx={{ color: 'text.primary'}}>
            <HubOutlinedIcon />
            Automatic
          </ToggleButton>
          <ToggleButton value="kitchen" sx={{ color: 'text.primary'}}>
            <LocalCafeOutlinedIcon />
            Kitchen
          </ToggleButton>
          <ToggleButton value="TV" sx={{ color: 'text.primary'}}>
            <TvOutlinedIcon />
            TV
          </ToggleButton>
          <ToggleButton value="bathroom" sx={{ color: 'text.primary'}}>
            <ShowerOutlinedIcon />
            Bathroom
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography sx={{fontWeight: 600, fontSize: 20, lineHeight: 1.2, marginBottom: '24px'}}>Vehicle type</Typography>
        <Divider color='devider' sx={{marginBottom: '24px'}} />
        <ToggleButtonGroup
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            marginBottom: '24px'
          }}
          value={vehicleType}
          onChange={handleVehicleTypeChange}
        >
          <ToggleButton value="panelTruck" sx={{ color: 'text.primary'}}>
            <ViewQuiltOutlinedIcon />
            Van
          </ToggleButton>
          <ToggleButton value="fullyIntegrated" sx={{ color: 'text.primary'}}>
            <ViewModuleOutlinedIcon />
            Fully integrated
          </ToggleButton>
          <ToggleButton value="alcove" sx={{ color: 'text.primary'}}>
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
