import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import { Datacenter } from './datacenter/Datacenter'
import Navbar from './products/Navbar'
import Products from './products/Products';
import 'bootstrap/dist/css/bootstrap.min.css'
import Addnew from './products/Addnew';
import Carts from './products/Carts';
import Details from './products/Details';
import Update from './products/Update';
function App() {
  return (
    <div className="App">
      <Datacenter>
        <Router>
          <Navbar/>
          <Switch>
        <Route exact path={'/'} component={Products}/>
        <Route exact path={'/addnew'} component={Addnew}/>
        <Route exact path={'/Carts'} component={Carts}/>
        <Route exact path={'/DetailProduct/:id'} component={Details}/>
        <Route exact path={'/update/:id'} component={Update}/>
          </Switch>
          
        </Router>
      </Datacenter>
    </div>
  );
}

export default App;
