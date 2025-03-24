import { Card, List, ListItem, Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Features({ camper }) {

  return (
    <Card
      sx={{
        padding: "44px 52px",
        width: 524,
        backgroundColor: "background.inputs",
        borderRadius: "10px",
      }}
    >
      <List
        sx={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          width: "100%",
          marginBottom: "100px",
        }}
      >
        {Object.entries(camper)
          .filter(
            ([key, value]) => typeof value === "boolean" && value === true
          )
          .map(([key, value]) => (
            <ListItem
              sx={{
                justifyContent: "center",
                width: "unset",
                backgroundColor: "background.default",
                borderRadius: "100px",
              }}
              key={key}
            >
              <Typography sx={{ textTransform: "capitalize" }}>
                {key}
              </Typography>
            </ListItem>
          ))}
      </List>
      <Typography sx={{ fontSize: 20, marginBottom: "24px", fontWeight: 600 }}>
        Vehicle Details
      </Typography>
      <Divider color="devider" sx={{ marginBottom: "24px" }} />
      <Grid container spacing={2} direction="column">
        <Grid
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>Form</Typography>
          <Typography sx={{ textTransform: "capitalize" }}>
            {camper.form}
          </Typography>
        </Grid>
        <Grid
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>Length</Typography>
          <Typography>{camper.length}</Typography>
        </Grid>
        <Grid
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>Width</Typography>
          <Typography>{camper.width}</Typography>
        </Grid>
        <Grid
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>Height</Typography>
          <Typography>{camper.height}</Typography>
        </Grid>
        <Grid
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>Tank</Typography>
          <Typography>{camper.tank}</Typography>
        </Grid>
        <Grid
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>Consumption</Typography>
          <Typography>{camper.consumption}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Features;
