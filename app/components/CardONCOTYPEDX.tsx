import React from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client";
import heroImage from '../../public/oncotypeDX-3.jpg'

const CardONCOTYPEDX = () => {
  return (
    <article>
        
        <motion.div className="workitem"
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
            }}> 
            
                <a href='#'><Image src={heroImage} width={800} alt="OncoType DX" className="workitem" />
                <span className="workitem">View Project</span></a>

        </motion.div>

            
    </article>
  )
}

export default CardONCOTYPEDX