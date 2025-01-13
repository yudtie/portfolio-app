import React from 'react';
import * as motion from "motion/react-client";
//import ReactPlayer from 'react-player'

const Contact = () => {
  return (
    
    <div className="flex flex-col relative px-10 pb-10 pt-12 md:flex-row max-w-7xl mx-auto"> 
        <motion.div className="text-left md:pl-0 md:w-80 xl:w-96"
            initial={{
                y:300,
                opacity:0,
                scale:1
            }}
            transition={{
                duration:1,
                delay:0,
            }}
            whileInView={{
                y:0,
                opacity: 1,
            }}
            viewport ={{
                once:true
            }}
        >
            <h2>Contact Me</h2>
        </motion.div>

        <motion.div className="text-left md:w-2/3 font-lato"
            initial={{
                y:300,
                opacity:0,
                scale:1
            }}
            transition={{
                duration:1,
                delay:.2,
            }}
            whileInView={{
                y:0,
                opacity: 1,
            }}
            viewport ={{
                once:true
            }}
        >
            <p>I work from my well-equipped home office in Orlando, FL. I can also operate at a client&apos;s premises as and when required.<br/><br />Kindly contact me to check availability.</p>
            <div className="text-left flex flex-col md:flex-row pt-10">
                <div className="md:w-full py-3 bg-green-500">
                    
                    <p>form</p>
                </div>
                
            </div>
            <div className="text-left flex flex-col md:flex-row pt-10">
                <div className="md:w-full py-3 bg-red-500">
                    
                    <p>Quote generator</p>
                </div>
                
            </div>
        </motion.div>
        
    </div>

    
  )
}

export default Contact