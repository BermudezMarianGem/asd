import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import {useLocation} from 'react-router';
import { Box, 
    FormControl, 
    Button, 
    InputLabel, 
    Select,
    MenuItem,
    Stack,
    TextField, 
    Avatar, 
    Typography, 
    Chip} from '@mui/material';
import ResponsiveDrawer from '../components/Drawer';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const drawerWidth = 240;

const classes = {
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#5F645F',
      marginTop: 1,
      marginLeft: 2,
    },
    arrowback:{
        color: '#5F645F',
        width: 50,
        height: 50,
    },
    Icon:{
        width: 200,
        height: 200,
        margin: 1,
    },
    UploadImageButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        borderRadius: 10,
        padding: 2,
        margin: 4,
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
    },
    DetailsText:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        textAlign:'left',
        marginTop: 2,
    },
    IconPosition:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    EditButton:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#FFFF',
        backgroundColor: '#388E3C',
        "&:hover": {
            color: '#FFFF',
            backgroundColor: '#388E3C',
        },
        margin: 5,
    }
}

const EditAccount = () => {

    const location = useLocation();
    const history = useNavigate();
    const [errorInput, setError] = useState([]);
    const state = location.state;
    const [userInput, setNewUser] = useState(state);

    const handleInput = (e) => {
        e.persist();
        setNewUser({...userInput, [e.target.name]: e.target.value });
    }

    const updateUser = (e) => {
        e.preventDefault();
        
        const user_id = state.id;
        const data = {
            firstname: userInput.firstname || state.firstname,
            middlename: userInput.middlename || state.middlename,
            lastname: userInput.lastname || state.lastname,
            birthdate: userInput.birthdate || state.birthdate,
            gender: userInput.gender || state.gender,
            username: userInput.username || state.username,
            mobilephone: userInput.mobilephone || state.mobilephone,
            email: userInput.email || state.email,
            orgName: userInput.orgName || state.orgName,
            brgy: userInput.brgy || state.brgy,
        }
        console.log(data)
        axios.put(`http://localhost:8000/api/update/${user_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                history('/account');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandatory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history('/account');
            }
        });
    }


    return (
        <Box sx={{ display: 'flex' }}>
        <ResponsiveDrawer/>
            <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                                <Toolbar />
                                <Stack direction='row'>
                                    <Button onClick={() =>  history('/account')}>
                                    <ArrowBackIcon sx = {classes.arrowback}/>
                                    </Button>
                                    <Typography variant='h4' sx={classes.Header}>
                                        Contact Information
                                    </Typography>
                                </Stack>
                                <Stack direction="column">         
                                <form onSubmit={(e) => updateUser(e)} >
                                    <div className="form-group mb-3">
                                        <Typography sx={classes.DetailsText}>
                                            FIRST NAME
                                        </Typography>
                                        <input type="text" name="firstname" onChange={(e) => handleInput(e)} defaultValue={userInput.firstname} className="form-control" />
                                        <span className="text-danger">{errorInput.firstname}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                    <Typography sx={classes.DetailsText}>
                                    MIDDLE NAME
                                    </Typography>
                                        <input type="text" name="middlename" onChange={(e) => handleInput(e)} defaultValue={userInput.middlename}  className="form-control" />
                                        <span className="text-danger">{errorInput.middlename}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                    <Typography sx={classes.DetailsText}>
                                    LAST NAME
                                     </Typography>
                                        <input type="text" name="lastname" onChange={(e) => handleInput(e)} defaultValue={userInput.lastname}  className="form-control" />
                                        <span className="text-danger">{errorInput.lastname}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                    <Typography sx={classes.DetailsText}>
                                    BIRTHDATE
                                    </Typography>
                                        <input type="date" name="birthdate" onChange={(e) => handleInput(e)} defaultValue={userInput.birthdate}  className="form-control" />
                                        <span className="text-danger">{errorInput.birthdate}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <Typography sx={classes.DetailsText}>
                                        GENDER
                                        </Typography>
                                        <select type="text" id="gender" name="gender" onChange={(e) => handleInput(e)} defaultValue={userInput.gender} className="form-control" >
                                            <option value="default" selected hidden>Select Gender</option>
                                            <option value = "Male">Male</option>
                                            <option value = "Female">Female</option>
                                            <option value = "Prefer not to say">Prefer not to say</option>
                                        </select>
                                        <span className="text-danger">{errorInput.gender}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                    <Typography sx={classes.DetailsText}>
                                        USERNAME
                                    </Typography>
                                        <input type="text" name="username" onChange={(e) => handleInput(e)} defaultValue={userInput.username}  className="form-control" />
                                        <span className="text-danger">{errorInput.username}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                    <Typography sx={classes.DetailsText}>
                                        MOBILE NUMBER
                                     </Typography>
                                        <input type="text" name="mobilephone" onChange={(e) => handleInput(e)} defaultValue={userInput.mobilephone}  className="form-control" />
                                        <span className="text-danger">{errorInput.mobilephone}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                    <Typography sx={classes.DetailsText}>
                                        EMAIL
                                    </Typography>
                                        <input type="text" name="email" onChange={(e) => handleInput(e)} defaultValue={userInput.email}  className="form-control" />
                                        <span className="text-danger">{errorInput.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                    <Typography sx={classes.DetailsText}>
                                       BARANGAY
                                    </Typography>
                                        <select type="text" id="brgy" name="brgy" onChange={(e) => handleInput(e)} defaultValue={userInput.brgy} className="form-control">
                                            <option value="default" selected hidden>Select your Barangay</option>
                                            <option value = "Alitao">Alitao</option>
                                            <option value = "Alsam Ibaba">Alsam Ibaba</option>
                                            <option value = "Alsam Ilaya">Alsam Ilaya</option>
                                            <option value = "Alupay">Alupay</option>
                                            <option value = "Angeles Zone I">Angeles Zone I</option>
                                            <option value = "Angeles Zone II">Angeles Zone II</option>
                                            <option value = "Angeles Zone III">Angeles Zone III</option>
                                            <option value = "Angeles Zone IV">Angeles Zone IV</option>
                                            <option value = "Angustias Zone I">Angustias Zone I</option>
                                            <option value = "Angustias Zone II">Angustias Zone II</option>
                                            <option value = "Angustias Zone III">Angustias Zone III</option>
                                            <option value = "Angustias Zone IV">Angustias Zone IV</option>
                                            <option value = "Anos">Anos</option>
                                            <option value = "Ayaas">Ayaas</option>
                                            <option value = "Baguio">Baguio</option>
                                            <option value = "Banilad">Banilad</option>
                                            <option value = "Bukal Ibaba">Bukal Ibaba</option>
                                            <option value = "Bukal Ilaya">Bukal Ilaya</option>
                                            <option value = "Calantas">Calantas</option>
                                            <option value = "Calantas">Calumpang</option>
                                            <option value = "Calantas">Camaysa</option>
                                            <option value = "Calantas">Dapdap</option>
                                            <option value = "Domoit Kanluran">Domoit Kanluran</option>
                                            <option value = "Domoit Silangan">Domoit Silangan</option>
                                            <option value = "Gibanga">Gibanga</option>
                                            <option value = "Ibas">Ibas</option>
                                            <option value = "Ilasan Ibaba">Ilasan Ibaba</option>
                                            <option value = "Ilasan Ilaya">Ilasan Ilaya</option>
                                            <option value = "Ipilan">Ipilan</option>
                                            <option value = "Isabang">Isabang</option>
                                            <option value = "Katigan Kanluran">Katigan Kanluran</option>
                                            <option value = "Katigan Silangan">Katigan Silangan</option>
                                            <option value = "Lakawan">Lakawan</option>
                                            <option value = "Lalo">Lalo</option>
                                            <option value = "Lawigue">Lawigue</option>
                                            <option value = "Lita">Lita</option>
                                            <option value = "Malaoa">Malaoa</option>
                                            <option value = "Masin">Masin</option>
                                            <option value = "Mate">Mate</option>
                                            <option value = "Mateuna">Mateuna</option>
                                            <option value = "Mayowe">Mayowe</option>
                                            <option value = "Nangka Ibaba">Nangka Ibaba</option>
                                            <option value = "Nangka Ilaya">Nangka Ilaya</option>
                                            <option value = "Opias">Opias</option>
                                            <option value = "Palale Ibaba">Palale Ibaba</option>
                                            <option value = "Palale Ilaya">Palale Ilaya</option>
                                            <option value = "Palale Kanluran">Palale Kanluran</option>
                                            <option value = "Palale Silangan">Palale Silangan</option>
                                            <option value = "Pandakaki">Pandakaki</option>
                                            <option value = "Pook">Pook</option>
                                            <option value = "Potol">Potol</option>
                                            <option value = "San Diego Zone I">San Diego Zone I</option>
                                            <option value = "San Diego Zone II">San Diego Zone II</option>
                                            <option value = "San Diego Zone III">San Diego Zone III</option>
                                            <option value = "San Diego Zone IV">San Diego Zone IV</option>
                                            <option value = "San Diego Zone IV">San Diego Zone IV</option>
                                            <option value = "San Isidro Zone I">San Isidro Zone I</option>
                                            <option value = "San Isidro Zone II">San Isidro Zone II</option>
                                            <option value = "San Isidro Zone III">San Isidro Zone III</option>
                                            <option value = "San Isidro Zone IV">San Isidro Zone IV</option>
                                            <option value = "San Isidro Zone IV">San Isidro Zone IV</option>
                                            <option value = "San Roque Zone I">San Roque Zone I</option>
                                            <option value = "San Roque Zone II">San Roque Zone II</option>
                                            <option value = "Talolong">Talolong</option>
                                            <option value = "Tamlong">Tamlong</option>
                                            <option value = "Tongko">Tongko</option>
                                            <option value = "Valencia">Valencia</option>
                                            <option value = "Wakas">Wakas</option>
                                        </select>
                                        <span className="text-danger">{errorInput.brgy}</span>
                                    </div>
                                    
                                    <Stack>
                                    <Button sx={classes.EditButton} aria-label="add" onClick={updateUser}>
                                        SAVE CHANGES
                                    </Button>
                                    </Stack>
                                </form>       
             </Stack>
             </Box>
        </Box>
    );

}

export default EditAccount; 