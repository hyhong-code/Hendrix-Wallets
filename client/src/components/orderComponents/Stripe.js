import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";

import Logo from "../../assets/logo.png";
import { payForOrder } from "../../actions/orderActions";

class Stripe extends React.Component {
  onToken = async (token) => {
    this.props.payForOrder(token, this.props.order.id);
  };

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        currency="USD"
        name="HENDRIX WALLETS"
        description="PERN E-COMMERCE PROJECT"
        image={Logo}
        amount={parseInt(this.props.order.final_price)}
        email={this.props.order.email}
        closed={this.onClosed}
        locale="auto"
      />
    );
  }
}

export default connect(null, { payForOrder })(Stripe);
