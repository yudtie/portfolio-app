import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as motion from "motion/react-client";
import heroImage from '../../public/ZBS-hero.jpg'

const CardZBS = () => {
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
            
                <Link href='zbs'><Image src={heroImage} width={800} alt="Zalutko Business Services" className="workitem" />
                <span className="workitem">View Project</span></Link>

        </motion.div>

            
    </article>
  )
}

export default CardZBS