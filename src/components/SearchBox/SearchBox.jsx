import { Box, Button, TextField, ToggleButton, ToggleButtonGroup, InputLabel, Typography } from '@mui/material'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';

function SearchBox() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <InputLabel shrink htmlFor="location">
        Location
      </InputLabel>
      <TextField id="location" variant="outlined" />
      <div>
        <Typography>Filters</Typography>
        <Typography>Vehicle Equipment</Typography>
        <hr/>
        <ToggleButtonGroup>
          <ToggleButton>
            <AirOutlinedIcon />
            AC
          </ToggleButton>
          <ToggleButton>
            <HubOutlinedIcon />
            Automatic
          </ToggleButton>
          <ToggleButton>
            <LocalCafeOutlinedIcon />
            Kitchen
          </ToggleButton>
          <ToggleButton>
            <TvOutlinedIcon />
            TV
          </ToggleButton>
          <ToggleButton>
            <ShowerOutlinedIcon />
            Bathroom
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography>Vehicle type</Typography>
        <hr/>
        <ToggleButtonGroup>
          <ToggleButton>
            <ViewQuiltOutlinedIcon />
            Van
          </ToggleButton>
          <ToggleButton>
            <ViewModuleOutlinedIcon />
            Fully integrated
          </ToggleButton>
          <ToggleButton>
            <ViewWeekOutlinedIcon />
            Alcove
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Button>Search</Button>
    </Box>
  )
}

export default SearchBox