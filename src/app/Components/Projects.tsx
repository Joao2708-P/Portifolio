"use client"
import React, { useState } from "react"
import ProjectCards from "./ProjectCards"

const projectsData = [
    {
        id: 1,
        tittle: "Inventix",
        description: "Aplicativo de gerenciamento de estoque( em construção )",
        image: "/images/Inventix.png",
        gitUrl: "",
        viewUrl: "",
        tag: ["All", "mobile"]
    },
    {
        id: 2,
        tittle: "Asses",
        description: "Loja de roupas de moda de estilo social e urbano( em construção )",
        image: "/images/Construction-1.jpg",
        gitUrl: "",
        viewUrl: "",
        tag: ["All", "Web"]
    },
    {
        id: 3,
        tittle: "AutoZap",
        description: "Aplicativo de automatização",
        image: "/images/logo_autoZap.png",
        gitUrl: "https://github.com/Joao2708-P/AutoZap",
        viewUrl: "https://auto-zap.vercel.app/",
        tag: ["All", "Web"]
    },
    {
        id: 4,
        tittle: "BarberShop",
        description: "Gerenciador de tarefas",
        image: "/images/Construction-1.jpg",
        gitUrl: "https://github.com/Joao2708-P/Barber_shop",
        viewUrl: "https://barber-shop-gules-six.vercel.app/",
        tag: ["All", "web"]
    }

]

const Projects = () => {

    const[selectTag, setSelectTag] = useState<string>("All")
    const filterProjects = projectsData.filter(project => selectTag === "All" || project.tag.includes(selectTag))


    return(
        <main id="projects">
            <section>
                <h2 className="text-center text-5xl font-bold  mb-4">Meus Projetos</h2>
                <div className="text-white flex flex-row justify-center items-center gap-1 py-6">
                    <button onClick={() => setSelectTag("All")} className="rounded-full border-2 border-purple-700 px-6 py-3 text-xl cursor-pointer">
                        All
                    </button>
                    <button onClick={() => setSelectTag("Web")} className="rounded-full border-2 border-slate-700 hover:border-sky-600 px-6 py-3 text-xl cursor-pointer">
                        Web
                    </button>
                    <button onClick={() => setSelectTag("mobile")} className="rounded-full border-2 border-slate-700 hover:border-sky-600 px-6 py-3 text-xl cursor-pointer">
                        Mobile
                    </button>
                </div>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {filterProjects.map((project) => <ProjectCards 
                    key={project.id} 
                    title={project.tittle} 
                    description={project.description} 
                    imageUrl={project.image}
                    gitUrl={project.gitUrl}
                    viewUrl={project.viewUrl}/>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Projects