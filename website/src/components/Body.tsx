import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { reflections } from "../content/Reflections";
import { EntryProps } from "../models/EntryProps";
import ButtonAppBar from "./ButtonAppBar";
import Entry from "./Entry";

const Body = () => {
  return (
    <Container sx={{minWidth: 500}}>
      <ButtonAppBar />
      <Box sx={{ flexGrow: 1, paddingTop: 1 }}>
        <Grid container spacing={2}>
          {reflections.map((x: EntryProps): JSX.Element => {
            return (
              <Grid item xs={16}>
                <Entry {...x}></Entry>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Body;
