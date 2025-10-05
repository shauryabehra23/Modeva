import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Products from './Pages/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="App items-center">
        <Products/>
      </div>
    </BrowserRouter>
  );
}

export default App;
