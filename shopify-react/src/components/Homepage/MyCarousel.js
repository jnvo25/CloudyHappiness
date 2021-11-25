import Button from "@restart/ui/esm/Button";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import './MyCarousel.css';

import './Homepage';

//Discord link is a temp one until I ask Joanna for the non-expiring one
//Need to use better png for the cloud background
//Need to decide on how big the carousel will be
//Figure out what colors/font sizes will work best
function MyCarousel() {
  return (
    <div id="mycarouseldiv">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="chcTitle">#CLOUDYHAPPINESSCLUB</div>
      <br></br>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="slideImage"
            src="https://cdn.shopify.com/s/files/1/0601/3599/7661/files/cloudy_happiness_postcards.png?v=1635625280"
            alt="First slide"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="slideImage"
            src="https://cdn.shopify.com/s/files/1/0601/3599/7661/files/Cloudy_Happiness_Table_Runner_2.png?v=1635625146"
            alt="Second slide"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="slideImage"
            src="https://cdn.shopify.com/s/files/1/0601/3599/7661/files/my_happiness_1.png?v=1635625219"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br></br>
      <a id="discordLink" href="https://discord.gg/SRUAk3GZ"> 
        <button id="joinClub">Join the club on Discord!</button>
      </a>
      <br></br>
    </div>
  );
}
export default MyCarousel;