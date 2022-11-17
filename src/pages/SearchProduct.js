import { useState } from "react";
import NavbarCustomer from "./NavbarCustomer";

function SearchProduct() {

    const [table, setTable] = useState(null);

    async function search(key) {
        console.warn(key)
        let result = await fetch("http://localhost:8000/api/search/"+key);
        console.log(result);
        result = await result.json();
    
        var product_HTMLTABLE = result.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
            </tr>
          );
        });
        setTable(product_HTMLTABLE)

    }

    return (
        <div>
            <NavbarCustomer />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Product</h1>
                <br/>
                <input type='text' onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Product" />
            </div>
            <div className="col-sm-6 offset-sm-3">
                <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>{table}</tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchProduct;