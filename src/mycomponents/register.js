import { useState } from "react";

import axios from "axios";
 const Register =()=> {
     const [username, setusername]= useState('');
     const [password, setpassword]=useState('');
     const [phone, setphone]= useState('');
     const[address,setaddress]= useState('');
     const [msg, setMsg] =useState('');

     const customerRegister = (e)=>{
         e.preventDefault();
         const userData ={username,password,address,phone};
         axios.post("http://localhost:90/customer/register", userData)
         .then(result=>{setMsg(result.data.message)
        console.log (result.data)
        }
         
         )
         .catch()
     }
     return(
         <div className="row">
             <div className="container">
                 <div className="col-md-4">

                     <form className="form-group">
                         <h1 className="reghed" >Registration</h1> 
                         <br/>
                         <div className="form-group">

                         <label>Username</label>
                         <input type="text" className='form-control' placeholder="Enter Customer name"
                         value={username}
                         onChange={(e)=> setusername(e.target.value)}
                         />
                         </div>
                         <br/>

                         <div className="form-group">
                        <label>password</label>
                        <input type="password" className='form-control'placeholder="Enter Password"
                            value={password}
                            onChange={(e)=> setpassword(e.target.value)}
                                    />
                                    </div>
                                    <br/>
                            <div className="form-group">
                         <label>address</label>
                         <input type="text" className='form-control'placeholder="Enter Address"
                         value={address}
                         onChange={(e)=> setaddress(e.target.value)}
                         />
                         </div>
                         <br/>

                         <div className="form-group">
                            <label>phone</label>
                        <input type="text" className='form-control' placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e)=> setphone(e.target.value)}
                        /> 
                        </div>
                        <br/>
            <button type="Submit" class ="btn btn-primary" onClick={customerRegister}>Submit</button>
                     </form>
                 </div>  
                 {msg}          
             </div>
         </div>
     )
 }
 export default Register