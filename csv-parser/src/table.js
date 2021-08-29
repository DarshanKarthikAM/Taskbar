import React from 'react'

const Table =(props)=>{
    const {colDefs,tdata} = props
    

    return (
        <div className="col-md-6">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        {
                            colDefs.map((data,i)=>{
                                return <th key={i}>{data}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                        {
                            tdata.map(data=>{
                                return (
                                    <tr key={data["User Email"]}>
                                    <td>{data["Name (Original Name)"]}</td>
                                    <td>{data["User Email"]}</td>
                                    <td>{data["Total Duration (Minutes)"]}</td>
                                    <td>{data.Guest}</td>
                                    </tr>
                                )
                            })
                        }
                    
                </tbody>
            </table>
        </div>
    )
}
export default Table