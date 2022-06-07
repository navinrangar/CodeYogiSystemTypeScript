import { FC } from "react";
//import { DateTime } from "luxon";
import MDEditor from "@uiw/react-md-editor";
import { lecturesType } from "./models/lecturesType";

type lecturesProps = { lecturesType: lecturesType };

const Lectures: FC<lecturesProps> = ({ lecturesType }) => {
  return <div>topic: {lecturesType.topic}</div>;
};

export default Lectures;
