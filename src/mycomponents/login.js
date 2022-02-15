import { useState } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

const Login =()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const customerLogin= (e)=>{
        e.preventDefault();
        const userData = {
            username, password
        }
        axios.post("http://localhost:90/customer/login", userData)
        .then (resultLog=>{
            if(resultLog.data.token){
                localStorage.setItem('token', resultLog.data.token);
                    console.log (resultLog.data.token)
                    setMessage ("Succesfuly login");
                    window.location.replace('/');
                  
                    
            }
            else{
                setMessage ("Invalid Crenditials")
            }
        }
        
        )
        .catch()
    }
    return(
        
        
        <div className="container " >
            <div className="row">
                <div className="col-md-6">
                
                </div>
                <div className="col-md-6">
                    {message}
                    <br/>
                    <form action="" align="left"  className ="loginform" >
                    <h1 className="loginnext" >LOGIN</h1>
                        <div className="form-group logintext" >
                            <label className="">Username:</label>
                            <input type= "text" className="form-control logintextbox"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}/>
                            
                        </div>
                        <br/>

                        <div className="form-group logintext">
                            <label className="">password:</label>
                            <input type= "password" className="form-control logintextbox"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}/>
                            
                        </div>
                        <br/>
                        <br/>
                        <div className="form-group loginbot">
                            <input type ="Submit" className="btn btn-success"
                            onClick={customerLogin}
                            />
                        </div>

                    </form>
                </div>
                <div className="col-md-4">
                    
                </div>
            </div>
        </div>
        
        
    )
}
export default Login;