import React, { useContext } from 'react';
import { TransactionsContext } from '../pages/transactions/context';

const types = [
	'Débito',
	'Boleto', 'Financiamento', 'Crédito', 'Recebimento Empréstimo', 'Vendas', 'Recebimento TED',
	'Recebimento DOC', 'Aluguel'
]
const TransactionList = () => {
	const { transactions, total } = useContext(TransactionsContext);
	return (
		<div>
			{
				transactions.length && (
					<>
						<span>Total: {total} </span>
						<table>
							<thead>
								<th>Tipo</th>
								<th>Valor</th>
							</thead>
							<tbody>
								{transactions.map(transaction => (
									<tr key={transaction.transaction_id}>
										<td>{types[parseInt(transaction.transaction_type) + 1]}</td>
										<td>{transaction.transaction_value}</td>
									</tr>
								))}
							</tbody>
						</table>
					</>
				)
			}
		</div>
	)
}

export default TransactionList;