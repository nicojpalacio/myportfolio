import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import { FloatingNav } from "@/components/ui/FloatingNav";


export default function Home() {
  const navItems = [
    
    { name: "Sobre Mi", link: "#about"  },
    { name: "Tecnologias", link: "#technologies" },
    { name: "Proyectos", link: "#testimonials" },
    { name: "Contacto", link: "#contacto" },
  ];

  return (
    <main>
      <div className="relative bg-[#121212] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full mb-10">
          <FloatingNav navItems={navItems} />
          <Hero />
          <AboutMe />
        </div>
      </div>
      <div className="bg-[#121212] antialiased overflow-x-hidden">
        <div className="container mx-auto px-8">
          <Technologies />
        </div>
      </div>
    </main>
  );
}