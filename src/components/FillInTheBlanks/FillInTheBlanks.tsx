import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Container, Grid, MenuItem, Select, TextField} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Player from "components/Audio/AudioPlayer";
import RadioButtonsGroup from "components/RadioButton/RadioButtonsGroup";

import "./FillInTheBlanks.css";

const formatLabel = (label: any, value: any, question: any) => {
  let field: any;
  if (question.type === 'text') {
    field = <TextField id="standard-basic" variant="standard"/>
  } else if (question.type === 'dropdown') {
    field = <Select labelId="select-answer" id="select-answer" value='' sx={{height: '30px', width: '150px'}}>
      {question.options.map((option: any) => <MenuItem value={option.value}>{option.value}</MenuItem>)}
    </Select>
  }

  if (!value) {
    return label;
  }
  return (
    <div>
      {label.split(value)
        .reduce((prev: any, current: any, i: any) => {
          if (!i) {
            return [current];
          }
          return prev.concat(
            field
            , current);
        }, [])
      }
    </div>
  );
};

export default function FillInTheBlanks(props: any) {
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
            <Player url={props.data.audio}/>
          </Grid>
          <h3>{props.data.title}</h3>
          <Grid>
            {formatLabel(props.data.sentence, '*****', props.data)}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
