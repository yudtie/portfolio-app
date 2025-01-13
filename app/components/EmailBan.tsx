import React from 'react';
import CardEMAILBANN from './CardEMAILBANN';


const EmailBan = () => {
  return (
    <div className="mx-auto px-10 pb-10 pt-12 max-w-[1600px]">
        <div className="text-left px-10 pb-10 max-w-7xl mx-auto">
            <h2>Emails & Banners</h2>
        </div>
        <div className="flex flex-col flex-shrink-0 md:flex-row md:w-1/3">
            <CardEMAILBANN />

        </div>

    </div>
  )
}

export default EmailBan