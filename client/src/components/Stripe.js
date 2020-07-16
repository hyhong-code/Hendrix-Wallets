import React from "react";
import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

export default class Stripe extends React.Component {
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

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}
