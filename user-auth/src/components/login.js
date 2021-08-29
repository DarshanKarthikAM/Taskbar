import React,{useState} from 'react'
import axios from 'axios'

const Login=(props)=>{
    const [values,setValues] = useState({
        email:'',
        password:''
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://dct-user-auth.herokuapp.com/users/login",values)
        .then((response)=>{
            const result =response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            } else {
                alert("user sucessfully logged in")
                localStorage.setItem('token',result.token)
                props.history.push('/')
                props.handleToggle()
            }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    const handleValue=(e)=>{
        if(e.target.name === "email"){
            setValues({...values,[e.target.name]:e.target.value})
        } else if(e.target.name === "password"){
            setValues({...values,[e.target.name]:e.target.value})
        }
    }

    return (
        <div>
            <h3>Login Page</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={values.email}
                    onChange={handleValue}
                    placeholder="enter the email"
                    name="email"
                /><br />
                <input 
                    type="password"
                    value={values.password}
                    onChange={handleValue}
                    placeholder="enter the password"
                    name="password"
                /><br /><br />
                <input 
                    type="submit"
                    value="login"
                />
            </form>
        </div>
    )
}
export default Login