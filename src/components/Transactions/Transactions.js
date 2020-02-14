import React from 'react'
import transactionsData from './transactionsData'
import { TransactionWrapper, TransactionLine } from './Transactions.style'

const Transactions = ({ updateInvestment }) => {
  // const [ transactions, setTransactions ] = useState([]);
  // const [ showList, setShowList ] = useState(false);
  const valuePortfolio = [];

  const porfolioCost = (data) => {
    console.log(transactionsData);
    data.forEach((item, index, array) => {
      valuePortfolio.push(item.price);
      console.log("value portfolio " + valuePortfolio);
    });
    const investmentBTC = valuePortfolio.reduce((a, b) => a + b, 0);
    return console.log(investmentBTC);
  }



  return (
    <TransactionWrapper>
    {porfolioCost(transactionsData)}
      {

        transactionsData.map((transaction) => (

          <TransactionLine key={transaction.Date}>
            <span>
              {transaction.Date}
              {' '}
            </span>
            <span>
              £
              {transaction.price}
            </span>
            <span>
              BTC
              {transaction.btcAmount}
            </span>
            <span>
              {transaction.btcSpotprice}
              {' '}
            </span>
          </TransactionLine>
        ))

      }
    </TransactionWrapper>
  )
}

export default Transactions
