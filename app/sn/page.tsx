import React from 'react'
import Image from 'next/image';
import * as motion from "motion/react-client";
import heroImage from '../../public/SN-hero.jpg';
import Image1 from '../../public/sn-1.jpg';
import Image2 from '../../public/sn-2.jpg';
import Image3 from '../../public/SN-full-page.jpg';

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
                <h1>SharkNinja</h1>
                <p>The project was to convert their corporate web site to WordPress. In addition I built an office location list, a filterable jobs list and a DEI page to list a few. This is also my first multi-site/multi-language site, there is a french version for their canadian customers.</p>
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
                    <Image src={heroImage} width={1200} alt="SharkNinja" className="" />
                    
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
                    <Image src={Image1} width={800} alt="SharkNinja" className="" />
                    <Image src={Image2} width={800} alt="SharkNinja" className="" />
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
                    <h2>Custom WordPress Theme • Elementor • css • js • WPML</h2> 
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
                    <p>Built with my custom “clean” theme, the Elementor page builder and the WPML plugin.</p>
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
                        <Image src={Image3} width={800} alt="SharkNinja" className="" />
                    </motion.div>
                </div>
            </div>
                
        </div>

    </div>
  )
}

export default page