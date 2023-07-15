import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import InstaPost from "./PostCard"
// import { Card, Container,Button } from "react-bootstrap"

const AllPost=()=>{
    const[post,setPost]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/allPost',{
        method:"get",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(data=> setPost(data))

    },[])
   return <Container>
 {post.map((item,idx)=> <InstaPost  postDetail={item}  />    )}
   </Container>

}

export default AllPost