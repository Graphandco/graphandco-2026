"use client";
import Copy from "@/components/Copy/Copy";
import Button from "@/components/Button/Button";
import { isInitialLoad } from "@/components/Preloader/Preloader";
import { useResponsive } from "@/hooks/UseResponsive";
import Image from "next/image";

export default function Hero() {
   const { isPhone, isMobile, isTablet, isDesktop } = useResponsive();
   function getHeroImageSource() {
      if (isPhone) return "/hero/bg-hero-phone.avif";
      if (isMobile) return "/hero/bg-hero-mobile.avif";
      if (isTablet) return "/hero/bg-hero-tablet.avif";
      if (isDesktop) return "/hero/bg-hero-desktop.avif";
      return "/hero/bg-hero-desktop.avif";
   }
   const heroImageSource = getHeroImageSource();

   return (
      <section className="relative w-full h-[100svh] overflow-hidden">
         <div className="absolute inset-0 z-0">
            <Image
               src={heroImageSource}
               alt="Hero background"
               fill
               className="object-cover"
               priority
               sizes="100vw"
            />
         </div>
         <div className="container flex justify-center items-end relative z-10">
            <div className="w-[65%] h-full flex flex-col justify-between items-center text-center max-[1000px]:w-full max-[1000px]:justify-center max-[1000px]:gap-8">
               <div className="hero-header">
                  <Copy animateOnScroll={false} delay={0.75}>
                     <div className="text-10xl font-bold">Graph and Co</div>
                  </Copy>
               </div>

               <div className="absolute bottom-0 left-0 w-full p-8">
                  <Copy
                     animateOnScroll={false}
                     delay={isInitialLoad ? 6.35 : 1.65}
                  >
                     <div className="flex justify-between items-end">
                        <p className="sm">&copy; Codegrid Dept.</p>
                        <p className="sm">( Workroom 101 )</p>
                     </div>
                  </Copy>
               </div>

               <div className="w-[50%] flex flex-col items-center gap-8 max-[1000px]:w-full max-[1000px]:gap-8">
                  <Copy
                     animateOnScroll={false}
                     delay={isInitialLoad ? 6.05 : 1.15}
                  >
                     <p className="lg">
                        We build visuals, stories, and systems for people who
                        like their creativity a little unpredictable.
                     </p>
                  </Copy>

                  <Button delay={isInitialLoad ? 6.35 : 1.55} href="/studio">
                     Visit the Studio
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}
