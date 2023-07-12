import { Container } from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Drawer } from "@mui/material";
import SearchPage from "./SearchPage";
import CreatePost from "./CreatePost";

const NavBar = () => {
  // usestate for search bar
  const [isOpen, setIsOpen] = useState(false);
  // usestate for createpost
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
             <AddCircleOutlineIcon fontSize="large" />
             <Link  onClick={handleModalOpen} className="link" >Create
             </Link>
         </Container>
         {isModalOpen && <CreatePost handleClose={handleModalClose} />}
         <br/>
         <Container style={{display:'flex'}}>
             <PersonIcon fontSize="large"/>
             <Link to='/UserProfile' className="link">Profile
             </Link>
         </Container>
         <br/>
         <br/>
         <br/>
         <Container style={{display:'flex'}}>
         <DensityMediumIcon fontSize="large"/>
             <Link className="link">More
             </Link>
         </Container>
      
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
