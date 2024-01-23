import { useState } from "react"
import CustomerList from "./CustomerList"
import TotalCustomer from "./TotalCustomer"
import "../App.css"

export default function Input() {
    const [customerAmt, setCustomerAmt] = useState("")
    const [customerName, setCustomerName] = useState("")
    const [percent, setPercent] = useState("")
    const [arr, setArr] = useState([])
    const addCustomerData = () => {
        if(customerAmt.length == ""){
            alert("Please fill all the Details")
        }
        else if(customerName.length == ""){
            alert("Please fill all the Details")
        }
        else if(percent.length == ""){
            alert("Please fill all the Details")
        }
        else{
            const arrObj = {
                customerAmt: customerAmt, customerName: customerName, percent: percent,
                percentage: (Number(customerAmt) * Number(percent) / Number(100))
            }
            setArr([...arr, arrObj])
            setCustomerAmt("")
            setCustomerName("")
        }
        
    }
    // const showTotal = () =>{
    //     <TotalCustomer data={arr} />
    // }
    return (
        <div className="container">
            <div className="sub">
                <div className="header">
                    <h1 className="header-heading">Tip Calculator</h1> <br></br>
                </div>
                <div className="cal">
                    <div className="amt-inpt">
                        <p style={{margin:"0px"}}>Enter Your Bill Amount</p>
                    <input style={{width:"90%", margin:"20px 0px 10px 0px"}} type="number" placeholder="1000" value={customerAmt} onChange={(event) => setCustomerAmt(event.target.value)} />
                    <hr style={{width:"100%"}}></hr> 
                    </div>
                    <div style={{width:"100%"}}>
                    How Was The Service
                    <select className="select" onChange={(event) => setPercent(event.target.value)}>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                    </select>
                    <input value={customerName} type="text" placeholder="Customer Name" onChange={(event) => setCustomerName(event.target.value)} />
                    <button className="add-btn" onClick={addCustomerData}>Add Customer</button>
                    </div>
                    
                </div>
                <CustomerList data={arr} />
                <TotalCustomer data={arr}/>
                <div className="footer">
                    <h4 className="footer-head">2024 Tip Calculator</h4>
                </div>
            </div>
        </div>

    )
}