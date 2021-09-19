import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { shippingConfirmation } from '../../redux/actions/shippingActions';
import { CartReset } from '../../redux/actions/cartActions';
import { CircularProgress } from '@material-ui/core';

const stripePromise = loadStripe("pk_test_51JQ4PnII8BayBJ3bFpVAttsYF0gZn4eBDDuRYVx59DCPr3XS1rajz0949bB139iyeCT74cli3bC1gCXYfgZC7kzZ00Vm0WbIGJ")

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(173, 66, 245)",
      color: "#333",
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

const CheckoutForm = ({ handleNext, handleBack }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const summary = useSelector(state => state.cart);
  const { cartItems } = summary;
  const [loading, setLoading] = useState(false);

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => (price + item.price * item.qty), 0)
      .toFixed(2);
  };
  const setShipping = useSelector(state => state.shippingData)
  const { shipping } = setShipping;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: `${shipping.firstName} ${shipping.lastName}`,
        phone: shipping.number,
        email: shipping.email,
      },
    });
    setLoading(true);
    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post("https://omar-villatoro.herokuapp.com/api/checkout", {
          id,
          amount: getCartSubTotal() * 100,
          shipping,
        });
        dispatch(shippingConfirmation(data));
        dispatch(CartReset(id));
        // elements.getElement(CardElement).clear(); 
        handleNext();
      } catch (error) {
        console.error(error);
        handleNext();
      }
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div className="text-right relative space-x-2 m-2 mt-6">
        <Button variant="outlined" type="button" onClick={handleBack} >Back</Button>
        <Button type="submit" disabled={!stripe} variant="contained" color="primary">
          {
            loading ? (<CircularProgress />)
              : (<span>Pay Order</span>)
          }
        </Button>
      </div>
    </form>
  )
}

function PaymentForm({ handleBack, handleNext }) {
  return (
    <>
      <Review />
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm handleBack={handleBack} handleNext={handleNext} />
      </Elements>
    </>
  );
}

export default PaymentForm;
