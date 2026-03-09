import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NeonButton from '../views/components/NeonButton';

// Mini-component for Skill Bars (now with responsive sizing)
const SkillBar = ({ skill, percentage, color = 'cyan' }) => (
    <div className="mb-3 md:mb-4">
        <div className="flex justify-between mb-1">
            <span className={`font-orbitron tracking-widest text-xs md:text-sm text-${color === 'cyan' ? 'cyber-cyan' : 'neon-pink'}`}>
                {skill}
            </span>
            <span className="font-rajdhani text-white text-xs md:text-sm">{percentage}%</span>
        </div>
        <div className={`w-full h-3 md:h-4 bg-deep-purple border border-${color === 'cyan' ? 'cyber-cyan' : 'neon-pink'}/50 p-0.5`}>
            <div
                className={`h-full bg-${color === 'cyan' ? 'cyber-cyan' : 'neon-pink'} ${color === 'cyan' ? 'box-glow-cyan' : 'box-glow-pink'}`}
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);

const AboutController = () => {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isGlitching, setIsGlitching] = useState(false);

    const handleNavigate = (path) => {
        setIsGlitching(true);
        setTimeout(() => navigate(path), 400);
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-[70vh] p-4 z-10 w-full relative ${isGlitching ? 'animate-glitch-out' : 'animate-glitch-in'}`}>

            {/* Title - Scales down cleanly for mobile */}
            <h2 className={`text-4xl sm:text-5xl md:text-7xl flex font-orbitron text-white whitespace-nowrap glow-pink tracking-widest uppercase transition-opacity duration-700 mb-8 z-20
        ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                PLAYER <span className='text-synth-yellow glow-pink'>1</span>
            </h2>

            <div className="w-full max-w-2xl h-75"></div>

            {/* THE RESPONSIVE CARD */}
            <div
                className={`
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-deep-purple/90 backdrop-blur-md border-2 border-neon-pink box-glow-pink 
          flex flex-col items-center text-center 
          transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-50
          ${isExpanded
                        // EXPANDED: Strict 85vh height. Width stays 90vw.
                        ? 'h-[85vh] w-[90vw] max-w-6xl rounded-2xl p-6 md:p-12 overflow-y-auto cyber-scrollbar justify-start'
                        // NORMAL: Strict 300px height. Width stays 90vw. Added overflow-hidden for smooth shrinking.
                        : 'h-75 w-[90vw] max-w-2xl rounded-xl p-6 md:p-8 justify-center overflow-hidden'
                    }
        `}
            >
                {/* Scaled down text size on mobile so it doesn't wrap awkwardly */}
                <p className="text-white text-lg md:text-2xl font-rajdhani tracking-[0.2em] md:tracking-[0.3em] uppercase w-full border-b border-neon-pink/30 pb-4 shrink-0">
                    IDENTIFICATION: DEVELOPER
                </p>

                <div className="grow flex w-full my-6 md:my-8 items-center justify-center">
                    {!isExpanded ? (
                        <p className="text-cyber-cyan text-sm md:text-lg font-orbitron tracking-widest animate-pulse">
                            {"> YOU GOT THE IDEA..."} <br />
                            {"> I GOT THE SKILLS..."}
                        </p>
                    ) : (
                        // The 2-Column Grid (Stacks to 1 column on mobile!)
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 text-left animate-in fade-in duration-1000">

                            {/* Left Column (Avatar & Bio) */}
                            <div className="flex flex-col items-center lg:items-start space-y-4 md:space-y-6 text-center lg:text-left">
                                {/* Shrunk Avatar for mobile */}
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-md border-2 border-cyber-cyan box-glow-cyan overflow-hidden bg-black flex items-center justify-center relative shrink-0">
                                    <img src="../../profile_pic.png" alt="Profile pic" className='full' />
                                </div>
                                <div className='space-y-2 w-full'>
                                    <h3 className="text-2xl md:text-3xl font-orbitron text-white glow-pink">JULIO C. GONCALVES</h3>
                                    <p className="text-cyber-cyan font-rajdhani text-lg md:text-xl tracking-widest">{"> CLASS: JR. DEVELOPER"}</p>

                                    <div className="text-gray-300 font-sans mt-2 md:mt-4 leading-relaxed text-sm md:text-base space-y-4">
                                        <p>
                                            System override successful. Originally forged as a Materials Engineer, I re-engineered my core directives to become a developer based in Brazil. Currently stationed at Pado S/A, I architect the digital infrastructure for advanced smart locks, ensuring every interaction is as seamless as it is secure.
                                        </p>

                                        <div>
                                            <p className="text-synth-yellow font-rajdhani tracking-widest uppercase text-xs md:text-sm mb-2">
                                                {"> ACTIVE SUBROUTINES:"}
                                            </p>
                                            <ul className="list-none space-y-2 pl-3 border-l-2 border-neon-pink/50 text-sm">
                                                <li><span className="text-cyber-cyan mr-2">►</span> Forging immersive UIs with React.js</li>
                                                <li><span className="text-cyber-cyan mr-2">►</span> Routing high-speed data via GCP & Kubernetes</li>
                                                <li><span className="text-cyber-cyan mr-2">►</span> Deploying autonomous TypeScript AI monitors</li>
                                                <li><span className="text-cyber-cyan mr-2">►</span> Expanding neural networks with LLM tools</li>
                                            </ul>
                                        </div>
                                        <p className="pt-2 text-cyber-cyan/80 text-xs md:text-sm font-rajdhani tracking-widest uppercase border-t border-white/10 mt-4">
                                            [ SYSTEM READY FOR CO-OP ON FRONTEND, BACKEND, & AI PROJECTS ]
                                        </p>
                                    </div>
                                </div>




                            </div>

                            {/* Right Column (Tech Stack) */}
                            <div className="flex flex-col justify-center w-full">
                                <h3 className="text-xl md:text-2xl font-orbitron text-synth-yellow glow-pink mb-4 md:mb-6 border-b border-synth-yellow/30 pb-2 text-center lg:text-left">
                                    TECH STACK
                                </h3>

                                <div className="space-y-2 w-full">
                                    <SkillBar skill="JAVASCRIPT / ES6" percentage={90} color="cyan" />
                                    <SkillBar skill="REACT & VITE" percentage={85} color="pink" />
                                    <SkillBar skill="NODE.JS / EXPRESS" percentage={75} color="cyan" />
                                    <SkillBar skill="POSTGRESQL" percentage={70} color="pink" />
                                    <SkillBar skill="TAILWIND CSS" percentage={95} color="cyan" />
                                    <SkillBar skill="LLM tools" percentage={85} color="pink" />
                                </div>
                            </div>

                        </div>
                    )}
                </div>

                {/* Action Button */}
                <div className="shrink-0 mt-4">
                    <NeonButton color='pink' onClick={() => setIsExpanded(!isExpanded)}>
                        {/* whitespace-nowrap forces the text to stay on ONE line! */}
                        <span className="font-orbitron tracking-widest text-xs md:text-sm whitespace-nowrap">
                            {isExpanded ? 'MINIMIZE SYSTEM' : 'INITIALIZE SEQUENCE'}
                        </span>
                    </NeonButton>
                </div>
            </div>

            {/* Back Button */}
            <div className={`transition-opacity duration-700 mt-8 z-20 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <NeonButton color='cyan' onClick={() => handleNavigate('/')}>
                    <span className="font-orbitron tracking-widest text-xs md:text-sm whitespace-nowrap">BACK TO MENU</span>
                </NeonButton>
            </div>

            <div className={`fixed inset-0 backdrop-blur-md z-40 transition-opacity duration-700 ${isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsExpanded(false)}></div>
        </div>
    );
};

export default AboutController;