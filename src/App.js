import Navbar from './components/bootstrap-navbar02/Navbar';
import WeatherAPI from './components/api-weather/WeatherAPI';
import './app.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <WeatherAPI/>
    </div>
  );
}

export default App;