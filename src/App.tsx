import { useState, useEffect } from "react";
import { getLectureList } from "./Api";
import { lecturesType } from "./models/lecturesType";
import Lectures from "./Lectures";
import Button from "./Button";

const App = () => {
  const [lectures, setLectures] = useState<lecturesType[]>([]);

  useEffect(() => {
    getLectureList().then(data => {
      setLectures(data);
    });
  }, []);

  return (
    <div>
      <Button> Hey There </Button>
      {lectures.map(l => (
        <Lectures lecturesType={l} />
      ))}
    </div>
  );
};


export default App;
