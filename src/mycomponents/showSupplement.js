import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Showsupp =()=> {
    const [sdata, setSdata] = useState([]);

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }
    useEffect (()=>{
        axios.get("http://localhost:90/supplement/single", config)
        .then (result=>{
            setSdata(result.data)
        })
        .catch (e=>{
            console.log(e)
        })

    },);
    const deleteSupplement=(sid)=>{
        axios.delete("http://localhost:90/supplement/delete" +sid, config)
        .then(result =>{console.log(result.data)})
        .catch()
    }

    return(
        <div className="container">
<div className="row">

    {
        sdata.map(singleData=>{
            return(
                <div className="col-md-4">
                    <h2>Supplement Name : {singleData.supplementname}</h2>
                    <p className="Supplementrate"> Supplement rate: {singleData.supplementrate} </p>
                    <p> Product type: {singleData.supplementtype}</p>
                    <button onClick={()=>{deleteSupplement(singleData._id)}}>Delete</button>
              <Link to={'/updatesupplement/'+singleData._id}>Read More..</Link>
                </div>
            )
        },[])
    }
</div>

        </div>
    )

}

export default Showsupp