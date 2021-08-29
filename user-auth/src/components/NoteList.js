import React from 'react'
import NoteItem from './NoteItem'

const ListNotes =(props)=>{
    const {data,removeItem} = props

    return (
        <div>
            <h3>My Notes</h3>
            {
                data.length === 0 ? (
                        <>
                            <h3>No Notes found add your first note</h3>
                        </>) : (
                            <>
                                {
                                    data.map(d=>{
                                        return <NoteItem 
                                                    key={d._id}
                                                    {...d} 
                                                    removeItem={removeItem}
                                                />
                                    })
                                }
                            </>
                        )
            }
        </div>
    )
}
export default ListNotes