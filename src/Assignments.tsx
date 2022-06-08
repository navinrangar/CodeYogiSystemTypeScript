import axios from "axios";
import { useState, FC } from "react";
import Button from "./Button";
import AssignmentSubmit from "./AssignmentSubmit";
import { useNavigate } from "react-router-dom";
import { assignmentsType } from "./models/assignmentsType";
import { DateTime } from "luxon";

type assignmentsProps = { assignment: assignmentsType };

const Assignments: FC<assignmentsProps> = ({ assignment }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-screen h-full pt-4 pl-3 bg-white border border-strong shadow-md mt-5 ml-4">
        <div className="flex">
          <h3 className="text-black text-md font-bold mb-1 mr-1"> #{assignment.id} </h3>
          <h3 className="text-black text-md font-bold mb-1 mr-3"> {assignment.title} </h3>
          <h3 className="text-black text-md font-bold mb-1">
            (
            {DateTime.fromISO(assignment.created_at)
              .setLocale("fr")
              .toLocaleString(DateTime.DATE_SHORT)}
            )
          </h3>
        </div>

        <h3
          onClick={() => navigate(`/assignments/${assignment.id}/details`)}
          className="text-red-600 text-md  mb-1"
        >
          Due Date:{" "}
          {DateTime.fromISO(assignment.due_date)
            .setLocale("fr")
            .toLocaleString(DateTime.DATE_SHORT)}{" "}
        </h3>

        <div className="m-6">
          <AssignmentSubmit assignment={assignment} />
        </div>
      </div>
    </div>
  );
};

export default Assignments;

// onClick={() => navigate(`/assignments/${assignment.id}/details`)}
