import React, { useState, useEffect } from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { iex } from './iex'

export default function StockRow(props) {

    const [state, setState] = useState({})

    useEffect(() => {
        const url = `${iex.url}stock/${props.ticker}/previous?chartLast=1&token=${iex.token}`

        fetch(url).then((res) => res.json()).then((data) => {
            setState(data)
        })
    },[]) 
        
  return (
    <tr>
        <td>{props.ticker.toUpperCase()}</td>
        <td>{state.close} $</td>
        <td>{state.date}</td>
        <td>{state.volume}</td>
    </tr>
  )
}
