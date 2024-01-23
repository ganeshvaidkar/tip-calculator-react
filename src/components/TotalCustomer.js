import React, { useState } from "react";
export default function TotalCustomer(props){

    console.log(props.data)
    const [status,setStatus] = useState(false)
    const ar = props.data;
        let customer = 0;
        let tip = 0;
        for(let i=0;i<ar.length;i++){
            customer += 1;
            tip += ar[i].percentage
        }
        return(
            <div >
                <div className="div-cal-btn">
                    <button className="cal-btn" onClick={()=>setStatus(!status)}>Calculate Tip & Customer</button>
                </div>
                {
                    status?<table style={{border:"2px solid pink"} }>
                    <thead className="table-heading" >
                        <tr >
                            <th >Total Customer</th>
                            <th>Tip</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-data">{customer}</td>
                            <td className="table-data">{tip}</td>
                        </tr>
                    </tbody>
                </table>:null
                }
                
                
            </div>
        )
}