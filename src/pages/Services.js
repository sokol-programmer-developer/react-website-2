import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Header from '../components/header/Header';
import Pricing from "../atom/pricing/Pricing";



function Services() {
  return (
    <>
      <Pricing />
        <Header {...homeObjOne} />
        <Header {...homeObjTwo} />
        <Header {...homeObjThree} />
        <Header {...homeObjFour} />
    </>
  );
}

export default Services;
