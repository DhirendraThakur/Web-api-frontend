import { useState } from "react";
import axios from "axios";

const Addproduct=()=>{
    const [productname, setProductname] = useState('');
    const [producttype, setProducttype] = useState('');
    const[productprice, setProductprice] = useState('');
    const [message, setMessage] = useState('');
    const[pimage, setPimage] = useState('');

    const config ={
        headers : {
            Authorization : 'Bearer ' + localStorage.getItem('token')
        }
    }

    const insertproduct=(e)=>{
        e.preventDefault();
        const productData = new FormData();
        productData.append('productname', productname);
        productData.append('producttype', producttype);
        productData.append('productprice', productprice);
        productData.append('product_image', pimage);

        axios.post("http://localhost:90/product/add", productData, config)
        .then(productresult=>{
            if(productresult.data.success){
                setMessage("Product Inserted sucessfully!!");
                console.log(productresult)
            }
            else{
                setMessage("Something went wrong!!");
            }
        })
        .catch(e=>{
            setMessage("Somethig went wrong!!");
        });
    }

    //html part is here
    
    return(
        <div className="container">
            <div className="row">

                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h2 className="heading-h2-all">Add Product</h2>
                    <p>{message}</p>
                    <form>
                        
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" className="form-control"
                            
                            value={productname}
                            onChange={e=>{setProductname(e.target.value)}}
                            />
                        </div>

                        <div className="form-group">
                            <label>Product Type</label>
                            <input type="text" className="form-control"
                            
                            value={producttype}
                            onChange={e=>{setProducttype(e.target.value)}}
                            />
                        </div>

                        <div className="form-group">
                            <label>Product Price</label>
                            <input type="text" className="form-control"
                            
                            value={productprice}
                            onChange={e=>{setProductprice(e.target.value)}}
                            />
                        </div>

                        <div className="form-group">
                            <label>Product Image</label>
                            <input type="file" className="form-control"
                            onChange={e=>setPimage(e.target.files[0])}
                            />
                        </div>

                        <p><input type='submit' className="btn btn-success" onClick={insertproduct} /></p>
                    </form>
                </div>
            </div>

        </div>
    )
}



export default Addproduct;