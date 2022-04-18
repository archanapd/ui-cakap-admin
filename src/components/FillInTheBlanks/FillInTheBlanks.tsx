import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Container, Grid, TextField} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

import "./FillInTheBlanks.css";

const formatLabel = (props: any, text: any) => {
  let queryString: any;
  if (props.data.type === 'text') {
    queryString = text.replace(/\*/g, '<input class="text-replacer" type="text"/>');
  }
  else {
    queryString = text.replace(/\*/g, addSelect(props.data.options));
  }
  return queryString;
};

const addSelect = (options: any) => {
  return (
    '<select>' + 
      options.books.map((item:any, indx: any) => {
        return '<option value={item.title}>'+ item.title + '</option>'
      }) + 
    '</select>'
  );
}

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
          <h3>{props.data.title}</h3>
          <Grid>
          <div dangerouslySetInnerHTML={ {__html: formatLabel(props, props.data.sentence)} } />
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
