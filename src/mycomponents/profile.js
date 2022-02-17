import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Showprofile =()=>{

    const [profiledata, setProfiledata] = useState([]);
    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:90/profile/one", config)
        .then(result=>{
            setProfiledata(result.data)
        })
        .catch(e=>{
            console.log(e)
        })

    });

    const profileDelete=(userid)=>{

        axios.delete("http://localhost:90/customer/profile/delete"+userid, config)
        .then(result=>{console.log(result.data)})
        .catch()
    }
return(


    <div className="container">
    <div className="row">

        {
            profiledata.map(singleData=>{
                return(
                    <div className="col-md-4 showproductbox">
                        <h2>username: {singleData.username}</h2>
                        
                        <p> Password: {singleData.password}</p>
                        <p> Address: {singleData.address}</p>
                        <p> Phone: {singleData.phone}</p>
                        <button onClick={()=>{profileDelete(singleData._id)}}>Delete</button>
                        <Link to ={'/UpdateProfile/'+singleData._id}>Edit..</Link>
                        </div>
                )
            })
        }
        
    </div>
    </div>

)


}

export default Showprofile