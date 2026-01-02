"use client";

import Copy from "@/components/Copy/Copy";
import Button from "@/components/Button/Button";
import { isInitialLoad } from "@/components/Preloader/Preloader";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
// import MagnetButton from "../ui/MagnetButton";
import { useResponsive } from "@/hooks/UseResponsive";
import MagnetButton from "../MagnetButton";

const Hero = () => {
   const sectionRef = useRef(null);
   const titleRef = useRef(null);

   const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end start"],
   });

   const yTitle = useTransform(scrollYProgress, [0, 1], [0, -80]);
   const yDesc = useTransform(scrollYProgress, [0, 1], [0, -120]);
   const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

   //    const scrollToSection = () => {
   //       const section = document.getElementById("notre-expertise");
   //       if (section) {
   //          section.scrollIntoView({ behavior: "smooth" });
   //       }
   //    };
   const { isPhone, isMobile, isTablet, isDesktop } = useResponsive();
   function getHeroImageSource() {
      if (isPhone) return "/home/bg-hero-phone.avif";
      if (isMobile) return "/home/bg-hero-mobile.avif";
      if (isTablet) return "/home/bg-hero-tablet.avif";
      if (isDesktop) return "/home/bg-hero-desktop.webp";
      return "/home/bg-hero-desktop.webp";
   }

   const heroImageSource = getHeroImageSource();

   return (
      <section
         id="hero"
         ref={sectionRef}
         className="relative min-h-screen overflow-hidden"
      >
         {/* Fond avec scale */}
         <motion.div style={{ scale: scaleBg }} className="absolute inset-0">
            <div className="relative w-full h-full will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:h-1/4 after:w-full after:bg-linear-to-t after:from-transparent after:to-black/70">
               <Image
                  src={heroImageSource}
                  alt="Hero"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
               />
            </div>
         </motion.div>

         <div className="wrapper-full absolute inset-0 flex flex-col justify-center">
            {/* <div className="mb-8 flex flex-col items-end gap-1 text-white font-semibold">
               <div>Interface utilisateur</div>
               <div>Expérience utilisateur</div>
               <div>Sécurité</div>
               <div>Accessibilité</div>
            </div> */}

            <div ref={titleRef}>
               <div className="text-10xl title-font font-semibold text-white xs:mix-blend-exclusion">
                  <Copy
                     animateOnScroll={false}
                     //  delay={isInitialLoad ? 6.35 : 1.65}
                     delay={1.65}
                  >
                     <span>Graph & Co</span>
                  </Copy>
               </div>
            </div>

            <div className="relative mt-4 space-y-4">
               <h1 className="text-2xl title-font text-white font-semibold ">
                  <Copy animateOnScroll={false} delay={1.65}>
                     <span>
                        Votre agence web à Colmar - Création de sites internet
                        sur-mesure
                     </span>
                  </Copy>
               </h1>
               <div className="text-white max-w-lg text-lg leading-tight">
                  <Copy animateOnScroll={false} delay={1.65}>
                     <span>
                        Nous sommes spécialisés dans la réalisation de sites
                        web. Moderne et intuitif, votre site sera un puissant
                        levier pour accroitre la vitalité de votre entreprise.
                     </span>
                  </Copy>
               </div>
            </div>
            {/* <div className="relative mt-12 mx-auto">
               <MagnetButton onClick={scrollToSection} />
            </div> */}
            <MagnetButton />
         </div>
      </section>
   );
};

export default Hero;
