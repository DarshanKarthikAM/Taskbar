import validator from 'validator'

const validation =(values)=>{
    const errors ={}

    if(!validator.isEmail(values.email)){
        errors.email = "email is invaid"
    }

    if(values.password.length < 7){
        errors.password = "Password must be greater than 7 characters"
    }

    return errors
}
export default validation