
import { Container } from '@mui/material';
import React from 'react';

import Header from '../Component/Header/Header';
import EventPage from '../Component/Page/EventPage';
import './App.css';

function App() {
  return (
    <>
        <div className="App">
          <Header/>
      Wel come
    </div>
    <Container>
    <EventPage/>
    </Container>
  
    </>

  );
}

export default App;
