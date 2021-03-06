import  React,{Component}  from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './component/Header'
import {Container} from 'react-bootstrap'
import Footer from './component/Footer'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

function App() {
  return (
    <Router>
       <Header/>
     <main className='py-3'>
     <Container>
       <Route path="/" component={HomeScreen} exact/>
       <Route path="/product/:id" component={ProductScreen}/>
       <Route path="/cart/:id?" component={CartScreen}/>


     </Container>
     </main>
      <Footer/>
    

    </Router> 
    
  );
}

export default App;
