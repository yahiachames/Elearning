import React, { Component } from 'react';
import {Carousel} from "react-bootstrap"


 
class Home extends Component {
    render() {
        return (
         
            <div className="container page align-content-center"  >
              <div className="row justify-content-center"   >
                <div className="col-auto"   >    <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-auto h-auto"
                src="https://miro.medium.com/max/1200/0*OHZ-Hc4aANqMq141.png"
                alt="Five Points"
              />
              <Carousel.Caption>
                <h3>Five Point</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto h-auto"
                src="https://miro.medium.com/max/1200/0*OHZ-Hc4aANqMq141.png"
                alt="We Are"
              />
          
              <Carousel.Caption>
                <h3>We Are</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto h-auto"
                src="https://miro.medium.com/max/1200/0*OHZ-Hc4aANqMq141.png"
                alt="Join Us"
              />
          
              <Carousel.Caption  >
                <h3    >Join Us</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> </div>
              </div>
            </div>
                
        );
    }
}


 
export default Home ;