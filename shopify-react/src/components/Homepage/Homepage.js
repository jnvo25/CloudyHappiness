import { useEffect } from 'react';
import LearnMore from './LearnMore';
import PageDirectory from './PageDirectory';
import MyCarousel from './MyCarousel';
import CloudyNav from '../Template/CloudyNav';
import MyCarouselTitle from './MyCarouselTitle';

function Homepage() {

  useEffect(() => {
    window.scrollTo(0,0);
  })
  
  return (
    <div>
        <CloudyNav />
        <LearnMore />
        <PageDirectory />
        <p> </p>
        <MyCarouselTitle />
        <MyCarousel />
    </div>
  );
}

export default Homepage;
