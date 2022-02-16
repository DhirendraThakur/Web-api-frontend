import { Component } from "react";
//import Login from "./login";



class Footer extends Component{

    render(){
        return(
            <div className="row" >
                <div className="container" >
            <div className="footerone">

<div className="footertwo">
    <div className="footerrow">

        <div className="footercolumn">
            <div className="footerheading"> About us</div>
            <div className="footerflink">Learn More About Us </div>
        </div>

        <div className="footercolumn">
            <div className="footerheading"> Adds</div>
            <div className="footerflink"> Online Games</div>
           
        </div>

        <div className="footercolumn">
            <div className="footerheading"> Shops</div>
            <div className="footerflink"> Buy Supplement</div>
           
        </div>

        

        <div className="footercolumn">
            <div className="footerheading"> Socail Media</div>
            
            <div className="footerflink"> 
        <i className='fab fa-facebook-f'>
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              </i>
            
            </div>

           
        </div>
    </div>

</div>

            </div>
            </div>
            </div>
        )
    }
}
export default Footer