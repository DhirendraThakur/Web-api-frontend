import { useState } from "react";
import axios from "axios";

const AddSupplement=()=>{
    const [supplementname, setSupplementname] = useState('');
    const[supplementtype, setSuppltmenttype] = useState('');
    const[supplementrate, setSupplementrate] = useState('');
    const [supimage, setSupimage] =useState('');
const [message, setMessage] = useState('');

const config ={
    headers : {
        Authorization : 'Bearer '+ localStorage.getItem('token')

    }}


    const addSupplement=(e)=>{
        e.preventDefault();
        // const suppData={
        //     supplementname,
        //     supplementtype,
        //     supplementrate
        // }

        
       

const suppData = new FormData();
suppData.append('supplementname', supplementname);
suppData.append('supplementtype', supplementtype);
suppData.append('supplementrate', supplementrate);
suppData.append('supplement_image', supimage);

        

        
axios.post("http://localhost:90/supplement/add", suppData, config)
.then(resultsup=>{
 if(resultsup.data.success){
 setMessage("supplement Inserted Successfully");
console.log(resultsup.data)
            }
           
            else{
                setMessage("Someting went wrong!!");

            }
        })
        .catch(e=>{
            setMessage("Somethings went wrong!!");

        });
    }

    return(
<div className="container ">
    <div className="row subbackground">
        <div className="col-md-6"></div>
        <div className="col-md-6 ">
            <h2>Add Supplement</h2>
            <p>{message}</p>
            <form className="supplementaddform">
            <div className="form-group supplementaddtext"  >
                            <label>Supplement Name:</label>
                            <input type="text" className="form-control"
                            value={supplementname}
                            onChange={e=>{setSupplementname(e.target.value)}}
                            />
                        </div>

                        <div className="form-group supplementaddtext">
                            <label>Supplement Type:</label>
                            <input type="text" className="form-control"
                            value={supplementtype}
                            onChange={e=>{setSuppltmenttype(e.target.value)}}
                            />
                        </div>        
                        <div className="form-group supplementaddtext">
                            <label>Supplement Rate</label>
                            <input type="text" className="form-control"
                            value={supplementrate}
                            onChange={e=>{setSupplementrate(e.target.value)}}
                            />
                        </div>  

                        <div className="form-group supplementaddtext">
                        <label>Supplement Image</label>
                        <input type='file' className="form-control"
                        onChange={e=>setSupimage(e.target.files[0])}/>

                        </div>
                        <br/>  
                        <p className="supplementbot"><input type='Submit' className="btn btn-success" onClick={addSupplement} /></p>
            </form>

        </div>
    </div>
</div>
    )
}
export default AddSupplement;