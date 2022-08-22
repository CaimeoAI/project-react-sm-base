import React, { useState, useEffect } from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './stockrow.scss'
import { iex } from './iex'

export default function StockRow(props) {

    const [state, setState] = useState({})
    const [showDel, setShowDel] = useState('')

    useEffect(() => {
        const url = `${iex.url}stock/${props.ticker}/previous?chartLast=1&token=${iex.token}`

        fetch(url).then((res) => res.json()).then((data) => {
            setState(data)
        })
        
    },[props.tickerArray]) 
        
    const showDelete = () => setShowDel('show')
    const showDeleteNot = () => setShowDel('')

    const change = state.change

  return (
    <tr onMouseEnter={showDelete} onMouseLeave={showDeleteNot} className={showDel}>
        <td className='bold'>{props.ticker.toUpperCase()}</td>
        <td>{state.close} $ <span className={change < 0 ? 'red' : 'green'}>{change?.toFixed(4)}</span></td>
        <td>{state.date}</td>
        <td>{state.volume}</td>
        <td><i className="fa-solid fa-circle-minus" onClick={() => props.removeTicker(props.ticker)}></i></td>
    </tr>
  )
}