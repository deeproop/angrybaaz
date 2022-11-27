import React from "react";
import Menu from "./Components/Menu";
import OrderSummary from "./Components/OrderSummary";
import SellerQuote from "./Components/SellerQuote";
import 'bootstrap/dist/css/bootstrap.min.css';
import Quantity from "./Components/Quantity";

function App() {
  return (
    <div>
    <Menu />
    <OrderSummary />
    <SellerQuote />
    <Quantity />
    </div>
  );
}

export default App;