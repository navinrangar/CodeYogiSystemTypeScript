import React from 'react';
import Button from "./Button";
import {Link} from "react-router-dom";



function GoBack(props) {
  return (
      <div> 
       
        <Link to ="/home"> <Button theme="back"> 🔙 </Button> </Link>
        </div>
  
  );
}

export default GoBack ;  