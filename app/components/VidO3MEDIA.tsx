import React from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client";
import heroImage from '../../public/o3media-1.jpg'


const VidO3MEDIA = () => {
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
                delay:0,
            }}
            whileInView={{
                y:0,
                opacity: 1,
            }}
            viewport ={{
                once:true
            }}> 
            
                <a href='#'><Image src={heroImage} width={800} alt="O3 Media" className="videoitem" /></a>

        </motion.div>

            
    </article>
  )
}

export default VidO3MEDIA