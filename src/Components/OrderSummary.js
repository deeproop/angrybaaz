import React from "react";
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

export default function OrderSummary () {
    return (    
        <div style={{display: "flex", justifyContent: "space-around", marginTop: "2%"}}>
        <div style={{width: "45%"}}>
        <div>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th scope="col">Order Summary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Store Name</td>
                        <td>Outflank Printers</td>
                    </tr>
                    <tr>   
                        <td>Neck</td>
                        <td>Round Neck</td>
                    </tr>
                    <tr>
                        <td>Fabric:</td>
                        <td>Cotton</td>
                    </tr>
                    <tr>
                        <td>Sleeve</td>
                        <td>Full Sleeve</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td>Cotton</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style={{marginTop: "10%"}}>
            <h5>Available T-shirt Stock</h5>
            <table className="table table-borderless">
                <thead>
                    <tr>
                    <td scope="col">Size:</td>
                    <td scope="col" style={{backgroundColor: "#d6dcdd"}}>S</td>
                    <td scope="col">Max Quantity:</td>
                    <td style={{backgroundColor: "#d6dcdd"}} scope="col">500</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td scope="row">Size:</td>
                    <td style={{backgroundColor: "#d6dcdd"}}>M</td>
                    <td>Max Quantity:</td>
                    <td style={{backgroundColor: "#d6dcdd"}}>400</td>
                    </tr>
                    <tr>
                    <td scope="row">Size:</td>
                    <td style={{backgroundColor: "#d6dcdd"}}>L</td>
                    <td>Max Quantity:</td>
                    <td style={{backgroundColor: "#d6dcdd"}}>300</td>
                    </tr>
                    <tr>
                    <td scope="row">Size:</td>
                    <td style={{backgroundColor: "#d6dcdd"}}>XL</td>
                    <td>Max Quantity:</td>
                    <td style={{backgroundColor: "#d6dcdd"}}>200</td>

                    </tr>
                    <tr>
                    <td scope="row">Size:</td>
                    <td style={{backgroundColor: "#d6dcdd"}}>XXL</td>
                    <td>Max Quantity:</td>
                    <td style={{backgroundColor: "#d6dcdd"}}>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        <div>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                component="img"
                height="360"
                image="https://cdn.shopify.com/s/files/1/0063/9447/8661/products/Reliance-T-Shirt-Orange-Text-on-White_600x.png?v=1573348482"
                alt="green iguana"
                style={{backgroundColor: "#335def"}}
                />
                </CardActionArea>
                </Card>
            </div>
            <div style={{width: "55%", marginTop: "8%", overflowWrap: "break-word", textAlign: "center", marginLeft: "50px"}}>
                <p>Safe & Secure payments with 100% authentic T shirts</p>
            </div>
            <div>
                <div style={{width: "80%", backgroundColor: "#243658", color: "white", padding: "3%"}}>
                    Price Details:
                </div>
                <div style={{width: "80%", padding: "2%"}}>
                    <div style={{display: "flex", justifyContent: "space-between", padding: "2% 2%"}}>
                        <div>Per t-shirt:</div>
                        <div>Rs 300</div>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", padding: "2% 2%"}}>
                        <div>Quantity:</div>
                        <div>50</div>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", padding: "2% 2%"}}>
                        <div>Total Amount:</div>
                        <div>1500</div>
                    </div>
                </div>
                <div style={{width: "80%", backgroundColor: "#4158D0",
                backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                color: "white", padding: "3%", textAlign: "center"}}>
                    Proceed To Pay:
                </div>
                <div style={{ fontSize: "14px",color: "green", padding: "4%"}}>Easy & Secure Payment. 100% Authentic products</div>
            </div>
        </div>
    </div>
  
    );
}