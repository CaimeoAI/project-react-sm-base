import Navbar from './components/sidebar01/Navbar'
import StockTracker from './components/bootstrap-api-stock-market-tracker/StockTracker.js'

import './app.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <StockTracker/>
    </div>
  );
}

export default App;