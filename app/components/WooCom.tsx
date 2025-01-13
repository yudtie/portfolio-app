import React from 'react';
import CardPTBH from './CardPTBH';
import CardDWJ from './CardDWJ';


const DesignDev = () => {
  return (
    <div className="mx-auto pb-10 pt-12 max-w-[1600px]">
        <div className="text-left px-10 pb-10 max-w-7xl mx-auto">
            <h2>WooCommerce & Paypal</h2>
        </div>
        <div className="flex flex-col flex-shrink-0 md:flex-row md:w-2/3">
            <CardPTBH />
            <CardDWJ />

        </div>

        
    </div>
  )
}

export default DesignDev