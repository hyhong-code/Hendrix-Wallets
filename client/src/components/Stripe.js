import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { withRouter } from "react-router-dom";

import logo from "../assets/logo.png";

class Stripe extends React.Component {
  onToken = async (token) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    console.log(token);
    try {
      const res = await axios.post("/save-stripe-token", { token }, config);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  onClosed = () => {
    console.log("closed");
    this.props.history.push("/refresh");
  };

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        currency="USD"
        name="HENDRIX WALLETS" // the pop-in header title
        description="PERN E-COMMERCE PROJECT" // the pop-in header subtitle
        image={logo}
        amount={parseInt(this.props.finalPrice)}
        email="hong961127@gmail.com"
        closed={this.onClosed}
      />
    );
  }
}

export default withRouter(Stripe);
