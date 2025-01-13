import React from 'react';
import * as motion from "motion/react-client";

const Capabilities = () => {
  return (
    <div className="flex flex-col relative px-10 pb-10 pt-12 md:flex-row max-w-7xl mx-auto"> 
        <motion.div className="text-left md:pr-20 md:pl-0 md:w-80 xl:w-96"
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
            <h2>Capabilities</h2>
        </motion.div>

        <motion.div className="text-left md:w-2/3 font-lato"
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
            <p>I&apos;m a multidisciplinary designer that had the privilege of working on some top brands and giving start ups the help they need to create a professional identity.<br /><br />
            I&apos;ve designed easy-to-use websites and user interfaces using the latest technologies and techniques, while carefully and strategically including important details and interactions.</p>
            <div className="text-left flex flex-col md:flex-row pt-10">
                <div className="md:w-1/2 py-3">
                    <p className="text-1xl font-semibold">Skills</p>
                    <ul className="list-disc list-inside text-base">
                        <li>HTML5 / JavaScript / jQuery</li>
                        <li>CSS / Bootstrap / Sass</li>
                        <li>Server Setup / FTP</li>
                        <li>Responsive Design</li>
                        <li>Landing Pages</li>
                        <li>Cross Browser Compatibility</li>
                        <li>ADA Accessibility</li>
                        <li>Video Compositing</li>
                        <li>Media Compression</li>
                    </ul>
                </div>
                <div className="md:w-1/2 py-3">
                    <p className="text-1xl font-semibold">Tools</p>
                    <ul className="list-disc list-inside ">
                        <li>Windows/iOS</li>
                        <li>Adobe CC</li>
                        <li>WordPress / ACF / WooCommerce</li>
                        <li>Silverpop / Fishbowl</li>
                        <li>Sublime Text / VS Code</li>
                        <li>Microsoft Office</li>
                        <li>Scrum / Jira / Slack</li>
                        <li>Pencil & Paper</li>
                    </ul>
                </div>
            </div>
        </motion.div>
        
    </div>
  )
}

export default Capabilities