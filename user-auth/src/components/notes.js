import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AddNotes from './AddNote'
import ListNotes from './NoteList'

const Notes =(props)=>{

    const [data,setData] = useState([])


    useEffect(()=>{
        axios.get("http://dct-user-auth.herokuapp.com/api/notes",{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
            .then((response)=>{
                const result = response.data
                console.log(result)
                setData(result)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

    const addItem =(formData)=>{
        setData([...data,formData])
    }

    const removeItem=(id)=>{
            const result = data.filter(d=>{
                return d._id !== id
            })
            setData(result)
    }

    return (
        <div className="notes">
            {localStorage.getItem('token') && <div className="box"> 
                                                <ListNotes
                                                    data={data}
                                                    removeItem={removeItem}
                                                />
                                                <AddNotes 
                                                    addItem={addItem}
                                                />
                                            </div>
            }
        </div>
    )
}
export default Notes