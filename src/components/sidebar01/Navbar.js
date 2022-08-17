import './navbar.scss'
import { useState } from 'react'

export default function Navbar() {

  const [toggle, setToggle] = useState('collapse')

  const toggleSidebar = () => {
    if (toggle === 'collapse') {
      setToggle(null)
    } else {
      setToggle('collapse')
    }
  }

  return (
    <div className={'navbar ' + toggle}>
        <div className="top-section">
            <div className="brand">
                <div className={'logo ' + toggle}><i class="fa-brands fa-artstation"></i></div>
                <div className="brand-name">Brand</div>
              </div>
            <div className="collapse-btn">{toggle === 'collapse' ? <i onClick={toggleSidebar} class="fa-solid fa-circle-chevron-right"></i> : <i onClick={toggleSidebar} class="fa-solid fa-circle-chevron-left"></i>}</div>
        </div>

        <div className="search-bar">
            <div className="search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="text" placeholder='search...' />
        </div>

        <div className="section-divider"></div>

        <div className="mid-section">
            <div className="menu-item-one">
              <div className="menu-item-one-icon">
                <i className="fa-solid fa-warehouse"></i>
              </div>
              <div className="menu-item-one-name"></div>
            </div>
        </div>
    </div>
  )
}
