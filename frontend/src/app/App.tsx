import React from 'react';
import AppRouter from './AppRouter';

import Container from '@mui/material/Container';

const App = () => {
  return(
    <Container maxWidth="lg">
      <AppRouter/>
    </Container>
  )
}

export default App;