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
    <div id="carousel_discord">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="slideImage"
            src="https://cdn.shopify.com/s/files/1/0601/3599/7661/files/cloudy_happiness_table_runner.png?v=1637971932"
            alt="First slide"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="slideImage"
            src="https://cdn.shopify.com/s/files/1/0601/3599/7661/files/cloudy_happiness_postcards.png?v=1635625280"
            alt="Second slide"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="slideImage"
            src="https://cdn.shopify.com/s/files/1/0601/3599/7661/files/Cloudy_Happiness_Table_Runner_2.png?v=1635625146"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br></br>
      <a id="discordLink" href="https://discord.gg/PpnrEWhNgm"> 
        <button id="joinClub">Join the club on Discord!</button>
      </a>
      <br></br>
    </div>
  );
}
export default MyCarousel;