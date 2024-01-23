import React from "react"
export default function CustomerList(props){
    // console.log(props.data)
    return(
        <div>
            <table style={{margin:"20px 0px 0px 0px"}}>
                <thead>
                    <tr>
                    <h2 className="table-heading">Customer List</h2>
                    <hr></hr>
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.map((val,ind)=>
                    <tr key={ind}>
                        <td><ol style={{margin:" 0px 0px 10px 0px"}}>{val.customerName} offering a tip of {val.percentage}</ol></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        
    )
}