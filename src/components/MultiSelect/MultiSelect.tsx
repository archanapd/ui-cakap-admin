import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Container, Grid} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Player from "components/Audio/AudioPlayer";
import CheckBoxGroup from "components/CheckBox/CheckBoxGroup";

import "./MultiSelect.css";

export default function MultiSelect(props:any) {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="lg">
        <Box sx={{bgcolor: 'white', height: '800px'}}>
        { props.data.image && <CardMedia
            component="img"
            image={props.data.image}
            alt="earth from space"
        /> }
         <Grid>
         { props.data.audio && <Player url={props.data.audio} />
          }
        </Grid>
        <h3>{props.data.title}</h3>
        <Grid>
          {<CheckBoxGroup options={props.data} />}
        </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
