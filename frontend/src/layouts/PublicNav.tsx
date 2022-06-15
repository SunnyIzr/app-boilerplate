import React from 'react';
import {Link} from "react-router-dom";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const PublicNav = () => {
  return (
    <div>
      <Typography variant="h1" component="div" gutterBottom>
        MyApp
      </Typography>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
        marginBottom: "1rem",
        '& > *': {
          m: 1,
        },
      }}
        >
        <ButtonGroup size="large" aria-label="large button group">
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/login"><Button>Sign Up</Button></Link>
        </ButtonGroup>
      </Box>
    </div>
  )
}

export default PublicNav;