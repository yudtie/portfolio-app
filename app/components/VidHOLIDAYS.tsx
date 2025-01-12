import React from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client";
import heroImage from '../../public/hr-holiday-hero1.jpg'


const VidHOLIDAYS = () => {
  return (
    <article>
        
        <motion.div className="videoitem"
            initial={{
                y:300,
                opacity:0,
                scale:1
            }}
            transition={{
                duration:1,
                delay:.1,
            }}
            whileInView={{
                y:0,
                opacity: 1,
            }}
            viewport ={{
                once:true
            }}> 
            
                <a href='#'><Image src={heroImage} width={800} alt="Hard Rock Holiday Video" className="videoitem" /></a>

        </motion.div>

            
    </article>
  )
}

export default VidHOLIDAYS