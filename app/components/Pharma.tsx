import React from 'react';
import CardXOFIGO from './CardXOFIGO';
import CardTAKEDA from './CardTAKEDA';
import CardONCOTYPEDX from './CardONCOTYPEDX';
import CardMELANOMA from './CardMELANOMA';
import CardZYDELIG from './CardZYDELIG';
import CardCANCERINSIGHTS from './CardCANCERINSIGHTS';


const Pharma = () => {
  return (
    <div className="mx-auto pt-10 max-w-[1600px]">
        <div className="text-left px-10 pb-10 max-w-7xl mx-auto">
            <p>Custom Pharma Video Carousels</p>
        </div>
        <div className="flex flex-col flex-shrink-0 md:flex-row max-w-fit">
            <CardXOFIGO />
            <CardTAKEDA />
            <CardONCOTYPEDX />
        </div>
        <div className="flex flex-col flex-shrink-0 md:flex-row max-w-fit">
            <CardMELANOMA />
            <CardZYDELIG />
            <CardCANCERINSIGHTS />
        </div>

    </div>
  )
}

export default Pharma