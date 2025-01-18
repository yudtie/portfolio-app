import React from 'react'
import Image from 'next/image';
import * as motion from "motion/react-client";
import heroImage from '../../public/rpm-hero.jpg';
import heroImage2 from '../../public/rpm-hero2.jpg';
import Image1 from '../../public/rpm-1.jpg';
import Image2 from '../../public/rpm-2.jpg';
import Image3 from '../../public/rpm-3.jpg';
import Image4 from '../../public/rpm-4.jpg';

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
                <h1>Revolutions Per Minute</h1>
                <p>A Podcast/Blog style community built to engage with Hard Rock fans.</p>
            </motion.div>
            
            
            <div className="text-left flex flex-col md:flex-row pt-10">
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
                    <Image src={heroImage} width={1200} alt="Revolutions Per Minute" className="" />
                    
                </motion.div>
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
                    <Image src={Image4} width={800} alt="Revolutions Per Minute" className="" />
                    <Image src={Image2} width={800} alt="Revolutions Per Minute" className="" />
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
                <h2>WordPress • psd</h2>   
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
                    <p>At first the focus was on creating a podcast site, but soon realized blog posts were easier and faster to produce. So we turned more of our focus on blog posting with podcast posting less often.<br /><br />
                    The site was built in WordPress to make it easy for our contributors to post their stories. The site also has a video gallery and an image gallery with just some of the 80,000+ piece memorabilia collection.</p>
                </motion.div>
            </div>
            <div className="text-left flex flex-col md:flex-row pt-10">
            
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
                    <Image src={Image1} width={800} alt="Revolutions Per Minute" className="" />
                    <Image src={Image3} width={800} alt="Revolutions Per Minute" className="" />
                </motion.div>
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
                    <Image src={heroImage2} width={1200} alt="Revolutions Per Minute" className="" />
                    
                </motion.div>
                
                
            </div>
                
        </div>

    </div>
  )
}

export default page