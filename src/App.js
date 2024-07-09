
import './App.css';
import Nav from './Nav';
import Carousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MenuData from './MenuData.json';
import Title from './titles/Title';
import { SiTrueup } from 'react-icons/si';
import ProductList from './ProductList';
import Products from "./products.json"
import adimage from "./img/ad.jpg"
import RevealText from './RevealText';
import "./globals.css"

function App() {

  return (
    <div className="App">
      <Nav data = {MenuData}/>
      <Carousel />
      <Title titleData="Man" labelData = {{haslabel:true, value:"New Sales %"}}/>
      <ProductList toShow="men's clothing"  data = {Products}/>
      <div id="adimage">
      <RevealText text="Aton Armeniia is for You" />
      </div>

    </div>
  );
}

export default App;
