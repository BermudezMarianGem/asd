import React , {useState} from 'react';
import {Container} from '@mui/material'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import illustration from '../assets/login.png';
import { Image } from 'mui-image';
import {useNavigate} from 'react-router-dom';


const theme = createTheme();
const classes = {
  registerbutton: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    backgroundColor: '#388E3C',
    borderRadius: 5,
    mt: 3, 
    mb: 2,
    "&:hover": {
      color: '#FFFF',
      backgroundColor: '#6FCF97',
      borderColor: '#FFFF',
    },
  },
  Header: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#388E3C',
  },
  SubHeader:{
    fontFamily: 'Poppins',
    color: '#6C6D6C',
  },
  TextField:{
    color: '#388E3C'
  },
  Text:{
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#388E3C',
    alignItems: 'center'
  },
  SubText:{
    fontFamily: 'Poppins',
    color: '#000000',
  },
  CustomTextField: {
    "& .MuiInputLabel-root": {color: '#5F5B5B'},//styles the label
    "& .MuiOutlinedInput-root": {
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
      '& label.Mui-focused': {
        color: 'gray',
      },
    }
  },
  CustomOutlineTextField: {
    "& .MuiInputLabel-root": {color: '#5F5B5B'},//styles the label
    "& .MuiOutlinedInput-root": {
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
      '& label.Mui-focused': {
        color: 'gray',
      },
    }
  }
}



const RegisterCustomer = () => {

    const [firstname, setfirstname]=useState("")
    const [middlename, setmiddlename]=useState("")
    const [lastname, setlastname]=useState("")
    const [username, setusername]=useState("")
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    const history = useNavigate();


    async function customerSignup(e)
    {
        e.preventDefault();
        let item={firstname, middlename, lastname, username, email, password}

        let result = await fetch("http://localhost:8000/api/registerCustomer",
        {
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json',
            }
        })
        
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history("/login-customer")
    }
    return (
        <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#4DA351',
              backgroundPosition: 'center',
            }}
          >
            <Container maxWidth="sm" sx={{alignItems: 'center',marginTop:15}}>
            <Image duration = {0} src={illustration} height= {'auto'} width= {'auto'}></Image>
            </Container>
          </Grid>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography sx={classes.Header} component="h1" variant="h5">
                CREATE ACCOUNT
              </Typography>
              <Typography sx={classes.SubHeader} component="h1" variant="h6">
                Sign-up to continue
              </Typography>
              <Box component="form" onSubmit={customerSignup} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  name="firstname"
                  value={firstname}
                  onChange={(e)=>setfirstname(e.target.value)}
                  autoFocus
                  sx={classes.CustomTextField}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  value={middlename}
                  onChange={(e)=>setmiddlename(e.target.value)} className="form-control"
                  id="middlename"
                  label="Middle Name"
                  name="middlename"
                  autoFocus
                  sx={classes.CustomTextField}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={lastname}
                  onChange={(e)=>setlastname(e.target.value)} 
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoFocus
                  sx={classes.CustomTextField}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={username} 
                  onChange={(e)=>setusername(e.target.value)}
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                  sx={classes.CustomTextField}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}  
                  onChange={(e)=>setemail(e.target.value)}
                  autoComplete="email"
                  autoFocus
                  sx={classes.CustomTextField}
                />
                <TextField
                  sx={classes.CustomTextField}
                  margin="normal"
                  required
                  fullWidth
                  value={password}  
                  onChange={(e)=>setpassword(e.target.value)}
                  name="password"
                  id="password"
                  label="Password"
                  type='password'
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={classes.registerbutton}
                >
                  REGISTER
                </Button>
                <Box
                  sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  }}
                >
                <Typography sx={classes.SubText}>
                  Already have an account?
                  <Link sx={classes.Text} href="/login-customer" variant="body1">
                            {" Login here"}
                          </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    );

}

export default RegisterCustomer;