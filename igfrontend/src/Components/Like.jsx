import { useEffect, useState } from "react"
import { Container,Card,Button } from "react-bootstrap"

const Like=()=>{
    const[post,setPost]=useState([])
    const[likes,setLikes]=useState([])
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
    const onLikePost=()=>{
        setLikes(parseInt(likes)+1);
    }
    console.log(likes)

    return<Container>
        <center>

       
{post.map((item,idx)=>(
  
    <Card key={idx} style={{ width: '20rem',height:'40rem',marginBottom:'3rem', marginTop:'2rem'}}>
     <Card.Img variant="top" src={item.photo} style={{height: '21rem'}}/>
     <Card.Body style={{height: '12rem'}}>
       <Card.Title>{item.title}</Card.Title>
       <Card.Text>
        {item.body}
       </Card.Text>
       <Card.Text>Posted By id-{item._id}
                    </Card.Text>
      <Card.Text>
          PostedBy-{item.postedBy.name}
      
      </Card.Text>
      <Button variant="primary"className="btn-danger" type="submit" onClick={onLikePost}>
        Like Post
      </Button>
     </Card.Body>
   </Card>
))}
 </center>
    </Container>
}
export default Like