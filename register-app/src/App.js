import React,{useState} from 'react'


const App =(props)=>{
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [value,setValue] = useState('')
    const [phoneNo,setPhoneNo]=useState([{id:"",mobile:""}])

    
    const addfield=()=>{
        setPhoneNo([...phoneNo,{id:"",mobile:""}])
    }

    const removefield=(index)=>{
        const value = [...phoneNo]
        value.splice(index,1)
        setPhoneNo(value)
    }

    const handleChange=(e,index)=>{
        const value =[...phoneNo]
        value[index].id=index
        value[index].mobile = e.target.value
        setPhoneNo(value)
    }

    const handleForm=(e)=>{
        if(e.target.name === 'name'){
            setName(e.target.value)
        } else if(e.target.name === 'age'){
            setAge(e.target.value)
        } else if(e.target.name === 'gender'){
            setValue(e.target.value)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(phoneNo)
        console.log(value)
        setAge('')
        setName('')
        setValue('')
        setPhoneNo([{id:'',mobile:''}])
    }

    return (
        <div>
            <h2>User Details</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                        value={name} 
                        onChange={handleForm} 
                        name="name" 
                        placeholder="enter the name" 
                /><br /><br />
                <input type="text" 
                        value={age} 
                        onChange={handleForm} 
                        name="age" 
                        placeholder="enter the age" 
                /><br /><br />
                {
                 phoneNo.map((a,i)=>{
                        return (
                        <div  key={i}>
                            <input
                                type="text" 
                                value={a.mobile}
                                placeholder="enter the phone number"
                                onChange={e=>handleChange(e,i)}
                            /> 
                            <input 
                                type="button"
                                value="-"
                                onClick={()=>removefield(i)}
                            />
                            <input type="button" onClick={()=>addfield()} value="+" />
                            <br /><br />
                        </div>)
                    })
                }
                <select name="gender" value={value} onChange={handleForm}>
                    <option value=''>select gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select><br /><br />
                <input type="submit" /><br /> <br />
            </form>
        </div>
    )
}
export default App