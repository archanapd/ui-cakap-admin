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
  // {
  //   type: 'radio',
  //   image: "https://h5p.org/sites/default/files/h5p/content/713/images/file-5885c23902f31.jpg",
  //   audio: url,
  //   title: 'What color does the blackcurrant berry actually have?',
  //   options: [
  //     {
  //       value: 'Very dark Purple',
  //       selected: false,
  //       correct: true
  //     },
  //     {
  //       value: 'Blue',
  //       selected: false,
  //       correct: false
  //     },
  //     {
  //       value: 'Black',
  //       selected: false,
  //       correct: false
  //     }
  //   ]
  // },
  // {
  //   type: 'box',
  //   image: "https://h5p.org/sites/default/files/h5p/content/620/images/image-568b75eb0dded.jpg",
  //   audio: url,
  //   label: 'Checkbox demo',
  //   title: 'What color does the strawberry actually have?',
  //   options: [
  //     {
  //       value: 'Bright red',
  //       checked: true,
  //       correct: true
  //     },
  //     {
  //       value: 'Pink',
  //       checked: false,
  //       correct: false
  //     },
  //     {
  //       value: 'Blue',
  //       checked: false,
  //       correct: false
  //     }
  //   ]
  // },
  // {
  //   type: 'box-image',
  //   image: "",
  //   audio: url,
  //   title: 'Pick up your favourite',
  //   options: [
  //     {
  //       value: 'Bright red',
  //       image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //       title: 'Camera'
  //     },
  //     {
  //       value: 'Pink',
  //       image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  //       title: 'Coffee'
  //     },
  //     {
  //       value: 'Blue',
  //       image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  //       title: 'Hats'
  //     }
  //   ]
  // },
  {
    type: 'text',
    image: "https://www.lifeinnorway.net/wp-content/uploads/2015/08/wild-berries-norway.jpg",
    audio: url,
    title: "Insert the missing words in this text about berries found in Norwegian forests and mountainous regions.",
    sentence: '<p>Bilberries (Vaccinium myrtillus), also known as berries are * edible, nearly black berries found in nutrient-poor soils.</p>' + 
    '<p> * berries (Rubus chamaemorus) are edible orange berries similar to raspberries or blackberries found in alpine and arctic tundra.</p>' +
    '<p>Redcurrant (Ribes rubrum) are red translucent berries with a diameter of 8~10 mm, and are closely related to its black colored relative * currant.</p>',
    options: {
      "books":
                [
                  {
                      "title": "Professional JavaScript",
                      "authors": [
                          "Nicholas C. Zakas"
                      ],
                      "edition": 3,
                      "year": 2011
                  },
                  {
                      "title": "Professional JavaScript",
                      "authors": [
                          "Nicholas C.Zakas"
                      ],
                      "edition": 2,
                      "year": 2009
                  },
                  {
                      "title": "Professional Ajax",
                      "authors": [
                          "Nicholas C. Zakas",
                          "Jeremy McPeak",
                          "Joe Fawcett"
                      ],
                      "edition": 2,
                      "year": 2008
                  }
                ]
      }
  
  },
  {
    type: 'select',
    image: "https://www.lifeinnorway.net/wp-content/uploads/2015/08/wild-berries-norway.jpg",
    audio: url,
    title: "Insert the missing words in this text about berries found in Norwegian forests and mountainous regions.",
    sentence: '<p>Bilberries (Vaccinium myrtillus), also known as berries are * edible, nearly black berries found in nutrient-poor soils.</p>' + 
    '<p> * berries (Rubus chamaemorus) are edible orange berries similar to raspberries or blackberries found in alpine and arctic tundra.</p>' +
    '<p>Redcurrant (Ribes rubrum) are red translucent berries with a diameter of 8~10 mm, and are closely related to its black colored relative * currant.</p>',
    options: {
      "books":
                [
                  {
                      "title": "Professional JavaScript",
                      "authors": [
                          "Nicholas C. Zakas"
                      ],
                      "edition": 3,
                      "year": 2011
                  },
                  {
                      "title": "Professional JavaScript",
                      "authors": [
                          "Nicholas C.Zakas"
                      ],
                      "edition": 2,
                      "year": 2009
                  },
                  {
                      "title": "Professional Ajax",
                      "authors": [
                          "Nicholas C. Zakas",
                          "Jeremy McPeak",
                          "Joe Fawcett"
                      ],
                      "edition": 2,
                      "year": 2008
                  }
                ]
      }
  
  }
];

function App() {
  
  let [component, setComponent] = React.useState(1);
  
  const handlePrevClick = () => {
    component = component > 1 ? (component - 1) : component;
    setComponent(component);
  }
  
  const handleNextClick = () => {
    component = component < questions.length ? (component + 1) : component;
    setComponent(component);
  }

  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{bgcolor: 'white', height: '700px'}}>
         { component === 0 && <img height="500px" src="https://i.pinimg.com/736x/79/b2/13/79b213aff2e98fa6412100c47b6304f0--quizes-screens.jpg"></img> }

          <Grid>
          {/* { component === 1 && <SingleSelect data={questions[0]} />  }
          { component === 2 && <MultiSelect data={questions[1]} /> } */}
          { component === 1 && <FillInTheBlanks data={questions[0]} /> }
          { component === 2 && <FillInTheBlanks data={questions[1]} /> }
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
