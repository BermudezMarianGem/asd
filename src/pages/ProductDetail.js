import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import NavbarCustomer from './NavbarCustomer';

function ProductDetails()
{
    const location = useLocation();
    const state = location.state;
    const [data, setData] = useState(state);
    const [loading, setLoading] = useState(true);
    const [value, setQuantity] = useState(1);

    const product_id = state.id;
    const fruits = {
      name: state.name,
      description: state.description,
      price: state.price,
      quantity: state.quantity,
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/viewfruit/${product_id}`).then((res) => {
          if (res.status === 200) {
            setData(res.data.products);
            setLoading(false);
          }
        });
        console.log(data)
        
      },);

      const handleDecrement = () => {
        if(value > 1)
        {
          setQuantity(prevCount => prevCount - 1);
        }
        
      }

      const handleIncrement = () => {
        if(value < 10)
        {
          setQuantity(prevCount => prevCount + 1);
        }
        
      }

      if(loading)
    {
        return <h4>Loading Vegetable Details...</h4>
    }
    else
    {
      if(fruits.quantity)
      {

      }
    }

    return(
      <>
      
      <NavbarCustomer/>
      <Link to={'/fruits'} className="btn btn-danger btn-sm float-end"> BACK</Link>
      <div className='py-3'>
        <div className='container'>
        
          <div className='row'>
            <h4>Fruits Section</h4>
            <div className='col-md-8'>
              <h4>{fruits.name}</h4>
              <p>Description: {fruits.description}</p>
              <p>
                Price: {fruits.price}
              </p>
            </div>

            <div className='row'>
              <div className='col-md-3 mt-3'>
                <div className='input-group'>
                  <button type='button'onClick={handleDecrement} className='input-group-text'>-</button>
                  <div className='form-control text-center'>
                    {value}
                  </div>
                  <button type='button' onClick={handleIncrement} className='input-group-text'>+</button>
                </div>
              </div>
              <div className='col-md-3 mt-3'>
                <button type="button" className='btn btn-primary w-100'>Add to Basket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
      
    );
}
export default ProductDetails;