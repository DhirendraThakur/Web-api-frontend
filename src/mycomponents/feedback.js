import { useState } from "react";
import axios from "axios";

const AddFeedback =()=>{
    const[feedbackername, setFeedbackername] =useState('');
    const[feedbackdetail, setFeedbackdetail] = useState('');
    const [msg, setMsg] =useState('');

    const insertfeedback =(e)=>{
        e.preventDefault();
        const feeddata = {feedbackername, feedbackdetail};
        axios.post("http://localhost:90/feedback/add", feeddata)
        .then(result=>{setMsg(result.data.message)
            console.log (result.data)
        }
         
        )
        .catch()
    }
    return(
        (
            <div className="row ">
                <div className="container ">
                    <div className="col-md-4">
   
                        <form className="form-group feedbackform">
                            <h1 className="reghed" >Feed-Back</h1> 
                            
                            <h5 className="feedmsg">{msg}</h5>
                            <br/>
                            <div className="form-group registertext" >
   
                            <label>Username</label>
                            <input type="text" className='form-control registertextbox'
                            value={feedbackername}
                            onChange={(e)=> setFeedbackername(e.target.value)}
                            />
                            </div>
                            <br/>
   
                            <div className="form-group registertext">
                           <label>Your feedback</label>
                           <br/>
                           <textarea type="text"  className="form-control registertextbox"
                            value={feedbackdetail}
                            onChange={(e)=> setFeedbackdetail(e.target.value)}
                           ></textarea>
                           {/* <input type="textarea" className='form-control registertextbox'
                               value={feedbackdetail}
                               onChange={(e)=> setFeedbackdetail(e.target.value)}
                                       /> */}
                                       </div>
                                                               <div className="registerbot">
   
                           <button type="Submit" class ="btn btn-primary " onClick={insertfeedback}>Upload</button>                            
                           </div>
               
                        </form>
                    </div>  
                    {msg}          
                </div>
            </div>
    ))
    
}
export default AddFeedback