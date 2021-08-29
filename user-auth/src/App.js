import React,{useState,useEffect} from 'react'
import NavBar from './components/NavBar';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const handleToggle =()=>{
    setIsLoggedIn(!isLoggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
        handleToggle()
    }
  },[])

  return (
    <div className="App">
      <NavBar 
          isLoggedIn={isLoggedIn} 
          handleToggle={handleToggle}
      />
    </div>
  );
}

export default App;
