import Copy from "@/components/Copy/Copy";
import Button from "@/components/Button/Button";
import { Mail } from "lucide-react";
import Image from "next/image";
import FadeInOnView from "@/components/FadeInOnView";
export const HomeContentText = () => {
   return (
      <div className="pt-16 sm:pt-32 pb-12 relative z-20 bg-white">
         <div className="wrapper grid gap-10 bg-white border-l border-r border-neutral-200">
            <Copy animateOnScroll={true} delay={0.25}>
               <h2 className="text-4xl">
                  <span>Qu’est-ce qu’un bon site web ?</span>
                  <br />
                  <span className="text-neutral-500">
                     Et surtout, pourquoi faire appel à un pro ?
                  </span>
               </h2>
            </Copy>
            <div className="grid sm:grid-cols-[2fr_3fr] gap-4 sm:gap-14  justify-center items-center">
               <FadeInOnView>
                  <Image
                     src="/home/avatar-regis.webp"
                     alt="Graph and Co Régis avatar"
                     width={400}
                     height={600}
                     className="rounded-xl"
                     priority
                     sizes="(max-width: 640px) 100vw, 400px"
                  />
               </FadeInOnView>
               <div>
                  <Copy animateOnScroll={true} delay={0.25}>
                     <p>
                        Un site internet doit véhiculer votre image, vos
                        valeurs, votre histoire, bref votre ADN… tout en
                        apportant des réponses claires aux besoins de votre(vos)
                        cibles. Or, pour faire la différence, et au-delà de la
                        qualité des contenus (textes et visuels), un bon site
                        internet doit aussi et surtout offrir une expérience
                        utilisateur séduisante. Son ergonomie, son interface,
                        son responsive design, sa vitesse d’affichage… :
                        derrière ces impératifs techniques, c’est toute une
                        mécanique de précision que seul un pro peut élaborer.
                        Oui, encore une fois, c’est un métier. Vous l’aurez
                        compris : créer un site aujourd’hui, c’est conjuguer
                        stratégie, technique et expérience utilisateur. Place
                        aux pros ! Graph & Co vous accompagne avec méthode pour
                        vous aider à atteindre vos objectifs en ligne. Notre
                        talent : vous doter d’un site performant et efficace
                        auprès de votre clientèle. Quels que soient votre niveau
                        initial et les fonctionnalités de votre site, nous vous
                        apprendrons à administrer votre site comme un pro.
                        D’ailleurs, nos clients apprennent vite puisque,
                        paraît-il, nous sommes pédagogues ;-)
                     </p>
                  </Copy>
                  <div className="mt-6">
                     <Button
                        animateOnScroll={true}
                        delay={0.25}
                        variant="primary"
                        href="/contact"
                        icon={Mail}
                     >
                        Nous contacter
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
