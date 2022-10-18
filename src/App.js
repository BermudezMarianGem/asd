import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import ViewProduct from './pages/ViewProduct';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Homepage from './pages/HomePage';

import axios from 'axios';
import EmptyProduct from './pages/EmptyProduct';
import LandingPage from './pages/LandingPage';
import SelectionPage from './pages/SelectionPage';
import AccountPage from './pages/Account';
//import LandingPage from './pages/LandingPage';
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <div className="App">
        <Router>

          <Switch> 
            
            <Route path="/landingpage" component={LandingPage} />
            <Route path="/selectionpage" component={SelectionPage} />
            <Route path="/register-seller" component={Register} />
            <Route path="/login-seller" component={Login} />

            <Route path="/homepage" component={Homepage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/emptyproduct" component={EmptyProduct} />
            <Route path="/products" component={ViewProduct} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/edit-product/:id" component={EditProduct} />
            
          </Switch>
        </Router>
    </div>
  );
}

export default App;