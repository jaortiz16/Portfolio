'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Portfolio() {
  const [isDarkNav, setIsDarkNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");
      
      if (projectsSection && contactSection) {
        const projectsSectionRect = projectsSection.getBoundingClientRect();
        const contactSectionRect = contactSection.getBoundingClientRect();
        
        const isProjectsVisible = projectsSectionRect.top < window.innerHeight / 2 && projectsSectionRect.bottom > window.innerHeight / 2;
        const isContactVisible = contactSectionRect.top < window.innerHeight / 2 && contactSectionRect.bottom > window.innerHeight / 2;

        setIsDarkNav(isProjectsVisible || isContactVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-black dark:bg-gray-900">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/fondo.mp4" type="video/mp4" />
      </video>
      <div className="z-10 relative">
      <header className={`sticky top-0 z-10 flex items-center px-4 h-14 bg-transparent backdrop-filter backdrop-blur-lg ${isDarkNav ? 'text-black' : 'text-white'}`}>
          <Link className="flex items-center justify-center" href="#">
            <TornadoIcon className="h-6 w-6  ms-7" />
            <span className="ml-2 text-lg font-bold ">
              Portafolio
            </span>
          </Link>
          <nav className="ml-auto flex items-center gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium  hover:underline underline-offset-4"
              href="#home"
            >
              Inicio
            </Link>
            <Link
              className="text-sm font-medium  hover:underline underline-offset-4"
              href="#projects"
            >
              Proyectos
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#contact"
            >
              Contacto
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section
            className="w-full min-h-screen py-12 md:py-24 lg:py-32 flex items-center"
            id="home"
          >
            <div className="container grid items-center gap-6 px-4 text-center md:px-6 md:text-left lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                    Andres Ortiz
                  </h1>
                  <p className="max-w-prose text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Programador web full stack con experiencia en diferentes
                    tecnologías y lenguajes de programación.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm gap-1 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#contact"
                  >
                    Contactame
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center rounded-xl overflow-hidden">
                <img
                  alt="Andres Ortiz"
                  className="rounded-full"
                  height="250"
                  src="/picture.png"
                  style={{
                    aspectRatio: "250/250",
                    objectFit: "cover",
                  }}
                  width="250"
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-black dark:bg-black">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Sobre mi
                  </h2>
                  <p className="max-w-prose text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Desarollador web full stack con experiencia en diferentes
                    tecnologías y lenguajes de programación, con habilidades en
                    diseño de interfaces y experiencia de usuario.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Conocimientos
                  </h2>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="text-white">UI/UX Design</li>
                    <li className="text-white">HTML/CSS</li>
                    <li className="text-white">JavaScript</li>
                    <li className="text-white">Responsive Design</li>
                    <li className="text-white">Adobe Creative Suite</li>
                    <li className="text-white">React</li>
                    <li className="text-white">Node.js</li>
                    <li className="text-white">Express</li>
                    <li className="text-white">MongoDB</li>
                    <li className="text-white">SQL</li>
                    <li className="text-white">Git</li>
                    <li className="text-white">CI/CD</li>
                    <li className="text-white">Testing</li>
                    <li className="text-white">Agile/Scrum</li>
                    <li className="text-white">Next</li>
                    <li className="text-white">Django</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
            id="projects"
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Proyectos
                  </h2>
                </div>
                <div className="grid gap-6">
                  <div className="border rounded-lg">
                    <img
                      alt="Project 1"
                      className="aspect-video rounded-t-lg object-cover object-center"
                      height="350"
                      src="/clone.png"
                      width="600"
                    />
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold tracking-tighter">
                        Clon de whatsapp
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Desarolle un clon de whatsapp con react y firebase, con
                        autenticación y base de datos en tiempo real.
                      </p>
                    </div>
                  </div>
                  <div className="border rounded-lg">
                    <img
                      alt="Project 2"
                      className="aspect-video rounded-t-lg object-cover object-center"
                      height="350"
                      src="/fcg.png"
                      width="600"
                    />
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold tracking-tighter">
                        Creador de codigo a traves de dibujos con IA
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Cree un programa que permite a los usuarios dibujar
                        formas y convertirlas en código utilizando inteligencia
                        artificial.
                      </p>
                    </div>
                  </div>
                  <div className="border rounded-lg">
                    <img
                      alt="Project 1"
                      className="aspect-video rounded-t-lg object-cover object-center"
                      height="350"
                      src="/angular.jpg"
                      width="600"
                    />
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold tracking-tighter">
                        Full stack con Angular y spring boot
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                       Ivente un sistema de inventario con angular y spring boot

                      </p>
                    </div>
                  </div>
                  <div className="border rounded-lg">
                    <img
                      alt="Project 1"
                      className="aspect-video rounded-t-lg object-cover object-center"
                      height="350"
                      src="/proyectolanding.png"
                      width="600"
                    />
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold tracking-tighter">
                        Landing page con GSAP
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Diseñe una landing page con animaciones utilizando GSAP
                        y react.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="w-full py-12 md:py-24 lg:py-32 border-t bg-gray-100"
            id="contact"
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 justify-center">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Contactame
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Si tienes alguna pregunta o quieres trabajar conmigo, no dudes
                </p>
                <form className="grid gap-4 max-w-sm">
                  <div className="grid gap-1.5">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Ingresa tu nombre" required />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Ingresa tu email"
                      required
                      type="email"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Ingresa tu mensaje"
                      required
                    />
                  </div>
                  <Button type="submit">Enviar Mensaje</Button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex items-center justify-center py-6 w-full shrink-0 border-t bg-black dark:bg-black">
          <p className="text-xs text-white">
            © 2024 Andres Ortiz. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

function TornadoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 4H3" />
      <path d="M18 8H6" />
      <path d="M19 12H9" />
      <path d="M16 16h-6" />
      <path d="M11 20H9" />
    </svg>
  );
}
