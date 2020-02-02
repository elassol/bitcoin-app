import React, { useState, useEffect } from 'react'

const BtcTicker = () => {
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

  return (
    <div>
      <hr />
      {price ? <p><strong>{price.base}:</strong> £{roundPrice(price.amount)}</p> : <p>loading data ...</p>}
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  )
}

export default BtcTicker
