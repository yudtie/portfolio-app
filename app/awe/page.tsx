import React from 'react'
import Image from 'next/image';
import * as motion from "motion/react-client";
import heroImage from '../../public/awebrandHero.jpg';
import Image1 from '../../public/awebrand-1.jpg';
import Image2 from '../../public/awebrand-2.jpg';
import Image3 from '../../public/awebrand-full.jpg';

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
                <h1>AWE Brand!</h1>
                <p>I was excited to get the contract to design and build the AWE Brand website in wordpress.</p>
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
                    <Image src={heroImage} width={1200} alt="AWE Brand" className="" />
                    
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
                    <Image src={Image1} width={800} alt="AWE Brand" className="" />
                    <Image src={Image2} width={800} alt="AWE Brand" className="" />
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
                    <h2>Custom WordPress Theme • Elementor • css • js • AfterFX</h2>   
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
                    <p>Built with a custom clean theme, the Elementor page builder and adding some fun css and js. I also edited, rendered and compressed an AfterFX template to save the client time and money.</p>
                </motion.div>
            </div>
            <div className="text-center flex flex-col md:flex-row pt-10">
                
                <div className="md:w-1/2 mx-auto">
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
                        <Image src={Image3} width={800} alt="AWE Brand" className="" />
                    </motion.div>
                </div>
            </div>
                
        </div>

    </div>
  )
}

export default page