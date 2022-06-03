import { useState, useEffect } from "react";
import { getLectureList } from "./Api";
import { lecturesType } from "./models/lecturesType";
import Lectures from "./Lectures";

const App = () => {
  const [lectures, setLectures] = useState<lecturesType[]>([]);

  useEffect(() => {
    getLectureList().then((data) => {
      setLectures(data);
    });
  }, []);

  return;

  {
    lectures.map((l) => <Lectures lecturesType={l} />);
  }
};

export default App;
