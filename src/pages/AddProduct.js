import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


function AddProduct() {

    const history = useHistory();
    const [productInput, setProduct] = useState({
        category:'',
        name: '',
        description: '',
        price: '',
        quantity: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setProduct({...productInput, [e.target.name]: e.target.value })
    }

    const saveProduct = (e) => {
        e.preventDefault();
        
        const data = {
            category:productInput.category,
            name:productInput.name,
            description:productInput.description,
            price:productInput.price,
            quantity:productInput.quantity,
        }

        axios.post(`/api/add-product`, data).then(res => {

            if(res.data.status === 200)
            {
                swal("Success!",res.data.message,"success");
                setProduct({
                    category:'',
                    name: '',
                    description: '',
                    price: '',
                    quantity: '',
                    error_list: [],
                });
                history.push('/products');
            }
            else if(res.data.status === 422)
            {
                setProduct({...productInput, error_list: res.data.validate_err });
            }
        });
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Product 
                                    <Link to={'/'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={saveProduct} >
                                    <div className="form-group mb-3">
                                        <label>Select product category</label>
                                        <input type="text" name="category" onChange={handleInput} value={productInput.category} className="form-control" />
                                        <span className="text-danger">{productInput.error_list.category}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Product Name</label>
                                        <input type="text" name="name" onChange={handleInput} value={productInput.name}  className="form-control" />
                                        <span className="text-danger">{productInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Product Description</label>
                                        <input type="text" name="description" onChange={handleInput} value={productInput.description}  className="form-control" />
                                        <span className="text-danger">{productInput.error_list.description}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Product Price</label>
                                        <input type="text" name="price" onChange={handleInput} value={productInput.price}  className="form-control" />
                                        <span className="text-danger">{productInput.error_list.price}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Product Quantity</label>
                                        <input type="text" name="quantity" onChange={handleInput} value={productInput.quantity}  className="form-control" />
                                        <span className="text-danger">{productInput.error_list.quantity}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save Product</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AddProduct;