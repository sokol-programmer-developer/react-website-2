import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

import Header from "../components/header/Header";
import Pricing from "../atom/pricing/Pricing";



function Products() {
    return (
        <>
            <Header {...homeObjOne} />
            <Header {...homeObjTwo} />
            <Header {...homeObjThree} />
            <Pricing />
            <Header {...homeObjFour} />
        </>
    );
}

export default Products;
