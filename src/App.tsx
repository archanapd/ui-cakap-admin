import React from "react";
import "./App.css";
import SingleSelect from "./components/SingleSelect/SingleSelect";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import Button from 'react-bootstrap/Button';
import {Container, Grid, Box} from "@mui/material";

import 'bootstrap/dist/css/bootstrap.min.css';
import FillInTheBlanks from "components/FillInTheBlanks/FillInTheBlanks";

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
  },
  {
    type: 'text',
    image: "https://h5p.org/sites/default/files/h5p/content/620/images/image-568b75eb0dded.jpg",
    audio: url,
    label: 'Checkbox demo',
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
    ],
    sentence: 'Bilberries (Vaccinium myrtillus), also known as \n' +
      '***** berries are edible, nearly black berries found in nutrient-poor soils.\n' +
      '\n' +
      '***** berries (Rubus chamaemorus) are edible orange berries similar to raspberries or blackberries found in alpine and arctic tundra. \n' +
      '\n' +
      '***** Redcurrant (Ribes rubrum) are red translucent berries with a diameter of 8–10 mm, and are closely related to its black colored relative \n' +
      'currant. ',
  }
];

function App() {
  
  let [component, setComponent] = React.useState(0);
  
  const handlePrevClick = () => {
    // setComponent("FirstComponent");
    component = component > 1 ? (component - 1) : component;
    setComponent(component);
  }
  
  const handleNextClick = () => {
    // setComponent("SecondComponent");
    component = component < questions.length ? (component + 1) : component;
    setComponent(component);
  }

  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{bgcolor: 'white', height: '700px'}}>
         { component === 0 && <img height="500px" src="https://i.pinimg.com/736x/79/b2/13/79b213aff2e98fa6412100c47b6304f0--quizes-screens.jpg"></img> }

          <Grid>
          {/*{ component === 'FirstComponent' && <SingleSelect data={questions[0]} />  }*/}
          {/*{ component === 'SecondComponent' && <MultiSelect data={questions[1]} /> }*/}
          { component === 1 && <SingleSelect data={questions[0]} />  }
          { component === 2 && <MultiSelect data={questions[1]} /> }
          { component === 3 && <FillInTheBlanks data={questions[2]} /> }
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
