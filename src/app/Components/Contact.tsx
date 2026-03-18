"use client"
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    
    const handleWhatsAppClick = () => {
        const phoneNumber = "5519995357442";

        const message = "Olá João! Vi seu portfólio e gostaria de conversar sobre um projeto.";

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    }

    return(
        <main id="contact">
            <h1 className="text-center text-white font-bold text-5xl mt-12">
                Vamos trabalhar juntos
            </h1>

            <section className="grid md:grid-cols-2 py-20 gap-10 px-4">

                {/* Texto */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Precisa de um sistema ou automação?
                    </h2>

                    <p className="text-[#ADB7BE] mb-6 max-w-md">
                        Se você quer desenvolver um sistema, automatizar processos ou melhorar 
                        sua operação com tecnologia, podemos conversar e encontrar a melhor solução.
                    </p>

                    <ul className="text-sm text-[#ADB7BE] space-y-2 mb-6">
                        <li>✔ Sistemas sob medida</li>
                        <li>✔ Integrações e APIs</li>
                        <li>✔ Automação de processos</li>
                    </ul>

                    <div className="flex gap-4 mt-4">
                        <Link href="https://github.com/Joao2708-P" target="_blank">
                            <FaGithub className="text-3xl hover:text-white text-[#ADB7BE]" />
                        </Link> 
                        <Link href="https://www.linkedin.com/in/joao-guilherme-pereira-dos-santos-7a5b2b290/" target="_blank">
                            <FaLinkedin className="text-3xl hover:text-white text-[#ADB7BE]" />
                        </Link> 
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-center items-center text-center">

                    <h3 className="text-2xl font-bold text-white mb-4">
                        Resposta rápida pelo WhatsApp
                    </h3>

                    <p className="text-[#ADB7BE] mb-6 max-w-md">
                        Normalmente respondo em poucos minutos durante o horário comercial.
                    </p>

                    <button 
                        onClick={handleWhatsAppClick}
                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-8 rounded-lg w-full max-w-md flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                    >
                        <FaWhatsapp className="text-2xl" />
                        Falar no WhatsApp
                    </button>

                </div>
            </section>
        </main>
    )
}

export default Contact