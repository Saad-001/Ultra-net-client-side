import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCard from './SimpleCard';

const stripePromise = loadStripe('pk_test_51IhP7pLUc3SyMxHb5lPOxLtvORRZWXS5j9nFhbSnfZaW6hBZSBkOAV9r1CHeN2GzYM0lv85KoEY9J9uLVeARtgmN00JUYmFyam');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
           <SimpleCard></SimpleCard>
        </Elements>
    );
};

export default ProcessPayment;