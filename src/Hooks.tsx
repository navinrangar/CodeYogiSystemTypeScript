import {useState} from 'react';
import Login from './Login';
import {useNavigate} from 'react-router-dom';
import { getLoggedInData } from './Home';
import {form} from 'react-hook-form';
import {string, number} from 'yup';

export const useLoginForm = (initialValues, submitFunction ) =>{
  

    const [values, setvalues] = useState(initialValues);
    let [valuesError, setvaluesError]= useState(false);
    let [credentialsError, setCredentialsError]= useState('');

    const [touched, setTouched]= useState({})

    const handleInputChange= (event) =>{
        setvalues({...values, [event.target.name]: event.target.value})
    }


    const handleBlur= (event) =>{
      setTouched({...touched, [event.target.name]: 'true'})
  }



    const navigate = useNavigate();
  
  
    let loggedIn = '';
  

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        //validation for form

        
        if(values.email=== 'a@b.com' && values.password === 'navin@123') {
            loggedIn = true;
            getLoggedInData(loggedIn);
            console.log('data', values);
            navigate(`/home`)
          } else {
              setCredentialsError('Looks like you have entered wrong credentials');
            }
         
      
          //Input Validation field
         
          const emailValidator= string().email().required(); 
          const passwordValidator= string().required().min(8, "too short password min. 8").max(15, "too long password max. 15");
      
        
      
           
         /* we can do this alternatively by this tertiary operations method
      
         const emailValidator= string().email().required(); 
         emailValidator.isValidSync(email);
         emailError = emailValid ? "email submitted" : "email is not valid";
         console.log(emailError);
         setEmailError(emailError); */
      
      
            try{ 
           emailValidator.validateSync(values.email);
           } catch(e){
             console.log(e.message)
          setvaluesError(e.message);
          }
         
          try{
            passwordValidator.validateSync(values.password)
          } catch (e) {
            setvaluesError(e.message);
            console.log(e.message);
            return;
          }

          
        submitFunction(event);
    }

    return {values, handleInputChange, handleFormSubmit, handleBlur, touched, credentialsError, valuesError};
}