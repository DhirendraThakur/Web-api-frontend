import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const UpdateProfile =()=>{

    const {userid} = useParams();

    const [myprofile, setMyprofile] =useState([]);
    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[address, setAddress] = useState('');
    const[phone, setPhone] = useState('');
    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }
    useEffect(()=>{
      
        axios.get("http://localhost:90/profile/one"+userid, config)
        .then(resultprof=>{
            console.log(resultprof.data)
            setMyprofile(resultprof.data)
            setUsername(resultprof.data.productname)
            setPassword(resultprof.data.producttype)
            setAddress(resultprof.data.productprice)
            setPhone(resultprof.data.productprice)
        })
        .catch (e=>{

        })
    },[])

    //to update profile

    const profileupdate=(e)=>{
        e.preventDefault();
        const profileData ={
            userid, username, password, phone, address
        }
        axios.put("http://localhost:90//customer/profile/update", profileData, config)
    }

    return(
        <div className="container">
           

            <div className="row">
                <div className="col-md-6 updatesupplementleft">
                    <h2>myprofile.username</h2>
                    <p>password: {myprofile.password}</p>
                    <p>Phone : {myprofile.phone}</p>
                    <p>Address : {myprofile.address}</p>
                </div>

                <div className=" col-md-6">
                    <h2 className="updatesup">Profile Update</h2>
                    <form className="updatesuppright">
                        <div className="form-group">
                            <label className="updatesuptext">Username:</label>
                            <input type="text" className="form-control"
                            value={username}
                            onChange={e=>{setUsername(e.target.value)}}
                            />

                            <label>Password:</label>
                            <input type="text" className="form-control"
                            value={password}
                            onChange={e=>{setPassword(e.target.value)}}
                            />

                            <label>Address:</label>
                            <input type="text" className="form-control"
                            value={address}
                            onChange={e=>{setAddress(e.target.value)}}
                            />
                            <label>Phone:</label>
                            <input type="text" className="form-control"
                            value={phone}
                            onChange={e=>{setPhone(e.target.value)}}
                            />

                        </div>
                        <input type="submit" onClick={profileupdate}/>
                    </form>

                </div>
            </div>

        </div>
    )
}
export default UpdateProfile