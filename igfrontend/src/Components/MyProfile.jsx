import { Avatar, Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { Button, Col, Row} from "react-bootstrap"
import NavBar from "./NavBar"
import RightNavbar from "./RightNavbar"
import { Typography } from "@mui/material"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { CenterFocusStrong } from "@mui/icons-material";
import Stack from "@mui/material/Stack"
import GridOnIcon from '@mui/icons-material/GridOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useLocation } from "react-router-dom";
import Styles from './components.module.css'


const MyProfile=()=>{

    const[myPost,setMyPost]=useState([])
    const[myUser,setMyUser]=useState([])

    console.log(myUser)
    // followers length
    const followersLength=myUser.followers?myUser.followers.length:0;
    const followingLength=myUser.following?myUser.following.length:0;


// fetching  user/id api for other details of user

const id=localStorage.getItem("UserId")
  
  useEffect(()=>{
    fetch(`http://localhost:4000/user/${id}`,{
      method:'get',
    headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
    }
    }).then(res => res.json())
    .then(data=> {
      setMyUser(data.user)})
  },[])

    // fetching my post Api
    useEffect(()=>{
    fetch('http://localhost:4000/myPost',{
    method:'get',
    headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
    }
}).then(res => res.json())
.then(data=> {
  setMyPost(data)})
    },[])

   return <div >
   <Row>
     {/* col 1 for Navbar */}
      <Col md={2}>
          <div>
          <NavBar/>
        </div>  
      </Col >
     {/* Col 2 for userProfile */}
       <Col md={10}  className="border">
         {/* main div for containing all the components  */}
       <div id="main">
         {/* div for containing avatar and another div of follow  */}
          <div style={{display:'flex'}}>
            <Avatar
             size="sm"
             src={myUser.pic}
             sx={{ p: 0.5, border: '2px solid', borderColor:'red',height:160, width:160,marginLeft:'210px',marginTop:'30px',objectFit: 'cover',borderRadius: '50%'}}
           />
           <Container>
             {/* WE NEED 3 divs to place inside container */}
               <div style={{display:'flex'}}>
                    <Typography style={{marginLeft:'100px',marginTop:'40px'}} variant="h6" >
                      {myUser.name}
                   </Typography>
                   <Button style={{height:35,width:130,marginLeft:'20px',marginTop:'40px',borderRadius:8,backgroundColor:"lightgray",border:'1px solid lightgray',color:"black",display: 'flex',justifyContent:"center",alignItems:"center"}}>Edit Profile</Button>
                   <Button style={{height:35,width:130,marginLeft:'9px',marginTop:'40px',borderRadius:8,backgroundColor:"lightgray",border:'1px solid lightgray',color:"black",display: 'flex',justifyContent:"center",alignItems:"center"}}>View Archieve</Button>
                   <Button style={{height:35,width:40,marginLeft:'9px',marginTop:'40px',borderRadius:8,borderRadius:8,backgroundColor:"white",border:'1px solid white',color:"black",display: 'flex',justifyContent:"center",alignItems:"center"}}><SettingsIcon/></Button>
                   
               </div>
               <div style={{display:'flex'}}>
               <h6 style={{marginLeft:'100px',marginTop:'22px'}}>{myPost.length} posts</h6>
               <h6 style={{marginLeft:'30px',marginTop:'22px'}}>{followersLength} followers</h6>
               <h6 style={{marginLeft:'30px',marginTop:'22px'}}>{followingLength} following</h6>
               </div>
               <div>
               <h6 style={{marginLeft:'100px',marginTop:'15px'}}></h6> 
               <h6 style={{marginLeft:'100px',marginTop:'1px'}}>Bio</h6>
               </div>  
           </Container>
         </div>
         {/* div ends of avatar and container */}
         {/* highlights component */}
         <Container style={{marginTop:'3rem' ,marginLeft:'190px', overflow:'auto'}} >
          <Stack direction="row" spacing={2}>
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       /> 
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />
                 <Avatar
                         size="lg"
                         src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                         sx={{ p: 0.5, border: '2px solid', borderColor: 'red' ,width:80, height:80 }}
                       />                                     
                       
           </Stack>
         </Container>
         {/* highlight ends here  */}
   
       {/* post components started */}
         <Container >
           <div style={{display:'flex',marginTop:'3rem' ,marginLeft:'190px', overflow:'auto'}} className="border-top">
           <Button style={{height:35,width:60,marginLeft:'300px',marginTop:'10px',borderRadius:8,backgroundColor:"white",border:'1px solid white',color:"black",display: 'flex',justifyContent:"center",alignItems:"center"}}><GridOnIcon fontSize="small"/>POSTS</Button>
           <Button style={{height:35,width:60,marginLeft:'50px',marginTop:'10px',borderRadius:8,backgroundColor:"white",border:'1px solid white',color:"black",display: 'flex',justifyContent:"center",alignItems:"center"}}><LiveTvIcon fontSize="small"/>REELS</Button>
           <Button style={{height:35,width:60,marginLeft:'50px',marginTop:'10px',borderRadius:8,backgroundColor:"white",border:'1px solid white',color:"black",display: 'flex',justifyContent:"center",alignItems:"center"}}><PermContactCalendarIcon fontSize="small"/>TAGGED</Button>
           
           </div>
         </Container >

         {/* user posts */}
         <div className={Styles.userpostdiv_UserProfile}>
           <Row xs={1} sm={2}  md={3}  className="g-2"> 
                 {myPost.map((item,idx) => (
                     <Col  xs={12} sm={6} md={4} key={idx}>
                       <img  src={item.photo} alt={item.title}  style={{height:'18rem',width:'19rem'}}/>
                     </Col>  
                     ))}
           </Row>
         </div>
 </div>







</Col >

</Row>
</div>

   
}

export default MyProfile