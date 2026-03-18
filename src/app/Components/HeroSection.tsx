"use client"
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {

    const handleContact = () => {
        window.open("https://wa.me/19995357442", "_blank");
    };

    return(
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                
                <div className="col-span-7 place-self-center text-center sm:text-left">

                    <h1 className="text-white mb-4 text-4xl sm:text-6xl lg:text-7xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-700 
                         via-purple-700 to-orange-700">
                            Sistemas que resolvem problemas reais
                        </span> 
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Automatizo processos empresariais",
                                2000,
                                "Desenvolvo sistemas sob medida",
                                2000,
                                "Melhoro a eficiência do seu negócio",
                                2000,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />
                    </h1>

                    <p className="text-[#ADB7BE] mb-7 text-base sm:text-lg lg:text-xl">
                        Desenvolvedor full stack com experiência em PHP, C#, Java e aplicações web.
                        Ajudo empresas a reduzir tempo, erros e retrabalho com tecnologia.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        
                        <button 
                            onClick={handleContact}
                            className="px-6 py-3 rounded-full bg-gradient-to-br from-sky-700 
                             via-purple-700 to-orange-700 hover:scale-105 transition-all duration-300"
                        >
                            Falar comigo
                        </button>

                        <a 
                            href="/Joao_Guilherme_CV.pdf"
                            target="_blank"
                            className="px-6 py-3 rounded-full border border-slate-600 hover:bg-slate-800 transition"
                        >
                            Ver CV
                        </a>

                    </div>

                </div>

                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px]  lg:h-[400px] relative">
                        <Image
                            src="/images/Perfil-portifolio.png"
                            alt="Foto de João Guilherme"
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