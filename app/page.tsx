import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";


export default function Home() {
  return (
    <main>
      <div className="relative bg-violet-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
          <AboutMe />
        </div>
      </div>
      <div className="bg-violet-900 antialiased overflow-x-hidden">
        <div className="container mx-auto px-8">
          <Technologies />
        </div>
      </div>
    </main>
  );
}
