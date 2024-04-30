"use client"
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const creatFormSchema = z.object({
    email: z.string().email('Email inválido!'),
    assunto: z.string(),
    mensagem: z.string()
})

type FormData = z.infer<typeof creatFormSchema>

const Contact = () => {
    
    const {register, handleSubmit, formState: {errors} } = useForm<FormData>({
        resolver: zodResolver(creatFormSchema)
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
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
                        projetos. Atentando-se sempre aos detlhes exigidos pelo cliente 
                    </p>
                    <div className="socials flex flex-row gap-2 ">
                        <Link href="https://github.com/Joao2708-P">
                            <FaGithub className="text-6xl text-purple-900"/>
                        </Link> 
                        <Link href="https://www.linkedin.com/in/joao-guilherme-pereira-dos-santos-7a5b2b290/">
                            <FaLinkedin className="text-6xl "/>
                        </Link> 
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>
                    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                                Seu Email
                            </label>
                            <input 
                            type="email" 
                            {...register('email')}
                            id="email"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                            required placeholder="exemplo@gmail.com" />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="assunto" className="text-white block mb-2 text-sm font-medium">
                                Assunto
                            </label>
                            <input 
                            type="text" 
                            id="text"
                            {...register('assunto')}
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                            required placeholder="Assunto..." />
                             {errors.assunto && <p>{errors.assunto.message}</p>}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="Mensagem" className="text-white block mb-2 text-sm font-medium">
                                Mensagem
                            </label>
                            <textarea  
                                id="mensagem"
                                {...register('mensagem')} 
                                placeholder="Digite sua Mensagem..."
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            />
                             {errors.mensagem && <p>{errors.mensagem.message}</p>}
                        </div>

                        <button type="submit" className="bg-sky-500 hover:bg-sky-700 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Contact