import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const UpdateSupplement =()=>{

    const {sid} = useParams();
    console.log(sid)

    const[mysupplement, setMysupplement] = useState([]);
    const[supplementname, setSupplementname]= useState('');
    const[supplementtype, setSupplementtype]= useState('');
    const [supplementrate, setSupplmentrate] = useState('');

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:90/supplement/one/"+sid, config)
        .then (resultsup=>{
            console.log(resultsup.data)
            setMysupplement(resultsup.data)
            setSupplementname(resultsup.data.supplementname)
            setSupplementtype(resultsup.data.supplementtype)
            setSupplmentrate(resultsup.data.supplmentrate)
            

        })
        .catch (e=>{

        },[])
    },)

    //to update supplement
    const updatesupplements =(e)=>{
        e.preventDefault();
        const sudata ={
            sid, supplementname, supplementrate , supplementtype
        }
        axios.put ("http://localhost:90/supplement/update", sudata, config)
    }


    return(
        <div className="container">
           

            <div className="row">
                <div className="col-md-6">
                    <h2>{mysupplement.supplementname}</h2>
                    <p>Supplement rate: {mysupplement.supplementrate}</p>
                    <p>Supplement type : {mysupplement.supplementtype}</p>
                </div>

                <div className=" col-md-6">
                    <h2>Supplement Upadate</h2>
                    <form>
                        <div className="form-group">
                            <label>Supplement Name</label>
                            <input type="text" className="form-control"
                            value={supplementname}
                            onChange={e=>{setSupplementname(e.target.value)}}
                            />

                            <label>Supplement Rate</label>
                            <input type="text" className="form-control"
                            value={supplementrate}
                            onChange={e=>{setSupplmentrate(e.target.value)}}
                            />

                            <label>Supplement Type</label>
                            <input type="text" className="form-control"
                            value={supplementtype}
                            onChange={e=>{setSupplementtype(e.target.value)}}
                            />
                        </div>
                        <input type="submit" onClick={updatesupplements}/>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default UpdateSupplement;