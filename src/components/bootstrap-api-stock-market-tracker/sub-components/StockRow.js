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
            console.log(url);
            setState(data)
        })
    },[props.tickerArray]) 
        
    const showDelete = () => setShowDel('show')
    const showDeleteNot = () => setShowDel('')

  return (
    <tr onMouseEnter={showDelete} onMouseLeave={showDeleteNot} className={showDel}>
        <td>{props.ticker}</td>
        <td>{state.close} $</td>
        <td>{state.date}</td>
        <td>{state.volume}</td>
        <td><i className="fa-solid fa-circle-minus" onClick={() => props.removeTicker(props.ticker)}></i></td>
    </tr>
  )
}
