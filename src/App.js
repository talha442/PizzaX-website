import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import { ProductsData, ProductsDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favourite' data={ProductsData} />
      <Feature />
      <Products heading='Sweet Treats For You' data={ProductsDataTwo} />
      <Footer/>
    </Router>
  );
}

export default App;
