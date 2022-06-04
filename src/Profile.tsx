import { useState, createContext, memo } from "react";
import Button from "./Button";
import { Form, Formik } from "formik";
import { object, string, number, toString } from "yup";
import Input from "./Input";
import { putProfileData } from "./Api";
import AlertContext from "./AlertContext";
import { useContext } from "react";

function Profile() {
  const validationSchema = object().shape({
    email: string().email().required(),
    "passout-year": number()
      .test(val => val.toString().length === 4)
      .max(new Date().getFullYear())
      .required()
  });

  //api calling area

  const { showAlerts } = useContext(AlertContext);

  const onSubmit = event => {
    // putProfileData();
    showAlerts("done done done!", "error", 8);
  };

  const initialValues = {
    email: "a@b.com",
    "passout-year": "2001"
  };

  /* useState Declaration Field

  const [email, setEmail]= useState('');
  let [emailError, setEmailError]= useState(false)

  const [passoutYear, setPassoutYear]= useState('');
  let [passoutYearError, setpassoutYearError]= useState(false)

  
    //Handle Input Change Field

  const handleEmailChange = (event)=>{
    setEmail(event.target.value);
  }


  const handlePassoutYearChange = (event)=>{
    setPassoutYear(event.target.value);
  }

  const submitForm =()=>{
   

     Input Validation field
   
    const emailValidator= string().email().required(); 
    const emailValid = emailValidator.isValidSync(email);

   const passoutYearValidator= number().test(val => val.toString().length === 4 ).max(new Date().getFullYear())
    
   const passoutYearValid = passoutYearValidator.isValidSync(passoutYear);

    
   //tertiary operations field

    emailError = emailValid ? "email submitted" : "email is not valid";
    console.log(emailError);
    setEmailError(emailError);

   passoutYearError = passoutYearValid ? " Passout year submitted" : "Pass out year is not valid";
    console.log(passoutYearError);
    setpassoutYearError(passoutYearError); 

  }

  */

  return (
    <>
      <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
        <Form>
          <div className="grid grid-row-3 divide-x rounded-lg bg-yellow-400 m-11 h-full w-full">
            <div className="text-xl m-6 font-semibold">
              <h2> Personal Details</h2>
            </div>
            <div className="">
              <div className="flex space-x-60 text-xl m-6 font-semibold">
                <p className=""> First Name* </p>
                <input className="rounded-md w-96 h-9 mr-13" />
              </div>

              <div className="flex space-x-44 text-xl m-6 font-semibold">
                <div>
                  <p className=""> Last Name </p>
                  <p className="text-xs bg-red"> (skip only if not not in official docs). </p>
                </div>
                <input className="rounded-md w-96 h-9 mr-13" />
              </div>

              <div className="flex space-x-56 text-xl m-6 font-semibold">
                <p className=""> Email Address* </p>
                <div className="flex flex-col">
                  <Input id="email" name="email" type="email" autoComplete="email" required />

                  <span className="text-red-400 font-normal text-sm"> </span>
                </div>
              </div>

              <div className="flex space-x-56 text-xl m-6 font-semibold">
                <p className=""> Institute Name* </p>
                <input type="text" className="rounded-md w-96 h-9 mr-13" />
              </div>

              <div className="flex flex-col space-x-56 text-xl m-6 font-semibold">
                <p className=""> Year of PassOut* </p>

                <Input
                  id="passout-year"
                  name="passout-year"
                  type="number"
                  autoComplete="passout-year"
                />

                <span className="text-red-400 text-sm font-normal"> </span>
              </div>

              <div className="flex space-x-56 text-xl m-6 font-semibold">
                <p className=""> Mobile Number* </p>
                <input type="text" className="rounded-md w-96 h-9 mr-13" />
              </div>

              <div className="flex space-x-60 text-xl m-6 font-semibold">
                <p className=""> Date Of Birth* </p>
                <input type="text" className="rounded-md w-96 h-9 mr-13" />
              </div>

              <div className="flex space-x-56 text-xl m-6 font-semibold">
                <p className=""> Device you have </p>
                <input type="text" className="rounded-md w-96 h-9 mr-13" />
              </div>

              <div className="flex space-x-56 text-xl m-6 font-semibold">
                <p className=""> Institute roll no. </p>
                <input type="text" className="rounded-md w-96 h-9 mr-13" />
              </div>

              <div className="flex space-x-56 text-xl m-6 font-semibold">
                <p className=""> Branch (College) </p>
                <input type="text" className="rounded-md w-96 h-9 mr-13" />
              </div>
            </div>

            <div className="m-4">
              <Button onSubmit={onSubmit} type="submit" theme="submit">
                {" "}
                Update Profile{" "}
              </Button>
            </div>
          </div>
        </Form>
      </Formik>

      <button className="bg-green-200" onClick={() => showAlerts("this is warning", "warning", 5)}>
        {"click  me"}
      </button>
    </>
  );
}

export default memo(Profile);
