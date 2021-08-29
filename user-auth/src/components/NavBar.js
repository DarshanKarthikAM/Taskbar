import React from 'react'
import {Link,Route,withRouter} from 'react-router-dom'
import Home from './home'
import Register from './register'
import Login from './login'
import Account from './account'
import Notes from './notes'

const NavBar =(props)=>{
    const {isLoggedIn,handleToggle} = props

    return(
        <div className="nav"> 
            <p><Link to="/" >Home</Link></p>
            {
                isLoggedIn ? (
                    <>
                        <p><Link to="/account" >Account</Link></p>
                        <p><Link to="/notes">My Notes</Link></p>
                        <p><Link onClick={()=>{
                            props.handleToggle()
                            localStorage.removeItem('token')
                            // props.history.push("/")
                        }} to="/" >LogOut</Link></p>
                    </>

                ):(
                    <>
                    <p><Link to="/register" >Register</Link></p>
                    <p><Link to="/login" >Login</Link></p>
                    </>
                )
            }

            <Route path="/" component={Home} exact ></Route>
            <Route path="/register" component={Register} ></Route>
            <Route path="/login" render={(props)=>{
                return <Login
                            {...props}
                            handleToggle={handleToggle}
                        /> }} 
            />
            <Route path="/account" component={Account} />
            <Route path="/notes" component={Notes} />
        </div>
    )
}
export default withRouter(NavBar)