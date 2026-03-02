import React from "react";

const NeonButton = ({ children, onClick, color = 'pink' }) => {

    const colorClasses = {
        pink: "text-neon-pink border-neon-pink hover:text-white hover:box-glow-pink relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:translate-x-[150%] hover:before:-translate-x-[150%] before:bg-gradient-to-l before:from-transparent before:via-white/60 before:to-transparent before:transition-transform before:duration-500 ",
        cyan: "text-cyber-cyan border-cyber-cyan hover:text-white hover:box-glow-cyan relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:translate-x-[150%] hover:before:-translate-x-[150%] before:bg-gradient-to-l before:from-transparent before:via-white/60 before:to-transparent before:transition-transform before:duration-500",
    };

    return (
        <button
            onClick={onClick}
            className={`px-15 py-3 
                border-3 rounded-md font-retro font-bold uppercase tracking-widest transition-all 
                duration-300 ${colorClasses[color]} cursor-pointer`}
        >
            <span
                className={`
          absolute top-0 left-0 w-1/2 h-full bg-white/60 
          -skew-x-12 -translate-x-[150%] z-0
          animate-[sweep_1.5s_infinite] 
          md:animate-none md:transition-transform md:duration-700 md:ease-out md:group-hover:translate-x-[300%]
        `}
            ></span>
            <div className="relative z-10 flex items-center justify-center">
                {children}
            </div>


        </button>
    )
}

export default NeonButton