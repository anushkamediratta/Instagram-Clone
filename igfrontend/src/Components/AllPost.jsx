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
// react bootstrap card
    // return <Container>
    //     <center>

       
    //     {post.map((item,idx)=>(

          
    //         <Card key={idx} style={{ width: '18rem',marginBottom:'3rem', marginTop:'2rem'}}>
    //          <Card.Img variant="top" src={item.photo} style={{height: '21rem'}}/>
    //          <Card.Body style={{height: '12rem'}}>
    //            <Card.Title>{item.title}</Card.Title>
    //            <Card.Text>
    //             {item.body}
    //            </Card.Text>
    //            <Card.Text>Posted By id-{item._id}
    //                         </Card.Text>
    //           <Card.Text>
    //               PostedBy-{item.postedBy.name}
              
    //           </Card.Text>
    //          </Card.Body>
    //        </Card>
    //     ))}
    //      </center>
    // </Container>

}

export default AllPost