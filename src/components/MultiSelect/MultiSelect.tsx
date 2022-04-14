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
        <CardMedia
            component="img"
            image={props.data.image}
            alt="earth from space"
        />
         <Grid>
         <Player url={props.data.audio} />
        </Grid>
        <h3>{props.data.title}</h3>
        <Grid>
          {props.data.type === 'box' ? <CheckBoxGroup options={props.data.options} /> : null}
        </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
