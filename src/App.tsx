import React from "react";
import { Routes, Route } from "react-router-dom";
import AssignmentList from "./AssignmentList";
import LectureList from "./LectureList";
import Quiz from "./Quiz";
import ProfileList from "./ProfileList";
import Login from "./Login";
import Home from "./Home";
import StudentList from "./StudentList";
import AssignmentDetails from "./AssignmentDetails";
import AssignmentSubmit from "./AssignmentSubmit";

function App() {
  return (
    <>
      <Routes>

        <Route path="lectures" element={<LectureList />} />
        <Route path="assignments" element={<AssignmentList />} />
      </Routes>
    </>
  );
}

export default App;

/* 

<Route path="quiz" element={<Quiz />} />
        <Route path="profile" element={<ProfileList />} />
        <Route path="login" element={<Login />} />

         <Route path="students" element={<StudentList />} />

        <Route
          path="assignments/:assignmentNumber/details"
          element={
            <>
              <AssignmentDetails />
            </>
          }
        />

        <Route index element={<Login />} />




*/
