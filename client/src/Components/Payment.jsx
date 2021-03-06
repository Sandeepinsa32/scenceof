import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

const Payment = (props) => {
	const onSuccess = (payment) => {
		console.log('The payment was succeeded!', payment);
	};

	const onCancel = (data) => {
		console.log('The payment was cancelled!', data);
	};
	const onError = (err) => {
		// The main Paypal's script cannot be loaded or somethings block the loading of that script!
		console.log('Error!', err);
		// Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
		// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
	};

	let env = 'sandbox'; // you can set here to 'production' for production
	let currency = 'USD'; // or you can set this value from your props or state
	// let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
	// Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

	const client = {
		sandbox:
			'AdLiXyDElHtSN7bAwkMaBarZfEpz-0Km5cwd7TwlZxPddoPfjm52thdYlW8Y8hWH0iZKA3NAjUl4lZOQ',
	};
	// In order to get production's app-ID, you will have to send your app to Paypal for approval first
	// For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
	//   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
	// For production app-ID:
	//   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

	// NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
	return (
		<PaypalExpressBtn
			env={env}
			client={client}
			currency={currency}
			total={props.totalAmount}
			onError={onError}
			onSuccess={onSuccess}
			onCancel={onCancel}
		/>
	);
};

export default Payment;
