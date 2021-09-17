import React from 'react';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo,} from './Data';
import Pricing from "../atom/pricing/Pricing";
import Header from "../components/header/Header";



function SignUp() {
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

export default SignUp;
