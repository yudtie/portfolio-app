import React from 'react'
import Image from 'next/image';
import * as motion from "motion/react-client";
import heroImage from '../../public/nyysteak-hero.jpg';
import heroImage2 from '../../public/nyysteak-hero2.jpg';
import Image1 from '../../public/nyysteak-2.jpg';
import Image2 from '../../public/nyysteak-3.jpg';
import Image3 from '../../public/nyysteak-4.jpg';
import Image4 from '../../public/nyysteak-5.jpg';

const page = () => {
  return (
    <div className="flex flex-col relative px-0 pb-10 pt-12 md:flex-row max-w-[1600px] mx-auto"> 
        <div className="font-lato">

            <motion.div className="text-center mx-auto px-60 py-10"
                initial={{
                    y:300,
                    opacity:0,
                    scale:1
                }}
                transition={{
                    duration:1,
                    delay:0,
                }}
                animate={{
                    y:0,
                    opacity: 1,
                }}
                viewport ={{
                    once:true
                }} 
            >
                <h1>NYY Steak</h1>
                <p>A fresh look was needed for the NYY Steak website. With 3 locations to choose from, a landing page was designed linking 3 individual websites, promotional materials and reservation widgets.</p>
            </motion.div>
            
            
            <div className="text-left flex flex-col md:flex-row pt-10">
                <motion.div className="md:w-1/3"
                    initial={{
                        y:300,
                        opacity:0,
                        scale:1
                    }}
                    transition={{
                        duration:1,
                        delay:0,
                    }}
                    animate={{
                        y:0,
                        opacity: 1,
                    }}
                    viewport ={{
                        once:true
                    }} 
                >
                    <Image src={Image3} width={800} alt="NYY Steak" className="" />
                    <Image src={Image1} width={800} alt="NYY Steak" className="" />
                </motion.div>
                <motion.div className="md:w-2/3"
                    initial={{
                        y:300,
                        opacity:0,
                        scale:1
                    }}
                    transition={{
                        duration:1,
                        delay:.2,
                    }}
                    animate={{
                        y:0,
                        opacity: 1,
                    }}
                    viewport ={{
                        once:true
                    }} 
                >
                    <Image src={heroImage} width={1200} alt="NYY Steak" className="" />
                    
                </motion.div>
                
            </div>
            <div className="text-left flex flex-col md:flex-row px-10 py-10">
                <motion.div className="md:w-1/3 py-3"
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
                <h2>WordPress • psd • Opentable</h2>   
                </motion.div>
                <motion.div className="md:w-2/3 py-3"
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
                    <p>The idea was to build a WordPress site to make it easy for each location to make their own edits. The site was built with a landing page linking off to each location. Each location had the typical menu, contact and news pages with an Opentable reservation widget, image galleries and social media engagement.</p>
                </motion.div>
            </div>
            <div className="text-left flex flex-col md:flex-row pt-10">
            <motion.div className="md:w-2/3"
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
                    <Image src={heroImage2} width={1200} alt="NYY Steak" className="" />
                    
                </motion.div>
                <motion.div className="md:w-1/3"
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
                    <Image src={Image2} width={800} alt="NYY Steak" className="" />
                    <Image src={Image4} width={800} alt="NYY Steak" className="" />
                </motion.div>
                
                
            </div>
                
        </div>

    </div>
  )
}

export default page