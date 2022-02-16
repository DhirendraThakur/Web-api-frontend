//import { MoneyOffCsredRounded } from "@mui/icons-material";
import { Component } from "react";
//import { Collapse } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
{/* git push -u origin main */}
//import SimpleImageSlider from "react-simple-image-slider";

           

//import {IconButton} from '@material-ui/core';
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
class Home extends Component{
    
    render(){
        
        return(
                
            <div className="backimage">
                <h1 className="hometop">Welcome to <br/>our <br/>Fitness page.</h1>
            




{/* 
           <div className=" homesecond">               
                <div className="row">
                    <p>asdasda</p>
                </div>
           </div> */}
<div className="row">
<Card  style={{ width: '18rem' }} className="homesecond">
  <Card.Img variant="top"src="image/panda.jpg"/>
  <Card.Body >
    <Card.Title>Supplement</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


<Card  style={{ width: '18rem' }} className="homethird">
  <Card.Img variant="top"src="image/panda.jpg"/>
  <Card.Body >
    <Card.Title>Supplement</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card  style={{ width: '18rem' }} className="homethird">
  <Card.Img variant="top"src="image/panda.jpg"/>
  <Card.Body >
    <Card.Title>Supplement</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        
</div>









           
            
            
            </div>
           
           
            

           
           
            
        )
    }
}
export default Home;