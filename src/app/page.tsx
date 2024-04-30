import Header from "./Components/Header"
import HeroSection from "./Components/HeroSection"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <>  
      <main className="flex justify-center min-h-screen flex-col bg-[#121212]">
        <Header/>
        <div className="container mx-auto px-12 py-4 mt-40">
          <HeroSection/>
          <About/>
          <Projects/>
          <Contact/>
        </div>
        <Footer/>
      </main>
    </>
  )
}
