import { useState } from 'react'
import './stocktracker.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import StockRow from './sub-components/StockRow'

export default function StockTracker() {

  const tickerArray = ['aapl', 'goog', 'tsla', 'amzn']

  const addTicker = (e) => {
    if (e.target.key === 'Enter') {
      
    }
  }


  return (
    <div> 
        <div className="container">
            <h1 className='m-5'>Previous Day Closing Prices</h1>
            <input type="text" onKeyPress=''/>
            <table className="table mt-5">
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Volume</th>
                </tr>
              </thead>
              <tbody>
                {tickerArray.map((e,i) => <StockRow key={i} ticker={e}/>)}
                
              </tbody>
            </table>
        </div>
    </div>
  )
}