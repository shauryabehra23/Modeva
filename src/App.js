import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LandingPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
