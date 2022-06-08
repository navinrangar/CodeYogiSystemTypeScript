import { FC } from "react";
import { DateTime } from "luxon";
import MDEditor from "@uiw/react-md-editor";
import { lecturesType } from "./models/lecturesType";

type lecturesProps = { lecture: lecturesType };

const Lectures: FC<lecturesProps> = ({ lecture }) => {
  return (
    <div>
      <div className="flex flex-col m-6 rounded-md shadow-lg mb-4 w-full ">
        <div className="flex">
          <h3 className="font-bold text-xl ml-4 mt-2">Lecture #{lecture.id} </h3>
          <span className="m-2"> </span>
          <p className="text-gray-700 font-bold text-xl mt-2">
            (
            {DateTime.fromISO(lecture.created_at)
              .setLocale("fr")
              .toLocaleString(DateTime.DATE_SHORT)}
            )
          </p>
        </div>

        <p className="text-gray-500 ml-4 "> Duration: </p>
        <span className="mb-2"> </span>

        <div>
          <MDEditor.Markdown
            className="markdown !text-black font-bold !bg-white"
            source={lecture.topic}
          />
        </div>

        <a className="font-bold ml-64 mb-4" href={lecture.recording_url} target="_blank">
          Watch/Download Recording
        </a>
      </div>
      ;
    </div>
  );
};

export default Lectures;
