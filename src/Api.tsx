import axios from "axios";
import { lecturesType } from "./models/lecturesType";

type UserResponse = { results: user[] };

const CODEYOGI_BASE_URL = "https://api.codeyogi.io/";
const RANDOMUSER_BASE_URL = "https://randomuser.me/";

export const getLectureList = async () => {
  const response = await axios.get<lecturesType[]>(
    CODEYOGI_BASE_URL + "batches/1/sessions",
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const getStudentList = async () => {
  const response = await axios.get<UserResponse>(
    RANDOMUSER_BASE_URL + `api/?results=5`
  );

  return response.data.results;
};

/* this is restricted area

export const getQuizList = () => {
  const responsePromise = axios.get(
    `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`
  );

  return responsePromise.catch(handleError).then((response) => {
    const quizData = response.data.results;
    putCachedData("users", quizData);
    return quizData;
  });
};


export const getAssignmentList = () => {
  const token = axios.get(CODEYOGI_BASE_URL + `batches/1/assignments`, {
    withCredentials: true,
  });

  return token.catch(handleError).then((response) => {
    const assignmentData = response.data;
    putCachedData("assignments", assignmentData);
    return assignmentData;
  });
};

export const getAssignmentDetails = async (data) => {
  try {
    const response = await axios.get(
      CODEYOGI_BASE_URL + `assignments/${data.assignmentNumber}`,
      {
        withCredentials: true,
      }
    );

    const AssignmentDetailsData = response.data;
    putCachedData("assignment_details", AssignmentDetailsData);
    return AssignmentDetailsData;
  } catch (e) {
    handleError(e);
  }
};

/* export const putAssignmentLink = (data)=>{
      const token= axios.get(`https://api.codeyogi.io/assignment/${data.assignmentNumber}/submit`, {
        withCredentials: true,
      });
  
      return token.then((response)=>{
        const AssignmentLinkData= response.data;
        localStorage.setItem('assignment_details', JSON.stringify(AssignmentDetailsData));
        return AssignmentDetailsData;
      });
    } */

/*

export const putAssignmentSubmissionLink = (
  assignmentNumber,
  submissionLink
) => {
  axios.put(
    `https://api.codeyogi.io/assignment/${assignmentNumber}/submit`,
    { submissionLink: submissionLink },
    { withCredentials: true }
  );
};

// POST PROFILE DATA..

export const putProfileData = () => {
  axios.put(`https://api.codeyogi.io/me`, { withCredentials: true });
};

// just for example purpose how to call more than two apis and execute them simultaneouly.

export const getData = () => {
  const assignmentsPromise = axios.get(
    CODEYOGI_BASE_URL + `batches/1/assignments`,
    {
      withCredentials: true,
    }
  );

  const lecturesPromise = axios.get(CODEYOGI_BASE_URL + `batches/1/sessions`, {
    withCredentials: true,
  });

  const combinedPromise = Promise.all([assignmentsPromise, lecturesPromise]);
  combinedPromise.then((assignmentsResponse, lecturesResponse) => {
    console.log("assignment ka response aya hai", assignmentsResponse);
    console.log("lectures ka response aya hai", lecturesResponse);
  });
};

const putCachedData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getCachedData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const handleError = (e) => {
  if (e === "ERR_TIMED_OUT") console.log("error in your program", e);
};

*/
