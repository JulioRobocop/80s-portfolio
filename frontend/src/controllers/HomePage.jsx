import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NeonButton from '../views/components/NeonButton';

const HomePage = () => {
  const navigate = useNavigate();
  const [isGlitching, setIsGlitching] = useState(false);

  const handleNavigate = (path) => {
    setIsGlitching(true);
    setTimeout(() => {
      navigate(path);
    }, 175); 
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-[70vh] space-y-12 z-10 w-full px-4 ${isGlitching ? 'animate-glitch-out' : 'animate-glitch-in'}`}>
      
      {/* Responsive Title and Subtitle Container */}
      <div className="text-center space-y-4 w-full">
        {/* Scales from 5xl (mobile) up to 9xl (desktop) so it never overflows */}
        <h1 className='text-5xl sm:text-7xl lg:text-9xl font-bold font-orbitron text-white glow-cyan tracking-widest uppercase'>
          WELCOME
        </h1>
        {/* Scales text size and tracking down for mobile */}
        <p className="text-sm sm:text-xl md:text-3xl font-rajdhani text-cyber-cyan tracking-[0.15em] md:tracking-[0.3em] uppercase">
          SYSTEM INITIALIZED
        </p>
      </div>
      
      {/* Navigation Buttons - flex-col on mobile to stack them, flex-row on md screens! */}
      <div className='flex flex-col md:flex-row gap-6 mt-8 w-full md:w-auto max-w-xs md:max-w-none mx-auto'>
        <div className="w-full flex justify-center">
          <NeonButton color='pink' onClick={() => handleNavigate('/about')}>
            <span className="font-orbitron tracking-wider">ABOUT ME</span>
          </NeonButton>
        </div>
        
        <div className="w-full flex justify-center">
          <NeonButton color='cyan' onClick={() => handleNavigate('/projects')}>
            <span className="font-orbitron tracking-wider">PROJECTS</span>
          </NeonButton>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;