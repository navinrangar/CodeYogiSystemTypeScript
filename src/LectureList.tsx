import React, { useState, useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import Lectures from "./Lectures";
import GoBack from "./GoBack";
import { getLectureList, getCachedData } from "./Api";
import { lecturesType } from "./models/lecturesType";

function LectureList() {
  const token = getLectureList();
  let cachedLectures = [];

  try {
    cachedLectures = getCachedData("lectures") || [];
  } catch (e) {
    console.log(e);
  }

  const [lectures, setLectures] = useState<lecturesType[]>(cachedLectures);
  let [error, setError] = useState("");

  useEffect(() => {
    token
      .then(lectureData => {
        setLectures(lectureData);
      })
      .catch(e => {
        console.error("lecture list couldn't be fetched");
        setError(e);
      });
  }, []);

  return (
    <div className="flex">
      <div className="h-full">
        <LeftSideBar />
      </div>

      <div className="space-y-2 px-8 py-4 bg-white flex flex-col items-stretch p-2 ">
        <div className="flex flex-row justify-between mr-96">
          <h2 className="text-black text-2xl font-bold"> Lectures </h2>

          <GoBack> </GoBack>
        </div>

        <div className="w-screen h-full shadow-lg m-8 mt-3">
          {error}

          {lectures.map(l => (
            <Lectures lecture={l} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LectureList;
