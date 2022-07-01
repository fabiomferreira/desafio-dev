
import React from 'react';

const TransactionForm = () => {

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch('/v1/transactions')
			.then(res => res.json())
			.then(res => console.log('transactions', res))
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="file" />
			<button type="submit">Send</button>
		</form>
	)
}

export default TransactionForm;