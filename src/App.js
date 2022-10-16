import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import ViewProduct from './pages/ViewProduct';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';

import axios from 'axios';
//import LandingPage from './pages/LandingPage';
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <div className="App">
        <Router>

          <Switch> 
            

            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />

            <Route path="/products" component={ViewProduct} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/edit-product/:id" component={EditProduct} />
            
          </Switch>
        </Router>
    </div>
  );
}

export default App;