import React from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client"
import aboutImage from '../../public/myudtProfilePic.jpg'


const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">        
         <motion.div
                     initial={{
                         x:-200,
                         opacity:0,
                     }}
                     animate={{
                         x:0,
                         opacity:1,
                     }}
                     transition={{
                         duration:1,
                         delay:0,
                     }}
                     whileInView={{
                         x:0,
                         opacity: 1,
                     }}> 
                         <Image src={aboutImage} width={500} alt="Mark Yudt" className="w-56 h-56 md:w-80 md:h-80 xl:w-96 xl:h-96"/>
                 </motion.div>
        <div className="px-10 text-left md:w-2/3 font-lato">
            <p>Hello! I&apos;m Mark a multimedia, UI designer & front end web developer based in Orlando, FL. I like to build things on the web with WordPress and I developed a passion for clean responsive design.<br /><br /> I got my start a long time ago designing and animating everything I could with Flash! Since then I have been fortunate to work for companies such as Hard Rock Int&apos;l, Earl Enterprises, SharkNinja and Fujifilm. I have also had the opportunity to freelance with a wide range of companies designing and developing web sites, landing pages, intranets, email campaigns, email banners, logos, brochures and printed materials.<br /><br /> Below are some samples of my work. Thank you for your time!</p>
        </div>
        
    </div>
  )
}

export default About