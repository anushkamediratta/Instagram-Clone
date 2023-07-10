import { IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { Col, Row } from "react-bootstrap";

const SearchPage=()=>{
return<div>
    <Col  className="border">
   
        <Row>
           
            <Typography  style={{marginLeft:'2rem' ,marginTop:'2rem',fontWeight: 'bold'}} variant="h5" >
            Search
          </Typography>
<TextField
  variant="outlined"
  label="Search"
  style={{
   
    backgroundColor:'#f2f2f2',
    width:"85%",
   marginTop:'2rem',
   marginBottom:'2rem',
    marginLeft:'2rem',
    
  }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton>
          <ClearIcon />
        </IconButton>
      </InputAdornment>
    ),
  }}
/>

</Row>


</Col>

        <h6 style={{marginTop:'1rem'}}>Recent</h6>

</div>
}
export default SearchPage