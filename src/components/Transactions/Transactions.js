import React from 'react'
import transactionsData from './transactionsData'
import { TransactionWrapper, TransactionLine } from './Transactions.style'

const Transactions = () => {
  // const [ transactions, setTransactions ] = useState([]);
  // const [ showList, setShowList ] = useState(false);

  return (
    <TransactionWrapper>
      {
        transactionsData.map((transaction) => (   
          <TransactionLine key={transaction.Date}>
            <span>{transaction.Date} </span>
            <span>£{transaction.price} </span>
            <span>BTC {transaction.btcAmount} </span>
            <span>{transaction.btcSpotprice} </span>
          </TransactionLine>
        ))

      }
    </TransactionWrapper>
  )
}

export default Transactions
