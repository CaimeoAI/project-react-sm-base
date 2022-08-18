import { useState } from 'react'
import './stocktracker.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import StockRow from './sub-components/StockRow'

export default function StockTracker() {

  const [tickerArray, setTickerArray] = useState([])

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
            <div className="container">
              <input type="text" onKeyPress={addTicker} placeholder='Enter stock symbol...'/>
              <datalist id='datalist'>
                <option value="aapl">Apple</option>
                <option value="aapl">Amazon</option>
                <option value="aapl">Google</option>
                <option value="aapl">Tesla</option>
              </datalist>
            </div>
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