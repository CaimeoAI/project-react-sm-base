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
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="text" placeholder='search...' />
        </div>

        <div className="section-divider"></div>

        <div className="mid-section">
            <ul>
              <li>
                <a className='menu-item'>
                  <div className="menu-icon">
                    <i className="fa-regular fa-compass"></i>
                  </div>
                  <div className="menu-name">Dashboard</div>
                </a>
              </li>
              <li>
                <a className='menu-item'>
                  <div className="menu-icon">
                    <i className="fa-solid fa-cubes"></i>
                  </div>
                  <div className="menu-name">Content</div>
                </a>
              </li>
              <li>
                <a className='menu-item'>
                  <div className="menu-icon">
                    <i className="fa-solid fa-earth-europe"></i>
                  </div>
                  <div className="menu-name">World News</div>
                </a>
              </li>
              <li>
                <a className='menu-item'>
                  <div className="menu-icon">
                    <i className="fa-solid fa-envelope-open-text"></i>
                  </div>
                  <div className="menu-name">Contact</div>
                </a>
              </li>
            </ul>
        </div>
    </div>
  )
}
