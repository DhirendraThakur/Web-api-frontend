import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct =()=>{
    const {pid} = useParams();
    const [myproduct, setMyproduct] = useState([]);
    const [productname, setProductname]= useState('');
    const [producttype, setProducttype] = useState('');
    const [productprice, setProductprice] = useState('');
    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }
    useEffect(()=>{

        axios.get("http://localhost:90/product/one/"+pid, config)
        .then(resultpro=>{
            console.log(resultpro.data)
            setMyproduct(resultpro.data)
            setProductname(resultpro.data.productname)
            setProducttype(resultpro.data.producttype)
            setProductprice(resultpro.data.productprice)
        })
        .catch (e=>{

        },[])
    })

    //to update product
    const productupdate =(e)=>{
        e.preventDefault();
        const productdata ={
            pid, productname, producttype, productprice
        }
        axios.put("http://localhost:90/product/update", productdata, config)

    }

    return(
        <div className="container">
           

            <div className="row">
                <div className="col-md-6 updatesupplementleft">
                    <h2>myproduct.productname</h2>
                    <p>Product rate: {myproduct.productprice}</p>
                    <p>Product type : {myproduct.producttype}</p>
                </div>

                <div className=" col-md-6">
                    <h2 className="updatesup">Product Upadate</h2>
                    <form className="updatesuppright">
                        <div className="form-group">
                            <label className="updatesuptext">Product Name:</label>
                            <input type="text" className="form-control"
                            value={productname}
                            onChange={e=>{setProductname(e.target.value)}}
                            />

                            <label>Product Rate:</label>
                            <input type="text" className="form-control"
                            value={productprice}
                            onChange={e=>{setProductprice(e.target.value)}}
                            />

                            <label>Product Type:</label>
                            <input type="text" className="form-control"
                            value={producttype}
                            onChange={e=>{setProducttype(e.target.value)}}
                            />
                        </div>
                        <input type="submit" onClick={productupdate}/>
                    </form>

                </div>
            </div>

        </div>
    )
}
export default UpdateProduct