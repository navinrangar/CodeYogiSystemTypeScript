
import React, {useState, useEffect} from 'react';
import LeftSideBar from "./LeftSideBar";
import GoBack from "./GoBack";
import Students from './Students';
import { getStudentList, getCachedData } from './Api';



function StudentList() {


  const cachedUsers= [];

    try{
   cachedUsers= getCachedData('users'); 
    } catch(e){
      console.log(e);
    }

  const [users, setUsers] = useState(cachedUsers);

  useEffect(() => {
    const token= getStudentList();
    token.then((studentData)=>{
      setUsers(studentData);
    });
  }, []);


  return (
   <div className="flex">
        <div class="h-full">
        <LeftSideBar> </LeftSideBar>
        </div>

        <div class="space-y-2 px-8 py-4 bg-white flex flex-col items-stretch p-2 " >
<div className="flex justify-between mr-96">
        <h2 className="text-black text-2xl font-bold"> Students List </h2> 

  <GoBack> </GoBack>

  </div>

 <div className="w-screen h-full shadow-lg m-8 mt-3"> 
 
 <div className="flex">
    {users.map(u=> <Students user={u}/>)}
    </div>

   </div>
   </div>
   </div>
   
   
  );
}

export default StudentList;  