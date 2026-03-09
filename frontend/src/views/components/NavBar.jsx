import React, { useState, useRef } from 'react';
import { useAsyncError, useNavigate } from 'react-router-dom';
import synthTrack from '../../assets/music.mp3';
import ContactModal from '../../controllers/ContactModal.jsx';

const Navbar = () => {
    const navigate = useNavigate();

    const [isPlayerOpen, setIsPlayerOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const audioRef = useRef(null);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const togglePlay = () => {
        if (isPlaying) { audioRef.current.pause(); }
        else { audioRef.current.play(); }
        setIsPlaying(!isPlaying);
    };

    const handleBack = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            if (!isPlaying) togglePlay();
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) { audioRef.current.volume = newVolume; }
    };

    const handlePlayerToggle = () => {
        if (isPlayerOpen) {
            setIsClosing(true);
            setTimeout(() => { setIsPlayerOpen(false); setIsClosing(false); }, 400);
        } else {
            setIsPlayerOpen(true);
        }
    };

    return (
        <>
            {/* 1. Responsive Padding: px-4 on mobile, px-8 on tablets/desktop */}
            <header className="w-full h-16 md:h-20 px-4 md:px-8 border-b border-neon-pink/30 shadow-[0_4px_20px_rgba(255,0,127,0.1)] bg-deep-purple/40 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between">

                {/* LEFT COLUMN: Logo (Now with your JULIODEV branding!) */}
                <div className="flex items-center z-10">
                    <div className="cursor-pointer transition-transform hover:scale-105" onClick={() => navigate('/')}>
                        <span className='font-orbitron text-lg md:text-3xl text-white glow-cyan tracking-widest'>
                            JULIO<span className="text-neon-pink glow-pink">DEV</span>
                        </span>
                    </div>
                </div>

                {/* CENTER COLUMN: Get Into Vibe */}
                {/* ABSOLUTE POSITIONING guarantees it is 100% perfectly centered always! */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 flex justify-center">
                    <button
                        className="flex items-center gap-2 text-synth-yellow font-orbitron tracking-widest text-sm hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,234,0,0.8)]"
                        onClick={handlePlayerToggle}
                    >
                        <svg className="w-5 h-5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        <span className="hidden md:inline">GET INTO VIBE</span>
                    </button>

                    {isPlayerOpen && (
                        <div className={`absolute top-12 left-1/2 -translate-x-1/2 mt-4 bg-deep-purple/95 border border-cyber-cyan box-glow-cyan p-5 rounded-lg flex flex-col items-center gap-4 backdrop-blur-xl z-50 w-[90vw] max-w-60 ${isClosing ? 'animate-glitch-out' : 'animate-glitch-in'}`}>
                            <div className="w-full flex justify-between items-center border-b border-cyber-cyan/30 pb-2">
                                <span className="font-orbitron text-[10px] text-neon-pink tracking-widest">TAPE_01</span>
                                <div className="text-synth-yellow font-orbitron text-[10px] md:text-xs tracking-widest text-right w-20">
                                    {isPlaying ? 'PLAYING' : 'PAUSED'}
                                </div>
                            </div>
                            <audio ref={audioRef} src={synthTrack} loop volume={volume} />
                            <div className="flex items-center gap-6 mt-1">
                                <button onClick={handleBack} className="text-white hover:text-cyber-cyan transition-colors hover:glow-cyan" title="Restart Track">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                                </button>
                                <button onClick={togglePlay} className="text-neon-pink hover:text-white transition-colors hover:glow-pink scale-125">
                                    {isPlaying ? (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                                    ) : (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    )}
                                </button>
                                <button className="text-gray-600 cursor-not-allowed">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                                </button>
                            </div>
                            <div className="w-full flex items-center gap-3 mt-2">
                                <svg className="w-4 h-4 text-cyber-cyan shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
                                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="w-full h-1 bg-cyber-cyan/30 rounded-lg appearance-none cursor-pointer accent-neon-pink" />
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN: Contact & Social Links */}
                <div className="flex items-center justify-end gap-3 md:gap-6 z-10">
                    <button
                        className="text-cyber-cyan font-orbitron text-xs md:text-sm tracking-widest hover:text-white hover:glow-cyan transition-all duration-300 flex items-center gap-2"
                        onClick={() => setIsContactOpen(true)}
                    >
                        <svg className="w-5 h-5 md:hidden" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        <span className="hidden md:inline">CONTACT ME</span>
                    </button>

                    <div className="h-4 md:h-6 w-0.5 bg-neon-pink/50 rounded-full shadow-[0_0_5px_#ff007f]"></div>

                    <a href="https://github.com/JulioRobocop" target="_blank" rel="noreferrer" className="text-white hover:text-neon-pink transition-all duration-300 drop-shadow-[0_0_5px_rgba(255,0,127,0.8)] hover:scale-110">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/julio-cesar-gon%C3%A7alves-bb0134201/" target="_blank" rel="noreferrer" className="text-white hover:text-cyber-cyan transition-all duration-300 drop-shadow-[0_0_5px_rgba(0,255,255,0.8)] hover:scale-110">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                </div>
            </header>

            {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
        </>
    );
};

export default Navbar;