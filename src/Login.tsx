import {useState} from 'react';
import Button from './Button';
import {string, number} from 'yup';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { getLoggedInData } from './Home';
import {form} from 'react-hook-form';
import {useLoginForm} from './Hooks';



function Login() {


  

  const submitFunction=(event)=>{
     console.log('this is handleChange generated data', values)
   }
 

  const {values, handleInputChange, handleFormSubmit, handleBlur, touched, credentialsError, valuesError} = useLoginForm({
    email: '',
    password: ''
  }, submitFunction ); 


 /*  let [valuesError, setvaluesError]= useState(false);



  const navigate = useNavigate();

  let [credentialsError, setCredentialsError]= useState('');

  let loggedIn = '';



    const handleSubmit =(event)=>{
    event.preventDefault();

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


     /* try{ 
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


  } */

  return (
    <form onSubmit={handleFormSubmit}>
    <div className="ml-96 mt-48">
    <span className='text-xm text-red-400'> {credentialsError}  </span>
    <h1 className="font-bold text-3xl mb-5"> Log into CodeYogi</h1>
    <div className="flex flex-col">
      <div className="flex space-x-2 mb-3"> 

    <lable htmlFor="email"> Email </lable>
    <input onBlur={handleBlur} touched={touched} type="text" name="email" value={values.email} autoComplete="email" onChange={handleInputChange} required className="border border-strong" placeholder="  your email"/>
    {touched.email && valuesError && <span className='text-xm text-red-400'> {valuesError} </span>}
      </div>
      

      <div className="flex space-x-2 mb-5"> 
      <span> Password </span>
      <lable htmlFor="password" className="sr-only"> Password </lable>
      <input id="loginpassword" type="password" name="password" value={values.password} autoComplete="password" onChange={handleInputChange} required className="border border-strong" placeholder="  your code"/>
      <span className='text-xm text-red-400'> {valuesError} </span>
      </div>
      <Button type="submit"> LogIn </Button>
      <Button type="button"> Register </Button>
    </div>
</div> 
</form>
  );
}


export default Login;