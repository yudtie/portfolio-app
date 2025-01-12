import React from 'react';
import CardAOR from './CardAOR';
import CardROXTARS from './CardROXTARS';
import CardIMAGINE from './CardIMAGINE';
import CardPINCRAFT from './CardPINCRAFT';
import CardZACHS from './CardZACHS';
import CardHTN from './CardHTN';

const DesignDev = () => {
  return (
    <div className="mx-auto pt-10 max-w-[1600px]">
        <div className="text-left px-10 pb-10 max-w-7xl mx-auto">
            <p>Design & Development</p>
        </div>
        <div className="flex flex-col flex-shrink-0 md:flex-row max-w-fit">
            <CardAOR />
            <CardROXTARS />
            <CardIMAGINE />
        </div>
        <div className="flex flex-col flex-shrink-0 md:flex-row md:w-fit">
            <CardPINCRAFT />
            <CardZACHS />
            <CardHTN />
        </div>
        
    </div>
  )
}

export default DesignDev