import {useState} from "react";
import LeftSideBar from "./LeftSideBar";
import Login from './Login';

let loggedInMessage= '';

export function getLoggedInData (loggedIn){
  if (loggedIn=== true)
  loggedInMessage= 'you are now logged in!';
}


function Home(){

  // let [loggedInMessage, setLoggedInMessage]= useState();

  return(
    <div className="flex"> 
      <div>
    <LeftSideBar> </LeftSideBar>
         </div>
      <div className="flex flex-col"> 
      <audio controls autoPlay> <source src="audio.mp3" type="audio/mp3"/> </audio> 
      
      <p className="bg-green-400 text-3xl text-black font-bold mt-12 mx-56"> {loggedInMessage} </p>
        <img className="w-56 h-56 mt-24 ml-96 mr-80" src="../images/soldier-with-bazooka.jpg"/>
      <p className="text-2xl text-green-500 mt-10 ml-80"> You are on the Front! Stay Alert  p </p>
        </div>
    </div>
  );
}

export default Home;
