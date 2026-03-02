import React, { useState } from 'react';
import NeonButton from "../views/components/NeonButton.jsx";

const ContactModal = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    // 1. STATE: Track the form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // 2. HELPER: Updates state when user types
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. SUBMIT: Send data to Netlify silently!
    const handleSubmit = (e) => {
        e.preventDefault();

        // URL-encode the data for Netlify
        const encodedData = new URLSearchParams({
            'form-name': 'contact', // This matches the name="contact" in index.html!
            ...formData
        }).toString();

        // Send the AJAX request
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encodedData,
        })
            .then(() => {
                alert('TRANSMISSION SUCCESSFUL! DATA ADDED TO NETLIFY DATABANKS.');
                handleClose();
            })
            .catch((error) => {
                alert('TRANSMISSION FAILED! ERROR: ' + error);
            });
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 200);
    };

    return (
        // 1. ADDED `flex-col` so the title and the card stack vertically!
        // 2. Added back `bg-black/80 backdrop-blur-sm` for the dark overlay
        <div className={`fixed inset-0  backdrop-blur-sm z-100 flex flex-col items-center justify-center p-4 ${isClosing ? 'animate-glitch-out' : 'animate-glitch-in'}`}>

            {/* 3. The PLAYER 2 Title (Responsive text sizing and margin) */}
            <h2 className="text-5xl md:text-7xl font-orbitron text-white glow-pink tracking-widest uppercase mb-6 z-20 text-center drop-shadow-[0_0_10px_rgba(255,0,127,0.8)]">
                PLAYER <span className='text-synth-yellow glow-pink'>2</span>
            </h2>

            {/* Glowing Synthwave Container */}
            <div className="bg-deep-purple/90 border-2 border-neon-pink box-glow-pink w-full max-w-lg rounded-xl p-6 md:p-8 relative flex flex-col gap-6">

                {/* Header Area */}
                <div className="border-b border-neon-pink/30 pb-4 text-center">
                    <h2 className="text-2xl md:text-4xl font-orbitron text-white glow-pink tracking-widest">
                        SECURE UPLINK
                    </h2>
                    <p className="text-cyber-cyan font-rajdhani text-sm md:text-base tracking-[0.2em] md:tracking-[0.3em] mt-2 animate-pulse">
                        {'> AWAITING TRANSMISSION...'}
                    </p>
                </div>

                {/* The Form */}
                {/* 4. Connect the form to our handleSubmit function */}
                <form className="flex flex-col gap-4 md:gap-5" onSubmit={handleSubmit}>

                    <div className="flex flex-col gap-1 md:gap-2">
                        <label className="text-synth-yellow font-orbitron text-[10px] md:text-xs tracking-widest">IDENTIFICATION (NAME)</label>
                        <input
                            type="text"
                            name="name" // MUST MATCH EXACTLY
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-black/50 border border-cyber-cyan/50 focus:border-cyber-cyan focus:box-glow-cyan text-white font-sans p-2 md:p-3 rounded outline-none transition-all duration-300 text-sm md:text-base"
                            placeholder="Enter your name..."
                        />
                    </div>

                    <div className="flex flex-col gap-1 md:gap-2">
                        <label className="text-synth-yellow font-orbitron text-[10px] md:text-xs tracking-widest">COMM-LINK (EMAIL)</label>
                        <input
                            type="email"
                            name="email" // MUST MATCH EXACTLY
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-black/50 border border-cyber-cyan/50 focus:border-cyber-cyan focus:box-glow-cyan text-white font-sans p-2 md:p-3 rounded outline-none transition-all duration-300 text-sm md:text-base"
                            placeholder="Enter your email..."
                        />
                    </div>

                    <div className="flex flex-col gap-1 md:gap-2">
                        <label className="text-synth-yellow font-orbitron text-[10px] md:text-xs tracking-widest">DATA PAYLOAD (MESSAGE)</label>
                        <textarea
                            rows="4"
                            name="message" // MUST MATCH EXACTLY
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="bg-black/50 border border-cyber-cyan/50 focus:border-cyber-cyan focus:box-glow-cyan text-white font-sans p-2 md:p-3 rounded outline-none resize-none transition-all duration-300 cyber-scrollbar text-sm md:text-base"
                            placeholder="Type your message..."
                        ></textarea>
                    </div>

                    <div className="flex justify-between items-center mt-2 md:mt-4 pt-4 border-t border-white/10">
                        <button type="button" onClick={handleClose} className="text-gray-400 hover:text-neon-pink font-orbitron text-xs md:text-sm tracking-widest transition-colors hover:glow-pink">
                            [ ABORT ]
                        </button>
                        <div onClick={(e) => e.stopPropagation()}>
                            <NeonButton color="cyan" type="submit">
                                <span className="font-orbitron tracking-wider text-xs md:text-sm">TRANSMIT</span>
                            </NeonButton>
                        </div>
                    </div>

                </form>


            </div>
        </div>
    );
};

export default ContactModal;