import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation'
import ExploreProducts from '../ExploreProducts/ExploreProducts';

const Explore = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ExploreProducts></ExploreProducts>
            <Footer></Footer>
        </div>
    );
};

export default Explore;