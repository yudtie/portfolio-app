import React from 'react';
import VidO3MEDIA from './VidO3MEDIA';
import VidHOLIDAYS from './VidHOLIDAYS';
import VidSEASONSGREET from './VidSEASONSGREET';
import VidCARTILAGE from './VidCARTILAGE';

const AfterFX = () => {
  return (
    <div className="mx-auto pt-10 max-w-[1600px]">
        <div className="text-left px-10 pb-10 max-w-7xl mx-auto">
            <p>Custom Pharma Video Carousels</p>
        </div>
        <div className="flex flex-col flex-shrink-0 md:flex-row md:1/4">
            <VidO3MEDIA />
            <VidHOLIDAYS />
            <VidSEASONSGREET />
            <VidCARTILAGE />

        </div>


    </div>
  )
}

export default AfterFX