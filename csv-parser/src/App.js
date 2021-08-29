import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React,{useState} from 'react'
import Login from './login';


function App() {
  const [show,setShow] = useState(false)

  return (
    <div className="App">
     <button onClick={()=>{setShow(!show)}}>Login Page</button>
     {show && <Login />}
    </div>
  );
}

export default App;
