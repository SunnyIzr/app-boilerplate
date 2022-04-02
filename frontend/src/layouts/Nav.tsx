import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h1>MyApp</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/">Home</Link> |{" "}
      </nav>
    </div>
  )
}

export default Nav;
