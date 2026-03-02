import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NeonButton from '../views/components/NeonButton';
import "../styles/global.css"
import { projectData } from '../data/projects.js';




const ProjectsController = () => {
    const navigate = useNavigate();
    const [isGlitching, setIsGlitching] = useState(false);

    const handleNavigate = (path) => {
        setIsGlitching(true);
        setTimeout(() => navigate(path), 400);
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-[70vh] p-4 z-10 w-full relative ${isGlitching ? 'animate-glitch-out' : 'animate-glitch-in'}`}>

            {/* Title perfectly matched with bottom margin and z-index */}
            <h2 className='text-5xl md:text-5xl font-orbitron text-white glow-pink tracking-widest uppercase mb-8 z-20'>
                MY <span className='text-cyber-cyan glow-cyan'>PROJECTS</span>
            </h2>

            {/* Mainframe Card */}
            <div className="bg-deep-purple/80 p-8 md:p-12 border-2 border-cyber-cyan box-glow-cyan rounded-xl w-[90vw] max-w-6xl h-[65vh] overflow-y-auto cyber-scrollbar flex flex-col items-center backdrop-blur-sm z-10">

                <div className="w-full flex justify-between items-center border-b border-cyber-cyan/30 pb-4 mb-8 shrink-0">
                    <p className="text-white text-xl md:text-2xl font-rajdhani tracking-[0.3em] uppercase">
                        {`> DATABANKS ACCESSED: `}{projectData.length} RECORDS FOUND
                    </p>
                </div>

                {/* The Grid Container */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">

                    {projectData.map((project) => (
                        // 3. THE INDIVIDUAL PROJECT CARD
                        <div
                            key={project.id}
                            className={`flex flex-col h-full p-6 rounded-lg transition-all duration-300 group
                  /* MOBILE FIRST: Always glowing, brighter background, solid borders */
                  bg-deep-purple/60 border 
                  ${project.color === 'cyan'
                                    ? 'border-cyber-cyan box-glow-cyan md:border-cyber-cyan/30 md:shadow-none md:bg-black/40 md:hover:bg-deep-purple/60 md:hover:border-cyber-cyan md:hover:box-glow-cyan'
                                    : 'border-neon-pink box-glow-pink md:border-neon-pink/30 md:shadow-none md:bg-black/40 md:hover:bg-deep-purple/60 md:hover:border-neon-pink md:hover:box-glow-pink'
                                } md:hover:-translate-y-2`}
                        >

                            {/* Image Placeholder Frame */}
                            <div className={`w-full h-48 border border-${project.color === 'cyan' ? 'cyber-cyan' : 'neon-pink'}/50 bg-deep-purple flex items-center justify-center mb-6 overflow-hidden relative rounded`}>

                                {/* Smart Render: If there is an image, show it. If not, show the 'Signal Lost' text! */}
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-all duration-500 grayscale-0 opacity-100 md:grayscale md:opacity-50 md:group-hover:grayscale-0 md:group-hover:opacity-100"
                                    />
                                ) : (
                                    <span className={`font-orbitron text-xs tracking-widest absolute z-10 ${project.color === 'cyan' ? 'text-cyber-cyan/50' : 'text-neon-pink/50'}`}>
                                        {"> SIGNAL LOST / NO IMAGE"}
                                    </span>
                                )}

                            </div>

                            {/* Project Title */}
                            <h3 className={`text-3xl font-orbitron text-white tracking-widest mb-3 ${project.color === 'cyan' ? 'glow-cyan' : 'glow-pink'}`}>
                                {project.title}
                            </h3>

                            {/* Project Description */}
                            <p className="font-sans text-gray-300 mb-6 grow leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`text-xs font-rajdhani tracking-widest px-3 py-1 border rounded-sm bg-black/50 ${project.color === 'cyan' ? 'border-cyber-cyan text-cyber-cyan' : 'border-neon-pink text-neon-pink'}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Action Links (Demo / Repo) */}
                            <div className="flex gap-6 mt-auto border-t border-white/10 pt-4">
                                <a href={project.demoLink} target="_blank" className={`text-sm font-orbitron text-white hover:text-${project.color === 'cyan' ? 'cyber-cyan hover:glow-cyan' : 'neon-pink hover:glow-pink'} transition-all`}>
                                    [ LIVE DEMO ]
                                </a>
                                <a href={project.githubLink} target="_blank" className={`text-sm font-orbitron text-white hover:text-${project.color === 'cyan' ? 'cyber-cyan hover:glow-cyan' : 'neon-pink hover:glow-pink'} transition-all`}>
                                    [ SOURCE CODE ]
                                </a>
                            </div>

                        </div>
                    ))}
                    <div className="mt-8 z-20">
                        <span className="font-orbitron tracking-wider animate-pulse">MORE COMING SOON...</span>

                    </div>

                </div>
            </div>

            {/* Button perfectly matched with top margin and color */}
            <div className="mt-8 z-20">
                <NeonButton color='cyan' onClick={() => handleNavigate('/')}>
                    <span className="font-orbitron tracking-wider">BACK TO MENU</span>
                </NeonButton>
            </div>

        </div>
    );
};

export default ProjectsController;