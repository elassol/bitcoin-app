import React, { useState, useEffect } from 'react';
import { WrappeTicker, TickerCard } from './TickerPrice.style';
import { ReactComponent as IconBtc } from '../../images/iconBtc.svg';
import { ReactComponent as IconEth } from '../../images/icon-ethereum.svg';

const TickerPrice = () => {
  const [price, setPrice] = useState({})
  const [hasError, setErrors] = useState(false)

  const coinbaseUrl = 'https://api.coinbase.com/v2/prices/spot/?currency=GBP'

  useEffect(() => {
    async function fetchData () {
      const res = await fetch(coinbaseUrl)
      res
        .json()
        .then(res => setPrice(res.data))
        .catch(err => setErrors(err))
    }

    fetchData()
  })

  const roundPrice = price => {
    return parseFloat(price).toFixed(2)
  }

  const displayPriceBTC = (price) => {
    return (
      <TickerCard>
        <IconBtc className='icon'/>
        <p>£{roundPrice(price.amount)}</p>
      </TickerCard>
    )
  }

  return (
    <WrappeTicker>
      {price ? displayPriceBTC(price) : <p>loading data ...</p>}
      {hasError && <span>Has error: {JSON.stringify(hasError)} </span>}

    </WrappeTicker>
  )
}

export default TickerPrice
