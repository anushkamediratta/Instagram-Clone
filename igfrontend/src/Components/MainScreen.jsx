import { Col, Row } from "react-bootstrap"
import AllPost from "./AllPost"
import NavBar from "./NavBar"
import '../App.css'
import RightNavbar from "./RightNavbar"
import Stories from "./Stories"

const MainScreen=()=>{

    return <div>
        <Row>
            <Col md={2}>
            <NavBar/>          
            </Col >
            <Col md={6} className="border">
            <Stories/>
            <AllPost/>     
            </Col >
            <Col md={4}>
            <RightNavbar/>         
            </Col>
        </Row>
    </div>

}

export default MainScreen