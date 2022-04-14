import React from "react";
import "./App.css";
import SingleSelect from "./components/SingleSelect/SingleSelect";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import Button from 'react-bootstrap/Button';
import {Container, Grid, Box} from "@mui/material";

import 'bootstrap/dist/css/bootstrap.min.css';



const url = require("../src/assets/audio/audio_example.mp3");

const questions = [
  {
    type: 'radio',
    image: "https://h5p.org/sites/default/files/h5p/content/713/images/file-5885c23902f31.jpg",
    audio: url,
    title: 'What color does the blackcurrant berry actually have?',
    options: [
      {
        value: 'Very dark Purple',
        selected: false,
        correct: true
      },
      {
        value: 'Blue',
        selected: false,
        correct: false
      },
      {
        value: 'Black',
        selected: false,
        correct: false
      }
    ]
  },
  {
    type: 'box',
    image: "https://h5p.org/sites/default/files/h5p/content/620/images/image-568b75eb0dded.jpg",
    audio: url,
    label: 'Checkbox demo',
    title: 'What color does the strawberry actually have?',
    options: [
      {
        value: 'Bright red',
        checked: true,
        correct: true
      },
      {
        value: 'Pink',
        checked: false,
        correct: false
      },
      {
        value: 'Blue',
        checked: false,
        correct: false
      }
    ]
  }
];

function App() {
  
  const [component, setComponent] = React.useState("init");

  const handlePrevClick = () => {
    setComponent("FirstComponent");
  }
  
  const handleNextClick = () => {
    setComponent("SecondComponent");
  }

  return (
    <div className="App">
      <Container maxWidth="md">
      <Box sx={{bgcolor: 'white', height: '700px'}}>
       { component === 'init' && <img height="500px" src="https://i.pinimg.com/736x/79/b2/13/79b213aff2e98fa6412100c47b6304f0--quizes-screens.jpg"></img> }

        <Grid>
        { component === 'FirstComponent' && <SingleSelect data={questions[0]} />  }
        { component === 'SecondComponent' && <MultiSelect data={questions[1]} /> }
        </Grid>

        <Grid className="mx-0">
          <Button variant="primary" onClick={handlePrevClick}> &larr; Prev</Button>
          <Button variant="secondary" className="mx-2" onClick={handleNextClick}>Next &rarr;</Button>
        </Grid>
        </Box>
      </Container>

    </div>
  );
}

export default App;
