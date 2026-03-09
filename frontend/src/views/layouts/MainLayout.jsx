import React from "react";
// Import the video file
import bgVideo from '../../assets/background_80s.mp4';
import NavBar from "../components/NavBar.jsx";


const MainLayout = ({ children }) => {
    return (
        <div className='min-h-screen bg-deep-purple relative overflow-hidden flex flex-col'>

            {/* The Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none"
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            {/* A dark overlay so your text remains readable */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Your Content Container (z-10 keeps it above the video) */}
            <div className="relative z-10 grow flex flex-col w-full max-w-7xl mx-auto px-8">
               <NavBar/>

                <main className="grow flex flex-col items-center justify-center">
                    {children}
                </main>
            </div>
        </div>
    )
}
export default MainLayout;