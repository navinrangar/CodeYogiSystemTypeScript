import React from 'react';
import Branding from "./Branding";
import Button from "./Button";
import GoBack from "./GoBack";
import {Link} from "react-router-dom";


function QuizHeader(props) {

  const moreCSS= props.className
  return (
    <>
      <div className={"flex bg-gray-800 fixed w-screen justify-between " + moreCSS}>
        <div className="flex pl-3"> 
      <Branding> </Branding>
        <p className="text-white text-lg bg-gray-800 p-4">  |  Welcome, Navin </p>
          </div>


        <div className="flex p-2 ">

          <GoBack> </GoBack>
          <span className="m-2"> </span>
        <Button theme="timer"> 00:00 </Button>
          <span className="m-2"> </span>
           <Button theme="logout"> <Link to="/login"> LogOut</Link></Button>
        </div>
        </div>
    </>
  );
}

export default QuizHeader;  