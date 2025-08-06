"use client"
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    
    const handleWhatsAppClick = () => {
        // Substitua pelo seu número de WhatsApp (formato: 5511999999999)
        const phoneNumber = "5519995357442"; // Altere para seu número real
        
        // Mensagem pré-formatada
        const message = "Olá João! Vi seu portfólio e gostaria de conversar sobre um projeto. Podemos agendar uma conversa?";
        
        // Codifica a mensagem para URL
        const encodedMessage = encodeURIComponent(message);
        
        // Cria o link do WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Abre o WhatsApp em uma nova aba
        window.open(whatsappUrl, '_blank');
    }

    return(
        <main id="contact">
            <h1 className="text-center text-white font-bold text-6xl mt-12 mb-[-5rem]">Contato</h1>
            <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
                <div>
                    <h5 className="text-xl font-bold text-white my-2">Entre em Contato</h5>
                    <p className="text-[#d2d2d2] mb-4 max-w-md">
                        Entre em contato, caso queira o desenvolvimento de seus projetos,
                        estou sempre em busca de oportunidades, para o desenvolvimento de 
                        projetos. Atentando-se sempre aos detalhes exigidos pelo cliente 
                    </p>
                    <div className="socials flex flex-row gap-2 ">
                        <Link href="https://github.com/Joao2708-P">
                            <FaGithub className="text-6xl text-purple-900"/>
                        </Link> 
                        <Link href="https://www.linkedin.com/in/joao-guilherme-pereira-dos-santos-7a5b2b290/">
                            <FaLinkedin className="text-6xl "/>
                        </Link> 
                    </div>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Vamos Conversar?
                        </h3>
                        <p className="text-[#d2d2d2] mb-6 max-w-md">
                            Clique no botão abaixo para iniciar uma conversa no WhatsApp. 
                            Estou sempre disponível para discutir novos projetos e oportunidades!
                        </p>
                    </div>
                    
                    <button 
                        onClick={handleWhatsAppClick}
                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-8 rounded-lg w-full max-w-md flex items-center justify-center gap-3 transition-colors duration-300"
                    >
                        <FaWhatsapp className="text-2xl" />
                        Enviar Mensagem no WhatsApp
                    </button>
                    
                    <p className="text-[#9CA2A9] text-sm mt-4 text-center max-w-md">
                        Você será direcionado para o WhatsApp com uma mensagem pré-formatada. 
                        Sinta-se à vontade para personalizar a mensagem antes de enviar!
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Contact