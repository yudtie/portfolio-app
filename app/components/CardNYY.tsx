import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as motion from "motion/react-client";
import heroImage from '../../public/nyysteak-hero.jpg'

const CardNYY = () => {
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
                delay:.2,
            }}
            whileInView={{
                y:0,
                opacity: 1,
            }}
            viewport ={{
                once:true
            }}> 
            
                <Link href='nyysteak'><Image src={heroImage} width={800} alt="NYY Steak" className="workitem" />
                <span className="workitem">View Project</span></Link>

        </motion.div>

            
    </article>
  )
}

export default CardNYY