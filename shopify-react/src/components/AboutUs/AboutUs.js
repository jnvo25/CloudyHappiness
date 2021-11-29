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
        <img id="bottomleft" src="https://cdn.discordapp.com/attachments/714892213955592297/914661638530007080/unknown.png" />
        <img id="bottomright" src="https://cdn.discordapp.com/attachments/714892213955592297/914662473901174784/unknown.png" />
        <img id="topleft" src="https://cdn.discordapp.com/attachments/714892213955592297/914662842244952114/unknown.png" />
        <img id="topright" src="https://cdn.discordapp.com/attachments/714892213955592297/914663231446990869/unknown.png" />
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
