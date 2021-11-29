import { useEffect } from 'react';
import Intro from './Intro'
import LearnMore from './LearnMore';
import PageDirectory from './PageDirectory';
import MyCarousel from './MyCarousel';
import Footer from './Footer';
import CloudyNav from '../Template/CloudyNav';
import MyCarouselTitle from './MyCarouselTitle';

function Homepage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div>
            <CloudyNav />
            <Intro />
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
