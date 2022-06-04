import React from 'react';
import {Link} from "react-router-dom";



function Branding() {
  return (
    <>
      <div className="fixed">
      <h1 className="w-60 bg-gray-800 text-white text-3xl font-bold pl-3 pt-3 pb-3"> <Link to="/home"> CODEYOGI </Link></h1>
        </div>
    </>
  );
}

export default Branding;  