import { FC } from "react";
//import { DateTime } from "luxon";
import MDEditor from "@uiw/react-md-editor";
import { lecturesType } from "./models/lecturesType";

type lecturesProps = { lecture: lecturesType };

const Lectures: FC<lecturesProps> = ({ lecture }) => {
  return <div>topic: {lecture.topic}</div>;
};

export default Lectures;
