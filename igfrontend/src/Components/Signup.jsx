// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
// const Signup = ()=>{
//     const navigate = useNavigate();
//     const[name,setName]=useState('')
//     const[email,setEmail]=useState('')
//     const[password,setPassword]=useState('')

    // const onSignup = () => {
    //   navigate('/login');
    // };

//     const onFormSubmitHandler =e=>{
//       e.preventDefault();
    //   fetch('http://localhost:4000/signup',{
    //     method:"post",
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify({name,email,password})
    // })
    // .then(res => res.json())
    // .then(data => 
    //   console.log(data)
     
    // )
    // .catch(err => console.log(err))
    // }

//   return <Container>
//     <Row>
//       <Col>
//       <center>
//       <Card style={{ width: '18rem' }}>
//         <Card.Body>
//       <Form onSubmit={onFormSubmitHandler}>
//       <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)}/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={onSignup}>
//         SignUp
//       </Button>
//     </Form>
//     </Card.Body>
//     </Card>
//     </center>
//       </Col>
//     </Row>
//   </Container>
  
// }

// export default Signup



import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Signup=()=>{

  const navigate = useNavigate();

  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]= useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/signup',{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,password})
  })
  .then(res => res.json())
  .then(data => {
  navigate('/login');
  })
  .catch(err => console.log(err));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.businessinsider.in/photo/79213151/Instagram-is-redesigning-the-home-screen-with-prime-spots-for-TikTok-like-Reels-and-in-app-shopping-see-what-it-looks-like.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  type="text" 
                  value={name} onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email" 
                  value={email} onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password} onChange={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Signup