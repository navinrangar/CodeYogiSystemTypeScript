import { useState, useEffect } from "react";
import Assignments from "./Assignments";
import LeftSideBar from "./LeftSideBar";
import GoBack from "./GoBack";
import AssignmentSubmit from "./AssignmentSubmit";
import { getAssignmentList, getCachedData } from "./Api";
import { assignmentsType } from "./models/assignmentsType";

function AssignmentList() {
  let cachedAssignments = [];

  try {
    cachedAssignments = getCachedData("assignments") || [];
  } catch (e) {
    console.log(e);
  }

  const [assignments, setAssignments] = useState<assignmentsType[]>(cachedAssignments);

  useEffect(() => {
    const token = getAssignmentList();
    token.then(assignmentData => {
      setAssignments(assignmentData);
    });
  }, []);

  return (
    <div className="flex">
      <div className="h-full">
        <LeftSideBar />
      </div>

      <div className="space-y-2 px-8 py-4 bg-white flex flex-col items-stretch p-2 ">
        <div className="flex justify-between mr-80">
          <h2 className="text-black text-2xl font-bold"> Assignments </h2>

          <GoBack> </GoBack>
        </div>

        <div className="w-screen h-full shadow-lg m-8 mt-3">
          {assignments.map(a => (
            <Assignments key={a.id} assignment={a} />
          ))}
          {assignments.map(a => (
            <AssignmentSubmit key={a.id} assignment={a} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AssignmentList;
