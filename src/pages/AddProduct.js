import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { Box, 
    Button,
    Typography,
    Toolbar,
    TextField,
    Stack,
    MenuItem,
    Select,
SelectChangeEvent} from '@mui/material';
import ResponsiveDrawer from '../components/Drawer';
import AddIcon from '@mui/icons-material/Add';

//ScreenSize
const drawerWidth = 240;

//Styles
const classes = {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 20,
      textAlign: "center",
      color: "blue"
    },
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#31A05F',
      marginBottom: 5,
    },
    SecondHeader:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#31A05F',
        marginTop: 5,
        marginBottom: 2,
    },
    HeaderSub: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#31A05F',
    },
    Subtitle: {
        fontFamily: 'Poppins',
        color: '#5F5B5B',
    },
    AddImageButton:{
        color: '#00000',
        backgroundColor: '#D9D9D9',
        borderStyle: "dashed",
        padding: 10,
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    },
    addIcon:{
        color: '#00000',
    },
    label: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#5F5B5B',
        marginLeft: 0,
        marginTop: 1,
    },
    labelItem: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#00000',
        backgroundColor: '#D9D9D9',
        borderColor: '#D9D9D9',
    },
    stepper: {
        marginTop: 1,
        marginBottom: 1,
    },
    StepperButton: {
        backgroundColor: '#000000',
        color: '#FFFF',
        fontSize: 20,
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    },
    number: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#000000',
    },
    stepperlabel: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#5F5B5B',
        marginLeft: 1,
        marginTop: 2,
    },
    AddButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#6FCF97',
        },
        margin: 1,
    },
    CancelButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        backgroundColor: '#F22323',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#FF7D7D',
        },
        margin: 1,
    },
    UploadImageButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    },
    positionButtons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
    }
}

const AddProduct = () => {


    let user = JSON.parse(localStorage.getItem('user-info'))

    const history = useNavigate();
    const [productInput, setProduct] = useState({
        category:'',
        name: '',
        seller_name: '',
        description: '',
        price: '',
        quantity: '',
        error_list: [],
    });

    const [productImage, setImage] = useState([]);

    const handleInput = (e) => {
        setProduct({...productInput, [e.target.name]: e.target.value })
    }


    const handleImage = (e) => {
        setImage({image:e.target.files[0]});
      }
  

    const saveProduct = (e) => {
        e.preventDefault();
        
        /*const data = {
            category:productInput.category,
            name:productInput.name,
            seller_name: user.firstname,
            description:productInput.description,
            price:productInput.price,
            quantity:productInput.quantity,
            userId:user.id
        }
        console.log(data);*/

        const formData = new FormData();
        formData.append('image', productImage.image);
        formData.append('category', productInput.category);
        formData.append('name', productInput.name);
        formData.append('seller_name', user.firstname);
        formData.append('description', productInput.description);
        formData.append('price', productInput.price);
        formData.append('quantity', productInput.quantity);
        formData.append('user_id', user.id);

        axios.post(`http://localhost:8000/api/products`, formData).then(res => {

            if(res.data.status === 200)
            {
                swal("Success!",res.data.message,"success");
                history('/products');
            }
            else if(res.data.status === 422)
            {
                swal('All fields are required', 'error');
            }
        });
        console.log(formData)
    }

    return (
        <Box sx={{ display: 'flex' }}>
        <ResponsiveDrawer/>
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            <Box>
                <Typography variant='h4' sx={classes.Header}>
                Add new Product
                </Typography>
                    <Stack direction="column">
                            <input placeholder=" " name="image" onChange={handleImage} type="file"/>
                        <Typography sx={classes.Subtitle}>
                            Upload an image of your product
                        </Typography>
                    </Stack>
                <Box direction="column" spacing={1}>
                    <Typography variant='h5' sx={classes.SecondHeader}>
                        Add product details
                    </Typography>
                    <Box component="form" sx={{ mt: 1, minWidth: 120 }}>
                        <Typography sx={classes.label}>Select product category</Typography>
                        <Select
                        fullWidth
                        id="category" 
                        name="category"
                        onChange={handleInput} 
                        defaultValue=''
                        value={productInput?.category}
                        sx={classes.labelItem}
                        >
                            <MenuItem value={"Vegetables"}>Vegetables</MenuItem>
                            <MenuItem value={"Fruits"}>Fruits</MenuItem>
                        </Select>
                        <span className="text-danger">{productInput.error_list.category}</span>
                        <Typography sx={classes.label}>Product name</Typography>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            onChange={handleInput} 
                            value={productInput.name}
                            sx={classes.labelItem}
                        />
                         <span className="text-danger">{productInput.error_list.name}</span>
                        <Typography sx={classes.label}>Growing Method</Typography>
                        <Select
                        fullWidth
                        onChange={handleInput} 
                        id="description" 
                        name="description"
                        defaultValue=''
                        value={productInput?.description}
                        displayEmpty
                        sx={classes.labelItem}
                        >
                            <MenuItem value={"Organic"}>Organic</MenuItem>
                            <MenuItem value={"Fertilizer"}>Conventional</MenuItem>
                        </Select>
                        <span className="text-danger">{productInput.error_list.description}</span>
                        <Typography sx={classes.label}>Product price</Typography>
                        <TextField
                            fullWidth
                            id="price"
                            name="price"
                            onChange={handleInput} 
                            value={productInput.price}
                            sx={classes.labelItem}
                        />
                        <span className="text-danger">{productInput.error_list.price}</span>
                        <Typography sx={classes.label}>Product quantity</Typography>
                        <TextField
                            fullWidth
                            id="quantity"
                            name="quantity"
                            onChange={handleInput} 
                            value={productInput.quantity}
                            sx={classes.labelItem}
                        />
                        <span className="text-danger">{productInput.error_list.quantity}</span>
                    <Stack direction='row' sx = {classes.positionButtons}>
                        <Button variant="contained" sx={classes.AddButton} onClick={saveProduct}>SAVE PRODUCT</Button>
                        <Button variant="contained" sx={classes.CancelButton} onClick={() => history('/products')}>CANCEL</Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
        </Box>
    </Box>
    );

}

export default AddProduct;