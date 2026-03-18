"use client"
import Image from "next/image"
import React from "react"

const About = () => {

    return(
        <section id="about" className="text-white mb-28">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16">
                
                <Image 
                    src="/images/Template-Pc.jpg" 
                    alt="Sistemas desenvolvidos por João Guilherme" 
                    width={500} 
                    height={500} 
                />

                <div>
                    <h2 className="text-4xl font-bold mb-4">
                        Como posso ajudar seu negócio
                    </h2>

                    <p className="text-base lg:text-lg mb-6 text-[#ADB7BE]">
                        Desenvolvo sistemas e aplicações sob medida para empresas que 
                        precisam automatizar processos, reduzir erros e ganhar produtividade.
                    </p>

                    <div className="space-y-4">

                        <div className="p-4 bg-[#181818] rounded-xl">
                            <h3 className="font-semibold text-lg">
                                Sistemas personalizados
                            </h3>
                            <p className="text-sm text-[#ADB7BE]">
                                Desenvolvimento completo de sistemas web adaptados ao seu negócio.
                            </p>
                        </div>

                        <div className="p-4 bg-[#181818] rounded-xl">
                            <h3 className="font-semibold text-lg">
                                Automação de processos
                            </h3>
                            <p className="text-sm text-[#ADB7BE]">
                                Reduza tarefas manuais e aumente a eficiência da sua operação.
                            </p>
                        </div>

                        <div className="p-4 bg-[#181818] rounded-xl">
                            <h3 className="font-semibold text-lg">
                                Integrações e APIs
                            </h3>
                            <p className="text-sm text-[#ADB7BE]">
                                Conecte sistemas, pagamentos, ERPs e plataformas externas.
                            </p>
                        </div>

                    </div>

                    <div className="mt-8">
                        <h3 className="font-semibold mb-2">Tecnologias principais</h3>
                        <p className="text-sm text-[#ADB7BE]">
                            PHP, C#, Java, Node.js, React, Next.js, MySQL, PostgreSQL
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About