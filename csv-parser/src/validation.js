import React from 'react'

const validation=(formData)=>{
    const errors ={}
    const password = formData.password
    const specialcharacters ='@#$%&*'
    if(password.length <8){
        errors.password = "Password length must be 8 characters"
    } 
    return errors

}
export default validation