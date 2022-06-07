import { useState, FC } from "react";
import Button from "./Button";
import { string } from "yup";
import { useParams } from "react-router-dom";
import { putAssignmentSubmissionLink } from "./Api";
import { assignmentsType } from "./models/assignmentsType";

type assignmentsProps = { assignment: assignmentsType };

const AssignmentSubmit: FC<assignmentsProps> = () => {
  const [PopUp, showPopUp] = useState(false);
  const [submissionLink, setSubmissionLink] = useState("");
  let [submissionLinkError, setsubmissionLinkError] = useState<unknown>(false);

  const data = useParams();

  const submitAssignment = () => {
    const submissionLinkValidator = string().url().required();

    try {
      submissionLinkValidator.validateSync(submissionLink);
      const message = "assignment " + data.assignmentNumber + " has been submitted.";
      setsubmissionLinkError(message);
    } catch (e: boolean) {
      setsubmissionLinkError(e.message);
      return [];
    }

    putAssignmentSubmissionLink(data.assignmentNumber, submissionLink);
  };

  const handleInputChange = (event: React.SyntheticEvent<EventTarget>): void => {
    setSubmissionLink((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <div className="m-6">
        <Button onClick={() => showPopUp(true)}> Submit </Button>

        {PopUp && (
          <div className="fixed p-10 bg-indigo-500 rounded-md top-20 left-30">
            <button className="inset-x-8 inset-y-8" onClick={() => showPopUp(false)}></button>

            <div className="flex flex-col">
              <input type="text" value={submissionLink} onChange={handleInputChange} />
              <Button
                theme="submit"
                onClick={() => {
                  showPopUp(true);
                  submitAssignment();
                }}
              >
                Save!
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignmentSubmit;

//   <p className="text-red-400 font-normal text-sm"> {submissionLinkError} </p>
