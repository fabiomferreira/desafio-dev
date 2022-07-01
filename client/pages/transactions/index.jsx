import React, {useState} from 'react';
import TransactionForm from '../../components/TransactionForm';
import TransactionList from '../../components/TransactionList';
import {TransactionsContext} from './context'

const Transactions = () => {
	const [transactions, setTransactions] = useState([]);
	const [total, setTotal] = useState(0);

	const value = {
		transactions, setTransactions, total, setTotal
	}
	return (
		<TransactionsContext.Provider value={value}>
			<TransactionForm />
			<TransactionList />
		</TransactionsContext.Provider>
	)
}

export default Transactions;