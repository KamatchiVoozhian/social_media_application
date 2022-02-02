import React from "react";
import Navbar from './Navbar';
import Bio from './Bio';
import Feed from './Feed'

import MyComponent from "./MyComponent";


function App() {
  let columns = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginLeft: '350px',
    marginRight: '50px',
   }
 
  
  return (
    <div>
      <Navbar/>
      <div style={columns}>
        <div>
          <Feed/>
        </div> 
      </div>
      <div>
      <MyComponent/>
      </div>
    </div>
  );
}

export default App;