import React,{useState} from 'react'
import axios from 'axios'
import validation from '../validation'

const Register =(props)=>{
    const [values,setValues] = useState({
        username:'',
        email:'',
        password:''
    })

    const [errors,setErrors] = useState({})
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const check=validation(values)
        setErrors(check)
        if(!(check.email || check.password)){
            axios.post("http://dct-user-auth.herokuapp.com/users/register",values)
                    .then((response)=>{
                        const result = response.data
                        if(result.hasOwnProperty('errors')){
                           alert(result.message)
                        }else {
                            props.history.push('/login')
                        }
                    })
                    .catch((err)=>{
                        alert(err.message)
                    })
        }
    }

    const resetForm=()=>{
        setValues({
            username:'',
            email:'',
            password:''
        })
    }

    const handleChange =(e)=>{
       setValues({
           ...values,
           [e.target.name]:e.target.value
       })
    }

    return (
        <div className="register">
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter the username"
                    value={values.username}
                    onChange={handleChange}
                    name="username"
                />
                <br /><br />
                <input 
                    type="text"
                    placeholder="Enter the email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                />
                {
                    errors.email ? (
                        <p style={{color:"red"}}>{errors.email}</p>) :(
                        <div>
                            <br />
                        </div>)
                }
                <input 
                    type="text"
                    placeholder="Enter the password"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                />
                {
                    errors.password ? (
                        <p style={{color:"red"}}>{errors.password}</p>) :(
                        <div>
                            <br />
                        </div>)
                }
                <input 
                    type="submit"
                    value="register"
                />
            </form> <br />
            <button onClick={resetForm}>Cancel</button>
        </div>
    )
}
export default Register