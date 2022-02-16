import { Component } from "react";

//import Home from "./home";
import Register  from "./register";


import Login from "./login";
import AddSupplement from "./AddSupplement";
//import updateSupplement from "./updateSupplement";
import UpdateSupplement from "./updateSupplement";
import Showsupp from "./showSupplement";
import Addproduct from "./Addproduct";
import ShowProduct from "./showproduct";


import AddFeedback from "./feedback";
import {Route, Routes } from "react-router-dom";
import UpdateProduct from "./updateProduct";
//import { Home } from "@mui/icons-material";
import Home from "./home";

class Mid extends Component{
    render(){
        return(
            <div>

                
                <Routes>
                <Route path='/' element={<Home/>} />
               
                <Route path='customer/register' element={<Register/>} />
                <Route path='/about' element={<about/>} />
                <Route path ='customer/login' element ={<Login/>}/>
                <Route path= '/Addsupplement' element={<AddSupplement/>}/>
                <Route path ='/updatesupplement/:sid' element={<UpdateSupplement/>}/>
                <Route path ='/showsupplement' element ={<Showsupp/>}/>   
                <Route path ='/addproduct' element={<Addproduct/>}/>   
                <Route path="/showproduct" element={<ShowProduct/>}/>
                <Route path="/updateproduct/:pid" element ={<UpdateProduct/>}/>
                <Route path="/Feedback" element ={<AddFeedback/>}/>
                
                </Routes>

            </div>

        )
    }
}
export default Mid;