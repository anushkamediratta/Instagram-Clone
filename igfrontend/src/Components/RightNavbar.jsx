import { Avatar, Typography } from "@mui/material"
import { Container } from "react-bootstrap"

const RightNavbar=()=>{
 return <Container >
    <div style={{display:'flex',marginTop:'5rem',marginBottom:'2rem'}}> 
        <Avatar
            size="sm"
            src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            sx={{ p: 0.5, border: '2px solid', borderColor:'red',height:45, width:45}}
          />
          <Typography style={{marginLeft:'2rem'}} variant="h4" >
            Username
          </Typography>
    </div>
    <div>
        <Typography variant="body1" color="text.secondary"> Suggested for you</Typography>
    </div>
    
 </Container>

}

export default RightNavbar