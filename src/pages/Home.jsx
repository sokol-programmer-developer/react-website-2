import React from 'react';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from "../atom/pricing/Pricing";
import Header from "../components/header/Header";


function Home() {
    return (
        <>
            <Header {...homeObjOne} />
            <Header {...homeObjThree} />
            <Header {...homeObjTwo} />
            <Pricing />
            <Header {...homeObjFour} />
        </>
    );
}

export default Home;
