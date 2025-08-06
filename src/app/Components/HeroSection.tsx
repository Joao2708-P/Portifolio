"use client"
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    
    const handleDownloadCV = () => {
        // Cria um link temporário para download
        const link = document.createElement('a');
        link.href = '/João guilherme (1).pdf';
        link.download = 'João guilherme (1).pdf';
        link.target = '_blank';
        
        // Adiciona o link ao DOM, clica nele e remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-8xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-700 
                         via-purple-700 to-orange-700">Olá! Eu sou João Guilherme{""}</span> 
                         <br />
                         <TypeAnimation
                            sequence={[
                                "Desenvolvedor Full-stack",
                                200,
                                "Desenvolvedor Web",
                                200,
                                "Desenvolvedor mobile",
                                200,
                                "Desenvolvedor back-end"
                            ]}
                            wrapper="span"
                            speed={5}
                            repeat={Infinity}
                         />
                    </h1>
                    <p className="text-[#ADB7BE] mb-7 text-base sm:text-lg lg:text-xl">Sou um desenvolvedor full stack, que atua principalmente
                        com front-end e criação de designs.
                    </p>
                    <div>
                        {/* <button className="px-6 py-3 border-sky-600 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-sky-700 
                         via-purple-700 to-orange-700 hover:bg-slate-200">
                            Conheça-me
                        </button> */}
                        <button 
                            onClick={handleDownloadCV}
                            className="px-1 py-1 rounded-full bg-transparent w-full sm:w-fit bg-gradient-to-br from-sky-700 
                             via-purple-700 to-orange-700  mt-3 cursor-pointer transition-all duration-300 hover:scale-105"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px]  lg:h-[400px] relative">
                        <Image
                            src="/images/Perfil-portifolio.png"
                            alt="Perfil-portifolio"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection