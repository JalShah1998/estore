import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav/topnav';
import CatNav from './Components/CatNav';
import MainComponent from './MainComponent';
import LandingPage from './Components';
import { Route,Routes } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';


function App() {
  return (
    <div className="App">
      <TopNav/>
      <CatNav/>
      <Routes>
        <Route path='/' Component={LandingPage}/>
        <Route path='/productDetails' Component={ProductDetails}/>
        <Route path='/cart' Component={Cart}/>
      </Routes>
      <MainComponent/>
    </div>
  );
}

export default App;
