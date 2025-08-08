"use client"
import Image from "next/image"
import React, {useState} from "react"

const About = () => {

    const[tab, setTab] = useState("Habilidades");

    const handleTabChange = (selected: string) => {
        setTab(selected);
    }

    return(
        <section id="about" className="text-white mb-28">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16">
                <Image src="/images/Template-Pc.jpg" alt="Template Pc" width={500} height={500} />
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
                    <p className="text-base lg:text-lg">
                        Sou um desenvolvedor full stack, que atua principalmente
                        na parte de Web criando sites completos com a construção de 
                        APIs inclusa, também possuo experiência criando aplicações mobile,
                        com a ferramenta Android Studio bem como também com flutter e 
                        a linguagem Dart. Tendo conhecimento com banco de dados, como SQL-Server,
                        MySQL, PostgreSQL, Planet-Scale. E conhecimento das linguagens, C, C++, C#,
                        Java, JavaScript, TypeScript e python.  
                    </p>
                    <div className="flex flex-row mt-8">
                        <span onClick={() => handleTabChange("Habilidades")} className={`mr-3 font-semibold hover:text-white text-[#d2d2d2]  cursor-pointer ${tab === "Habilidades" ? "border-b border-sky-700 mb-8"  : ""}`}>
                            Habilidades
                        </span>
                        <span onClick={() => handleTabChange("Educação")} className={`mr-3 font-semibold hover:text-white text-[#d2d2d2] cursor-pointer ${tab === "Educação" ? "border-b border-sky-700 mb-8" : ""}`}>
                            Educação
                        </span>
                        <span onClick={() => handleTabChange("Experiência")} className={`mr-3 font-semibold hover:text-white text-[#d2d2d2] cursor-pointer ${tab === "Experiência" ? "border-b border-sky-700 mb-8" : ""}`}>
                            Experiência
                        </span>
                    </div>
                    {tab === "Habilidades" && (
                          <div className="flex flex-wrap justify-between">
                          <ul className="list-none">
                              <li>Node JS</li>
                              <li>Express</li>
                              <li>Prisma</li>
                              <li>ASP.Net</li>
                              <li>JavaScript</li>
                              <li>Java</li>
                              <li>Python</li>
                              <li>C#</li>
                              <li>C++/C</li>
                              <li>TypeScript</li>
                          </ul>
                          <ul className="list-none">
                              <li>React</li>
                              <li>NextJs</li>
                              <li>NestJs</li>
                              <li>Flutter</li>
                              <li>Android</li>
                              <li>PostegreSQL</li>
                              <li>MYSQL</li>
                              <li>SQL Server</li>
                              <li>HTML/CSS</li>
                              <li>Git/Github</li>
                          </ul>
                      </div>
                    )}
                    {tab === "Educação" && (
                        <div>
                            <li>Colégio Técnico de Campinas - COTUCA: Técnico em Informática</li>
                            <li>Rocketseat</li>
                        </div>
                    )}
                    {tab === "Experiência" && (
                        <div>
                            <li>PIBIC - Projeto de Iniciação Ciêntifica - 
                            AUTOMATIZAÇÃO DE AQUARIO PARA REPRODUÇÃO DEBETTA SPLENDENS EM CATIVEIRO</li>
                            <li><a href="https://busca360app.com.br/">Plataforma de logistas Busca360</a></li>
                            <li><a href="https://www.cuscoloko.com.br/">Ecommerce Cuscoloko</a></li>
                            <li><a href="https://tikbalm.com.br/">Ecommerce Tikbalm</a></li>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default About
