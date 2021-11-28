import LearnMore from './LearnMore';
import PageDirectory from './PageDirectory';
import MyCarousel from './MyCarousel';
import Footer from './Footer';
import CloudyNav from '../Template/CloudyNav';
import MyCarouselTitle from './MyCarouselTitle';

function Homepage() {
  return (
    <div>
        <CloudyNav />
        <LearnMore />
        <PageDirectory />
        <p> </p>
        <MyCarouselTitle />
        <MyCarousel />
        <Footer />
    </div>
  );
}

export default Homepage;
