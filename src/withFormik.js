import {useField} from 'Formik';


const withFormik=(InComp: unknown)=>{
function ({name, ...rest, }){
        const[field, meta] = useField(name);

        return <InComp name={name} {...rest} {...meta} {...field}/>
    }

}

export default withFormik;