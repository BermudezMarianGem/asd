import axios from 'axios';
import React, {useEffect, useState} from 'react';

function VegetablePage()
{
    const [data, setData] = useState('');
    
    useEffect(() => {
        console.log(data)
        fetch('http://localhost:8000/api/vegetables').then((response) => response.json()).then((data) => {setData(data)})  
      }, []);
    return(
        <div>
            <h1>Vegetables</h1>

            <div>
                <h4>Name: {data.name}</h4>
                <h4>Description: {data.description}</h4>
                <h4>Price: {data.price}</h4>
            </div>
        </div>
    );
}

export default VegetablePage;