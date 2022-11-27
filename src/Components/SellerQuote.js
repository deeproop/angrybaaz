import React from "react";

export default function SellerQuote () {
    return (
    <div>
        <div style={{marginLeft: "7%"}}>
            <h5>Seller Quote</h5>
            <p>Select Your Prefered Print Type</p>
        </div>
        <div style={{display: "flex", marginLeft: "7%"}}>
            <div classclassName="card" style={{display: "flex", width: "21rem"}}>
                <img src="https://www.pngkit.com/png/detail/38-388868_blank-t-shirt-transparent-png-pictures-plain-white.png" 
                className="card-img-top" style={{width: "10rem", height: "10rem", marginRight: "2rem"}} alt="alt image" />
                <div className="card-body" style= {{marginTop: "4rem"}} >
                    <p className="card-title">Vinayal Print</p>
                    <p className="card-text">Rate: Rs. 300/tshirt</p>
                </div>
            </div>
            <div classclassName="card" style={{display: "flex", width: "21rem", marginLeft: "2rem"}}>
                <img src="https://www.pngkit.com/png/detail/38-388868_blank-t-shirt-transparent-png-pictures-plain-white.png" 
                className="card-img-top" style={{width: "10rem", height: "10rem", marginRight: "2rem"}} alt="alt image" />
                <div className="card-body" style= {{marginTop: "4rem"}} >
                    <p className="card-title">Vinayal Print</p>
                    <p className="card-text">Rate: Rs. 300/tshirt</p>
                </div>
            </div>
            <div classclassName="card" style={{display: "flex", width: "21rem", marginLeft: "2rem"}}>
                <img src="https://www.pngkit.com/png/detail/38-388868_blank-t-shirt-transparent-png-pictures-plain-white.png" 
                className="card-img-top" style={{width: "10rem", height: "10rem", marginRight: "2rem"}} alt="alt image" />
                <div className="card-body" style= {{marginTop: "4rem"}} >
                    <p className="card-title">Vinayal Print</p>
                    <p className="card-text">Rate: Rs. 300/tshirt</p>
                </div>
            </div>
        </div>
    </div>
    );
}