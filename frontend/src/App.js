import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// Screens
import Home from './screens/homeScreen';
import Gallery from './screens/galleryScreen';
import Shop from './screens/shopScreen';
import CartScreen from './screens/cartScreen';
import About from './screens/aboutScreen';
import Contact from './screens/contactScreen';
import Product from './screens/productScreen';

// Components
import Navbar from './components/navbar/Navbar';
import Drawer from './components//navbar/Drawer';
import Footer from './components/Footer';
import Backdrop from './components/navbar/Backdrop';
import Checkout from './components/checkout/Checkout';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <Drawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={props => <Home {...props} />} />
          <Route exact path="/Gallery" component={props => <Gallery {...props} />} />
          <Route exact path="/Shop" component={props => <Shop {...props} />} />
          <Route exact path="/About" component={props => <About {...props} />} />
          <Route exact path="/Contact" component={props => <Contact {...props} />} />
          <Route exact path="/product/:id" component={props => <Product {...props} />} />
          <Route exact path="/cart" component={props => <CartScreen {...props} />} />
          <Route exact path="/Checkout" component={props => <Checkout {...props} />} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
