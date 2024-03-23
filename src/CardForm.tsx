import { useStripe, useElements, CardElement, PaymentElement } from '@stripe/react-stripe-js';

const CardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement('card');
    if (cardElement)
      stripe.createToken(cardElement).then((payload) => console.log('[token]', payload));
  };

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <label htmlFor='card'>Card</label>
      <CardElement id='card' />
      <button type='submit'>Pay</button>
    </form>
  );
};

export default CardForm;
