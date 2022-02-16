import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const ShowProduct =()=>{
    const [prodata, setProdata] = useState([]);
    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }

    useEffect(()=>{

        axios.get("http://localhost:90/product/logged", config)
        .then(result=>{
            setProdata(result.data)
        })
        .catch(e=>{
            console.log(e)
        })
    });

    const deleteProduct=(pid)=>{
        axios.delete("http://localhost:90product/delete/"+pid, config)
        .then(result=>{console.log(result.data)})
        .catch()
    }

    return(
        <div className="container">
            <div className="row">

                {
                    prodata.map(singleData=>{
                        return(
                            <div className="col-md-4 showproductbox">
                                <h2>Product Name: {singleData.productname}</h2>
                                <p><img src={'http://localhost:90/'+singleData.pimage} className="img-fluid"/></p>
                                <p> Product Price: {singleData.productprice}</p>
                                <p> Product Type: {singleData.producttype}</p>
                                <button onClick={()=>{deleteProduct(singleData._id)}}>Delete</button>
                                <Link to ={'/updateproduct/'+singleData._id}>Read More..</Link>
                                </div>
                        )
                    })
                }
                
            </div>
            </div>
        
    )
}
export default ShowProduct;