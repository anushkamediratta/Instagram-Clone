import * as ReactDOM from "react-dom/client"
import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import AllPost from "./Components/AllPost"
import CreatePost from "./Components/CreatePost"
import Like from "./Components/Like"
import Login from "./Components/Login"
import MyProfile from "./Components/MyProfile"
import InstaPost from "./Components/PostCard"
import Signup from "./Components/Signup"
import MainScreen from "./Components/MainScreen";
import SearchPage from "./Components/SearchPage";


const App = ()=>{
  return <BrowserRouter>
  
  
    <Routes>
     <Route exact path="/" element={<Signup/>} /> 
    <Route path="/login" element={<Login />} />  
    <Route path="/MainScreen" element={<MainScreen/>}/>
     {/* <Route path="/myPost" element={<MyProfile />} />  */}
    {/* <Route path="/allpost" element={<AllPost/>}/> */}
        {/* <Route path="/SearchPage" element={<SearchPage/>}/> */}
    <Route path="/CreatePost" element={<CreatePost/>}/>
    
    </Routes>
</BrowserRouter>
  // return <Signup/>
  // return <Login/>
  // // return <CreatePost/>
  // // return <AllPost/>
  // // return <MyProfile/>
  // // return <Like/>
  // // return <InstaPost/>
  // return <MainScreen/>
}
export default App