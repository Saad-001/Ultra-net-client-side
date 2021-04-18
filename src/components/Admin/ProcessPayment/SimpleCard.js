import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const SimpleCard = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState('');

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message)
            setPaymentSuccess("")
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(paymentMethod.id)
            setPaymentError("")
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className="mt-4 p-1 btn-primary btn-danger fw-bold" type="submit" disabled={!stripe}>
                    Pay now
                </button>
            </form>
            {
                paymentError && <p className="mt-3 text-danger fs-5">{paymentError}</p>
            }
            {
                paymentSuccess && <p className="mt-3 text-success fs-5">Your payment is successful</p>
            }
        </div>

    );
};

export default SimpleCard;