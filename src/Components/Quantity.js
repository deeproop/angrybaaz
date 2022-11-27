import React from "react";

export default function Quantity () {
    return (
        <div style={{marginLeft: "7%", marginTop: "5%", marginBottom: "5%"}}>
            <div style={{display: "flex"}}>
                <h5 style={{marginTop:"10px",marginRight: "2rem"}}>Quantity:</h5>
                
                <button style={{height:"50px",width:"50px",border: "none", marginRight: "10px"}}>-</button>
                <button style={{width:"50px", border: "none", marginRight: "10px"}}>50</button>
                <button style={{width:"50px", border: "none"}}>+</button>
                
            </div>
        </div>
    );
}