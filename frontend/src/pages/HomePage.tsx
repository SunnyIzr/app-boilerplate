import React, { useEffect, useState } from 'react';

import Typography from '@mui/material/Typography';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/api/v1/home')
    .then((res) => res.json())
    .then((data) => {
      console.log("******")
      console.log(data);
      console.log(data.logged_in)
      setIsLoggedIn(data.logged_in)
    });
  }, [])

  return(
    <div>
      {isLoggedIn
        ? <Typography variant="body1" gutterBottom>Welcome Back!</Typography>
        : <Typography variant="body1" gutterBottom>Please Sign In!</Typography>
      }
      <Typography variant="body1" gutterBottom>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Tempore eveniet odit ea fugiat optio itaque, fuga omnis
        mollitia eum earum aspernatur! Obcaecati placeat ab, velit
        commodi rerum mollitia assumenda explicabo?
      </Typography>
    </div>
  )
}

export default HomePage;
