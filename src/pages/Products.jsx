import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

import Header from "../components/header/Header";



function Products() {
    return (
        <>
            <Header {...homeObjOne} />
            <Header {...homeObjTwo} />
            <Header {...homeObjThree} />
            <Header {...homeObjFour} />
        </>
    );
}

export default Products;
