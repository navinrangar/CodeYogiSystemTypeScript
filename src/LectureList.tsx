import React, {useState, useEffect} from 'react';
import LeftSideBar from "./LeftSideBar";
import Lectures from "./Lectures";
import GoBack from "./GoBack";
import { getLectureList, getCachedData} from './Api';




export function LectureList(props) {

  const token = getLectureList();
  const cachedLectures = [];


  try{
 cachedLectures= getCachedData('lectures') || [];
    } catch(e) {
      console.log(e);
    }


const [lectures, setLectures] = useState(cachedLectures);
let [error, setError]= useState('');

  useEffect(()=>{

    token.then((lectureData)=>{
      setLectures(lectureData);
    })
    .catch((e)=> {console.error('lecture list couldn\'t be fetched'); setError("data could not be fetched", e)})

  },[])
  



  return ( 
      <div className="flex">
        <div class="h-full">
        <LeftSideBar> </LeftSideBar>
        </div>


        
        <div class="space-y-2 px-8 py-4 bg-white flex flex-col items-stretch p-2 " >

          <div className="flex flex-row justify-between mr-96">
            
        <h2 className="text-black text-2xl font-bold"> Lectures </h2> 

            <GoBack> </GoBack>
          </div>

        <div className="w-screen h-full shadow-lg m-8 mt-3"> 

         {error}
        
  

     { lectures.map(l=> <Lectures  lecture={l}/>)}

        
        
        </div>
          </div>
</div>
  )
  }


export default LectureList;  