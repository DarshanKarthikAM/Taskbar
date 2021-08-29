import React,{useState} from 'react'
import validation from './validation'
import Home from './home'

const Login=(props)=>{
    const [formdata,setFormdata] = useState({username:'',password:''})
    const [errors,setErrors] = useState({})

    const handleChange=(e)=>{
        const result ={...formdata,[e.target.name]:e.target.value}
        setFormdata(result)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(validation(formdata))
    }

    return(
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="enter the username(mail Id)" 
                    value={formdata.username} 
                    onChange={handleChange}
                    name="username"
                /><br />
                <input 
                    type="password" 
                    placeholder="enter the password" 
                    value={formdata.password}
                    onChange={handleChange}
                    name="password"
                /><br />
                {errors.password && <p>{errors.password}</p>}
                <input type="submit" />
            </form>
            <Home title="Home page" />
        </div>
    )
}
export default Login