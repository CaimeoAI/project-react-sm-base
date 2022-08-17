import './navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="top-section">
            <div className="brand"><i class="fa-brands fa-artstation"></i> Brand</div>
            <div className="collapse-btn"><i class="fa-solid fa-circle-chevron-left"></i></div>
        </div>

        <div className="search-bar">
            <input type="text" placeholder='search...' />
        </div>
    </div>
  )
}