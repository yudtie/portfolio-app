import React from 'react'
import Image from 'next/image';
import * as motion from "motion/react-client";
import heroImage from '../../public/ZBS-hero.jpg';
import Image1 from '../../public/zbs-2.jpg';
import Image2 from '../../public/zbs-5.jpg';
import Image3 from '../../public/zbs-6.jpg';
import Image4 from '../../public/zbs-4.jpg';

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
                <h1>Zalutko Business Services</h1>
                <p>I was hired by ZBS to build their website and help with their print design projects. From business cards & flyers to spec-sheets, email banners & landing pages.</p>
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
                        delay:.1,
                    }}
                    animate={{
                        y:0,
                        opacity: 1,
                    }}
                    viewport ={{
                        once:true
                    }} 
                >
                    <Image src={heroImage} width={1200} alt="Zalutko Business Services" className="" />
                    
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
                    animate={{
                        y:0,
                        opacity: 1,
                    }}
                    viewport ={{
                        once:true
                    }} 
                >
                    <Image src={Image1} width={800} alt="Zalutko Business Services" className="" />
                    <Image src={Image2} width={800} alt="Zalutko Business Services" className="" />
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
                <h2>Custom DIVI Theme • Adobe CC</h2>   
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
                    <p>Built a custom DIVI theme and designed with Photoshop</p>
                </motion.div>
            </div>
            <div className="text-center flex flex-col md:flex-row pt-10">
                
                <motion.div className="md:w-full flex mx-auto"
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
                    <Image src={Image4} width={800} alt="Zalutko Business Services" className="" />
                </motion.div>
                <motion.div className="md:w-full flex mx-auto"
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
                    <Image src={Image3} width={800} alt="Zalutko Business Services" className="" />
                </motion.div>
            </div>
                
        </div>

    </div>
  )
}

export default page