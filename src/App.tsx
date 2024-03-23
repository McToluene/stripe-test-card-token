import './App.css';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51Ovk2TBdhOKSnIxcxlvN4OXbrmRXVUDJrYmKabiNqijmoLUf4SGt41O5oJcLAbYECYtRfD373nYh3ERoQ5hHc5AS00jCUfBhEc'
);

function App() {
  const options = {
    // Fully customizable with appearance API.
    appearance: {},
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;
