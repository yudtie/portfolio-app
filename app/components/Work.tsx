import React from 'react';
import CardAWE from './CardAWE';
import CardSN from './CardSN';
import CardZBS from './CardZBS';
import CardEARL from './CardEARL';
import CardGLOBALCON from './CardGLOBALCON';
import CardHRCORP from './CardHRCORP';
import CardRPM from './CardRPM';
import CardNYY from './CardNYY';

const Work = () => {
  return (
    <div className="mx-auto pt-10 max-w-[1600px]">
        
        <div className="flex flex-col flex-shrink-0 md:flex-row max-w-fit">
            <CardAWE />
            <CardSN />
            <CardZBS />
        </div>
        <div className="flex flex-col flex-shrink-0 md:flex-row max-w-fit">
            <CardEARL />
            <CardGLOBALCON />
        </div>
        <div className="flex flex-col flex-shrink-0 md:flex-row max-w-fit">
            <CardHRCORP />
            <CardRPM />
            <CardNYY />
        </div>
        
    </div>
  )
}

export default Work