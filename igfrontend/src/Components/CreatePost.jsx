import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:550,
  bgcolor: 'background.paper',
  borderRadius:4,
  boxShadow: 24,
  p: 4,
};

const CreatePost = ({ handleClose }) => {
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

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Container>
        <h1>Create Post</h1>
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
      <Button variant="primary" className="btn-danger" type="submit">
        Create Post
      </Button>
        </Form>
    </Container>
        </Box>
      </Modal>
    </div>
  );
};

export default CreatePost;