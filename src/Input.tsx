import { useField, validateYupSchema } from 'formik';
import React from 'react'

const Input =({id, type, name, ...rest })=>{

    const [field, meta]= useField(name)
    const {values} = field;

    const {error, touched} = meta;

    return (
        <>
        <label htmlFor="id" className="sr-only"> Password </label>
        <input
        {...field}
        {...values}
        id = {id}
        name={name}
        type={type || 'text'}
        {...rest}

        className="appearance-none rounded-none h-full w-full relative block"
        />
        
        {touched && error && <span className="text-red-400 text-sm"> {error}</span>}
        </>
    )
    
}


export default Input;