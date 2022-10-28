import React from 'react';
import {Routes, Route} from 'react-router-dom';

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
import ViewAccount from './pages/ViewAccount';
import TransactionPage from './pages/Transaction';

axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <div className="App">

          <Routes> 
            
            <Route path="/" element={<LandingPage/>} />
            <Route path="/selectionpage" element={<SelectionPage/>} />
            <Route path="/register-seller" element={<Register/>} />
            <Route path="/login-seller" element={<Login/>} />

            <Route path="/homepage" element={<Homepage/>} />
            <Route path="/account" element={<AccountPage/>} />
            <Route path="/accountview" element={<ViewAccount/>} />
            <Route path="/transaction" element={<TransactionPage/>} />
            <Route path="/emptyproduct" element={<EmptyProduct/>} />
            <Route path="/products" element={<ViewProduct/>} />
            <Route path="/add-product" element={<AddProduct/>} />
            <Route path="/edit-product" element={<EditProduct/>} />
          </Routes>
    </div>
  );
}

export default App;