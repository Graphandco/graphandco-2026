"use client";
import "./home.css";
import Hero from "@/components/Home/Hero";
import Showreel from "@/components/Showreel/Showreel";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTACard from "@/components/CTACard/CTACard";
import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
   useEffect(() => {
      const rafId = requestAnimationFrame(() => {
         ScrollTrigger.refresh(true);
      });

      const onLoad = () => ScrollTrigger.refresh(true);
      window.addEventListener("load", onLoad, { passive: true });

      return () => {
         cancelAnimationFrame(rafId);
         window.removeEventListener("load", onLoad);
      };
   }, []);

   return (
      <>
         {/* <Preloader /> */}
         <Hero />

         <div className="wrapper bg-white text-2xl">
            <Copy animateOnScroll={true} delay={0.25}>
               <p>
                  Un site internet doit véhiculer votre image, vos valeurs,
                  votre histoire, bref votre ADN… tout en apportant des réponses
                  claires aux besoins de votre(vos) cibles. Or, pour faire la
                  différence, et au-delà de la qualité des contenus (textes et
                  visuels), un bon site internet doit aussi et surtout offrir
                  une expérience utilisateur séduisante. Son ergonomie, son
                  interface, son responsive design, sa vitesse d’affichage… :
                  derrière ces impératifs techniques, c’est toute une mécanique
                  de précision que seul un pro peut élaborer. Oui, encore une
                  fois, c’est un métier. Vous l’aurez compris : créer un site
                  aujourd’hui, c’est conjuguer stratégie, technique et
                  expérience utilisateur. Place aux pros ! Graph & Co vous
                  accompagne avec méthode pour vous aider à atteindre vos
                  objectifs en ligne. Notre talent : vous doter d’un site
                  performant et efficace auprès de votre clientèle. Quels que
                  soient votre niveau initial et les fonctionnalités de votre
                  site, nous vous apprendrons à administrer votre site comme un
                  pro. D’ailleurs, nos clients apprennent vite puisque,
                  paraît-il, nous sommes pédagogues ;-)
               </p>
            </Copy>
         </div>
         <Showreel />

         <section className="featured-work">
            <div className="container">
               <div className="featured-work-header-content">
                  <div className="featured-work-header">
                     <Copy animateOnScroll={true} delay={0.25}>
                        <h1>Featured Work</h1>
                     </Copy>
                  </div>

                  <div className="arrow">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 32 32"
                        fill="none"
                        className="icon"
                     >
                        <path
                           d="M16 26.6665L16 5.33317"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        ></path>
                        <path
                           d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        ></path>
                     </svg>
                  </div>

                  <div className="featured-work-header-copy">
                     <Copy animateOnScroll={true} delay={0.25}>
                        <p className="lg">
                           From motion to concept, pieces born from quiet
                           sketches, late nights, and just the right amount of
                           chaos.
                        </p>
                     </Copy>
                  </div>
               </div>

               <FeaturedWork />
            </div>
         </section>

         <section className="client-reviews-header-container">
            <div className="container">
               <div className="client-reviews-header-content">
                  <div className="client-reviews-header">
                     <Copy animateOnScroll={true} delay={0.25}>
                        <h1>People Approved</h1>
                     </Copy>
                  </div>

                  <div className="arrow">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 32 32"
                        fill="none"
                        className="icon"
                     >
                        <path
                           d="M16 26.6665L16 5.33317"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        ></path>
                        <path
                           d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        ></path>
                     </svg>
                  </div>

                  <div className="client-reviews-header-copy">
                     <Copy animateOnScroll={true} delay={0.25}>
                        <p className="lg">
                           Unfiltered thoughts from the people who survived our
                           creative process. Or at least that’s what they told
                           us.
                        </p>
                     </Copy>
                  </div>
               </div>
            </div>
         </section>

         <ClientReviews />

         <Spotlight />

         <CTACard />

         <Footer />
      </>
   );
};

export default Page;
