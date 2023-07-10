import { useState } from "react"
import { Container, Form,Button } from "react-bootstrap"

const CreatePost = () =>{
    const[title,setTitle]= useState('')
    const[body,setBody]=useState('')
    const[pic,setPic]=useState('')

    const onSubmitHandler = e=>{
        e.preventDefault()
        fetch('http://localhost:4000/createPost',{
            method:"Post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                pic
            })

        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return <Container>
        <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={e => setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Body</Form.Label>
        <Form.Control type="text" placeholder="Enter Body" value={body} onChange={e => setBody(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pic</Form.Label>
        <Form.Control type="text" placeholder="Enter Pic" value={pic} onChange={e => setPic(e.target.value)}/>
      </Form.Group>
      <Button variant="primary"className="btn-danger" type="submit">
        Create Post
      </Button>
        </Form>
    </Container>
}

export default CreatePost