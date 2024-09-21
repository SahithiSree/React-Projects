
import './App.css';
import WeatherApp from './Projects/WeatherApp';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import CardComponent from './Components/CardComponent';
import HomeComponent from './Components/HomeComponent';
function App() {
  return (
    <Router>
      <div className='App'>
      <h1>My Multi Projects Dashboard</h1> 
         <Routes>
          <Route path="/" element={<HomeComponent/>}/>
        <Route path="/project-a" element={<WeatherApp />} />
      </Routes> 
      </div>
      
    </Router>
  
  );
}

export default App;
