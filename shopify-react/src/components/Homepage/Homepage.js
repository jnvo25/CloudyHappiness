import LearnMore from './LearnMore';
import PageDirectory from './PageDirectory';
import MyCarousel from './MyCarousel';
import Footer from './Footer';
import CloudyNav from './CloudyNav';

function Homepage() {
  return (
    <div>
        <CloudyNav />
        <LearnMore />
        <PageDirectory />
        <p> </p>
        <MyCarousel />
        <Footer />
    </div>
  );
}

export default Homepage;