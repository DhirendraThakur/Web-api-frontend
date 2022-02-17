//import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import React, {useState} from 'react';
import dataSlider from './dataslider';
import BtnSlider from "./btnslider";


{/* git push -u origin main */}



const Home =()=> {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }


    return (

        <div className="backimage">
                         <h1 className="hometop">Welcome to <br/>our <br/>Fitness page.</h1>
        
         <div className="row">
         <Card  style={{ width: '18rem' }} className="homesecond">
           <Card.Img variant="top"src="https://i.etsystatic.com/19146535/r/il/983380/2134356202/il_fullxfull.2134356202_hij3.jpg"/>
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
           <Card.Img variant="top"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTuJs72vzfRTp5lRLFj9GAgROfBWcc1vi3sPhM9p8D_0ZvIJrXwzRfU8J-V8Hd0Z6VTs&usqp=CAU"/>
           <Card.Body >
             <Card.Title>Product</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>
        
         <Card  style={{ width: '18rem' }} className="homethird">
           <Card.Img variant="top"src="https://rukminim1.flixcart.com/image/416/416/poster/x/f/w/abstract-cartoon-body-builder-psu000003283-small-original-imaekd9hvzgchpmb.jpeg?q=70"/>
          <Card.Body >
             <Card.Title>Workout</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>
                
         </div>
        


        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        {/* <img 
                        src={process.env.PUBLIC_URL + `./Imgs/img ${index + 1}.jpg`} 
                        /> */}

<img src={process.env.PUBLIC_URL + `/Imgs/panda${index + 1}.jpg`}

                        />

                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
   
    





</div>
    
        )    }  

export default Home