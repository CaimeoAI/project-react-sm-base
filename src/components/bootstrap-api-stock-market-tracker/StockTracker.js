import { useState } from 'react'
import './stocktracker.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import StockRow from './sub-components/StockRow'

export default function StockTracker() {

  const [tickerArray, setTickerArray] = useState([
    { symbol: 'aapl',
      key: Math.ceil(Math.random()*1000000)},

    { symbol: 'amzn',
      key: Math.ceil(Math.random()*1000000)},

    { symbol: 'tsla',
      key: Math.ceil(Math.random()*1000000)},

    { symbol: 'goog',
      key: Math.ceil(Math.random()*1000000)}])

  const addTicker = (e) => {
    if (e.key === 'Enter') {
      let newArray = ([...tickerArray, { symbol:e.target.value , key: Math.ceil(Math.random()*1000000)}])
      setTickerArray(newArray)
    }
  }

  const removeTicker = (key) => setTickerArray(tickerArray.filter(item => item.symbol !== key))
  
  return (
    <div> 
        <div className="container">
            <h1 className='m-5'>Previous Day Closing Prices</h1>
            <input type="text" onKeyPress={addTicker}/>
            <table className="table mt-5">
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Volume</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tickerArray.map((e) => <StockRow key={e.key} ticker={e.symbol} removeTicker={removeTicker} tickerArray={tickerArray}/>)}
              </tbody>
            </table>
        </div>
    </div>
  )
}