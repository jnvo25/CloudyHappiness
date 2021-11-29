import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CloudyNav from '../Template/CloudyNav';

import './AboutUs.css';

function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div>
      <CloudyNav />
      <p id='block'></p>
      <div id='holder'>
        <img id="bottomleft" src="https://firebasestorage.googleapis.com/v0/b/cloudy-happiness-webstor-1888d.appspot.com/o/assets%2Fbottom-left.png?alt=media&token=15369ab6-14f1-4897-bad9-b638caf6f643" />
        <img id="bottomright" src="https://firebasestorage.googleapis.com/v0/b/cloudy-happiness-webstor-1888d.appspot.com/o/assets%2Fbottom-right.png?alt=media&token=90212869-0302-47b8-ae8b-4dbcc8f6275f" />
        <img id="topleft" src="https://firebasestorage.googleapis.com/v0/b/cloudy-happiness-webstor-1888d.appspot.com/o/assets%2Ftop-left.png?alt=media&token=ad946da5-0c8d-41a6-8b82-98703e9d8c40" />
        <img id="topright" src="https://firebasestorage.googleapis.com/v0/b/cloudy-happiness-webstor-1888d.appspot.com/o/assets%2Ftop-right.png?alt=media&token=381bb3fe-b9f5-4c82-bff6-1fc33a8e538f" />
        <div id="whoCloudy">
          <h2>Who Is Cloudy Happiness</h2>
          <ul>
            <li>A mental health apparel line that
              reminds people to always stay
              happy on their mental health and
              self love journey
            </li>
            <li>
              Portion of proceeds will be
              garnered towards mental health
              organizations and Go-Fund-Me
              Pages
            </li>
            <li>
              Providing a platform to always
              remain optimistic for the near future
            </li>
          </ul>
        </div>
        <div id='founder'>
          <h2>About Our Founder Joanna Siu</h2>
          <ul>
            <li>
              An UCI affiliate making efforts to advocate for mental health awareness.
            </li>
            <li>
              "During high school, I have struggled with my
              mental health due to pressures and expectations
              that I have set upon myself. In addition, I would
              bottle in my feelings to myself rather than
              speaking with a family member or a
              professional. These built up feelings have been let
              out in an unconventional manner which is not too
              positive. In hopes to advocate for other people's
              mental health and well-being, I hope to create a
              platform where I can create positive influence
              onto people."
            </li>
          </ul>
        </div>
        <div id="mission">
          <h2>Our Mission</h2>
          <p>
            Cloudy Happiness is on a mission to remind people to
            stay happy on their mental health and self love journey
            by providing a platform and apparel to build a more
            happier versions of themselves.
          </p>
        </div>
        <div id="vision">
          <h2>Our Vision</h2>
          <p>
            Cloudy Happiness envisions a community of mental
            health enthusiasts interacting about their journey on
            mental health / raising awareness of a better future to
            look forward to.
          </p>
        </div>
        <div id="motto">
          <h2>Our Motto</h2>
          <p>
            "Behind every cloudy situation, there is always a
            rainbow at the end of the road."
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
