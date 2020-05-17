import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_KyJQrDYlXwrxDbq5PKex8ZRH000IWzRg9a';

    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }

    return (
        <StripeCheckout
            label='pay now'
            name='FORTE Clothing Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;