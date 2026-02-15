"use client";

// import SectionLegend from "../SectionLegend";
import Button from "../Button/Button";
import Image from "next/image";
// import { useResponsive } from "@/hooks/UseResponsive";
// import { images } from "lucide-react";
import { BookImage, CornerDownRight } from "lucide-react";
import Copy from "@/components/Copy/Copy";

export const StickySection = ({}) => {
   // const { isPhone, isMobile, isTablet, isDesktop } = useResponsive();
   // function getHeroImageSource() {
   //    if (isPhone) return "/home/regis-avatar-mobile.avif";
   //    if (isMobile) return "/home/regis-avatar-mobile.avif";
   //    if (isTablet) return "/home/regis-avatar-tablet.avif";
   //    if (isDesktop) return "/home/regis-avatar.avif";
   //    return "/home/regis-avatar.avif";
   // }
   // const heroImageSource = getHeroImageSource();

   return (
      <div
         className="sticky top-0 h-screen flex items-center justify-center bg-black text-white z-1"
         id="notre-expertise"
      >
         <div className="wrapper flex flex-col gap-6 items-center text-center">
            <div className="flex items-center uppercase gap-1">
               <Copy animateOnScroll={true} delay={0.25}>
                  <CornerDownRight size={18} color="var(--primary)" />
               </Copy>
               <Copy animateOnScroll={true} delay={0.25}>
                  <span>Notre expertise</span>
               </Copy>
            </div>
            <Copy animateOnScroll={true} delay={0.25}>
               <h2 className="text-6xl font-bold">
                  Créons un site web performant et élégant.
               </h2>
            </Copy>
            <Copy animateOnScroll={true} delay={0.25}>
               <p className="max-w-xl text-lg">
                  Chaque projet est pensé pour s’adapter à vos besoins, votre
                  image, et vos ambitions.
               </p>
            </Copy>
            <Copy animateOnScroll={true} delay={0.25}>
               <Button
                  animateOnScroll={true}
                  delay={0.25}
                  variant="primary"
                  href="/contact"
                  icon={BookImage}
               >
                  Voir nos offres
               </Button>
            </Copy>
         </div>
      </div>
   );
};
