import React from 'react';

function Students({user}) {
  return (
    <>
      <div className="p-1 flex">
     <div className="bg-gray-700 h-80 w-80 shrink-0 p-6 rounded-md">
          <img className=" w-36 h-36 mx-auto  object-cover " src={user.picture.medium} ></img>
         <div className="flex shrink-0 justify-between mt-5"> 
             <div>
             <h3 className="text-white text-xl" >{user.name.first} {user.name.last}</h3>
             <h3 className="text-indigo-400 text-xl" >{user.gender}</h3>
             </div>
             <div className="flex ">
           <img className="w-10  object-scale-down" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" ></img> 
 <img className="w-10  object-scale-down" src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-1.png" ></img>
             </div>
         </div>
     </div>
     </div>
    </>
  );
}

export default Students;