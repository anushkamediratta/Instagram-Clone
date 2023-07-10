
// import { Container } from "react-bootstrap"
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import ExploreIcon from '@mui/icons-material/Explore';
// import LiveTvIcon from '@mui/icons-material/LiveTv';
// import MessageIcon from '@mui/icons-material/Message';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import PersonIcon from '@mui/icons-material/Person';
// import { Link } from "react-router-dom"
// import { Typography } from "@mui/material";
// import { useState } from "react";
// import { Drawer } from "@mui/material";
// import SearchPage from "./SearchPage";


// const NavBar=()=>{
//     // usestate for Search-bar
// const [isOpen, setIsOpen] = useState(false);

// // function for changing the state of Drawer
// const toggleDrawer = () => {
//   setIsOpen(!isOpen);
//   console.log("value of state after clicking",isOpen);
// };
// const drawerStyle = {
//     width: '250px',
//     height: '100vh',
//     backgroundColor: 'white',
//     position: 'fixed',
//     top: 0,
//     border:'1px solid lightgray',


//     left: isOpen ? 150: '-250px',
//     transition: 'left 0.3s ease-in-out',
//   };


     
//     return <div >
//          <Typography variant="h4" style={{marginBottom:'2rem',marginLeft:'1rem',marginTop:'2rem',fontWeight: 'bold',fontSize: '2.2rem',
//     fontFamily: 'Gabriola, cursive'}}>Instagram</Typography>
        
//         <Container style={{display:'flex'}}>
//             <HomeIcon fontSize="large"/>
//             <Link to='/MainScreen' className="link">Home
//             </Link>
//         </Container>
//         <br/>
//         <Container style={{display:'flex'}}>
//             <SearchIcon fontSize="large"/>
//             <Link  onClick={toggleDrawer} className="link" >Search
//             <div style={drawerStyle}>
//                 <SearchPage/>
//             </div>
//             </Link>

//         </Container>
//         <br/>
//         <Container style={{display:'flex'}}>
//             <ExploreIcon fontSize="large"/>
//             <Link className="link">Explore
//             </Link>
//         </Container>
//         <br/>
//         <Container style={{display:'flex'}}>
//             <LiveTvIcon fontSize="large"/>
//             <Link className="link">Reels
//             </Link>
//         </Container>
//         <br/>
//         <Container style={{display:'flex'}}>
//             <MessageIcon fontSize="large"/>
//             <Link className="link">Messages
//             </Link>
//         </Container>
//         <br/>
//         <Container style={{display:'flex'}}>
//             <FavoriteBorderIcon fontSize="large"/>
//             <Link className="link">Notifications
//             </Link>
//         </Container>
//         <br/>
//         <Container style={{display:'flex'}}>
//             <AddCircleOutlineIcon fontSize="large"/>
//             <Link className="link">Create
//             </Link>
//         </Container>
//         <br/>
//         <Container style={{display:'flex'}}>
//             <PersonIcon fontSize="large"/>
//             <Link className="link">Profile
//             </Link>
//         </Container>
//         <br/>
//     </div>
    

// }

// export default NavBar

import { Container } from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Drawer } from "@mui/material";
import SearchPage from "./SearchPage";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const drawerStyle = {
    width: '350px',
    height: '100vh',
    backgroundColor: 'white',
    position: 'fixed',
    top: 0,
    border: ' 1px  solid lightgray',
    borderRadius: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
    left: isOpen ? '48px' : '-250px',
    zIndex: 999, // Adjust the z-index to make sure the drawer appears above other elements
    transition: 'left 0.3s ease-in-out',
  };

  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: '2rem', marginLeft: '1rem', marginTop: '2rem', fontWeight: 'bold', fontSize: '2.2rem', fontFamily: 'Gabriola, cursive' }}>Instagram</Typography>

      <Container style={{ display: 'flex' }}>
        <HomeIcon fontSize="large" />
        <Link to='/MainScreen' className="link">Home</Link>
      </Container>
      <br />
      <Container style={{ display: 'flex' }}>
        <SearchIcon fontSize="large" onClick={toggleDrawer} />
        <Link  className="link">Search</Link>
      </Container>
      <br />
      <Container style={{display:'flex'}}>
         <ExploreIcon fontSize="large"/>
           <Link className="link">Explore
             </Link>
         </Container>
        <br/>
        <Container style={{display:'flex'}}>
            <LiveTvIcon fontSize="large"/>
             <Link className="link">Reels
             </Link>
         </Container>
        <br/>
         <Container style={{display:'flex'}}>
            <MessageIcon fontSize="large"/>
            <Link className="link">Messages
             </Link>
         </Container>
        <br/>
         <Container style={{display:'flex'}}>
             <FavoriteBorderIcon fontSize="large"/>
            <Link className="link">Notifications
            </Link>
        </Container>
         <br/>
         <Container style={{display:'flex'}}>
             <AddCircleOutlineIcon fontSize="large"/>
             <Link className="link">Create
             </Link>
         </Container>
         <br/>
         <Container style={{display:'flex'}}>
             <PersonIcon fontSize="large"/>
             <Link className="link">Profile
             </Link>
         </Container>
      {/* Rest of the code */}
      {/* ... */}
      {/* ... */}

      
      <Drawer
        open={isOpen}
        anchor="left"
        onClose={toggleDrawer}
        variant="persistent"
      >
        <div style={drawerStyle}>
          <SearchPage />
        </div>
      </Drawer>
    </div>
  );
}

export default NavBar;
