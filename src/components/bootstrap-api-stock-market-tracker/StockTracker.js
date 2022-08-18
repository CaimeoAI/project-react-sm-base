import { useState } from 'react'
import './stocktracker.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import StockRow from './sub-components/StockRow'

export default function StockTracker() {

  const [tickerArray, setTickerArray] = useState(['aapl', 'goog', 'tsla', 'amzn'])

  const addTicker = (e) => {
    if (e.key === 'Enter') {
      setTickerArray([...tickerArray, e.target.value])
    }
  }

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
                {tickerArray.map((e,i) => <StockRow key={i+Math.ceil(Math.random()*1000000)} ticker={e}/>)}
              </tbody>
            </table>
        </div>
    </div>
  )
}