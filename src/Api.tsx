import axios from "axios";
import { lecturesType } from "./models/lecturesType";
import { usersType } from "./models/usersType";
import { assignmentsType } from "./models/assignmentsType";
import { assignmentDetailsType } from "./models/assignmentDetailsType";
import { quizQuestionsType } from "./models/quizQuestionsType";

type UserResponse = { results: usersType[] };

const CODEYOGI_BASE_URL = "https://api.codeyogi.io/";
const RANDOMUSER_BASE_URL = "https://randomuser.me/";

export const getLectureList = async () => {
  const response = await axios.get<lecturesType[]>(CODEYOGI_BASE_URL + "batches/1/sessions", {
    withCredentials: true
  });

  return response.data;
};

//studentList API area

export const getStudentList = async () => {
  const response = await axios.get<UserResponse>(RANDOMUSER_BASE_URL + `api/?results=5`);

  return response.data.results;
};

// Assignments List API area

export const getAssignmentList = async () => {
  const response = await axios.get<assignmentsType>(CODEYOGI_BASE_URL + `batches/1/assignments`, {
    withCredentials: true
  });

  return response.data;
};

// quiz questions API

type QuizQuestionsResponse = { results: quizQuestionsType[] };

export const getQuizList = async () => {
  const response = await axios.get<QuizQuestionsResponse>(
    `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`
  );

  return response.data.results;
};

//AssignmentDetails API area

export const getAssignmentDetails = (data: number) => {
  try {
    const response = axios.get<assignmentDetailsType>(
      CODEYOGI_BASE_URL + `assignments/${data.assignmentNumber}`,
      {
        withCredentials: true
      }
    );

    const AssignmentDetailsData = response.data;
    putCachedData("assignment_details", AssignmentDetailsData);
    return AssignmentDetailsData;
  } catch (e) {
    handleError(e);
  }
};

// putassignmentLink area

export const putAssignmentSubmissionLink = (assignmentNumber: number, submissionLink: string) => {
  axios.put(
    CODEYOGI_BASE_URL + `assignment/${assignmentNumber}/submit`,
    { submissionLink: submissionLink },
    { withCredentials: true }
  );
};

// POST PROFILE DATA..

export const putProfileData = () => {
  axios.put(CODEYOGI_BASE_URL + `me`, { withCredentials: true });
};

const putCachedData = (key: string, data: unknown[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getCachedData = (key: string) => {
  return JSON.parse(localStorage.getItem(key));
};

const handleError = (e: unknown) => {
  if (e === "ERR_TIMED_OUT") console.log("error in your program", e);
};

/* this is restricted area


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

*/
