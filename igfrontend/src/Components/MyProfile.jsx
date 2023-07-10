import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"


const MyProfile=()=>{

    const[myPost,setMyPost]=useState([])
    useEffect(()=>{
    fetch('http://localhost:4000/myPost',{
    method:'get',
    headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
    }
}).then(res => res.json())

.then(data=> setMyPost(data))
    },[])

   return <Container>
    <center>

    
        <h1>My Post</h1>
        <h1>No. of Posts {myPost.length}</h1>
        <Grid container spacing={2} >
      {myPost.map((item,idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <img  src={item.photo} alt={item.title} />
        </Grid>
      ))}
    </Grid>
</center>
   </Container>

}

export default MyProfile