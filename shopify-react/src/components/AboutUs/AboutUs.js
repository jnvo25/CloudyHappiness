import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CloudyNav from '../Template/CloudyNav';

function AboutUs() {

  useEffect(() => {
    window.scrollTo(0,0);
  })
  
  return (
    <div>
        <CloudyNav />
        <p>
            It's about drive, it's about power <br/>
            We stay hungry, we devour <br/>
            Put in the work, put in the hours and take what's ours <br/>
        </p>
    </div>
  );
}

export default AboutUs;
