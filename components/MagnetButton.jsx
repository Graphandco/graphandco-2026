import {
   motion,
   useMotionTemplate,
   useMotionValue,
   useSpring,
} from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";
// import { MdOutlineArrowUpward } from "react-icons/md";

const MagnetButton = ({ onClick }) => {
   const ref = useRef(null);

   const x = useMotionValue(0);
   const y = useMotionValue(0);

   const xSpring = useSpring(x, {
      mass: 3,
      stiffness: 400,
      damping: 50,
   });
   const ySpring = useSpring(y, {
      mass: 3,
      stiffness: 400,
      damping: 50,
   });

   const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

   const handleMouseMove = (e) => {
      if (!ref.current) return;

      const { height, width, left, top } = ref.current.getBoundingClientRect();

      x.set(e.clientX - (left + width / 2));
      y.set(e.clientY - (top + height / 2));
   };

   const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
   };

   return (
      <motion.div
         ref={ref}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         onClick={onClick}
         style={{ transform }}
         transition={{ type: "spring", stiffness: 200, damping: 20 }}
         className="group relative grid justify-center self-center h-[50px] w-[50px] sm:h-[100px] sm:w-[100px] place-content-center rounded-full border-2 border-white transition-colors duration-700 ease-out cursor-pointer"
      >
         <div className="pointer-events-none relative z-10 text-5xl text-white transition-all duration-700 ease-out group-hover:rotate-45">
            <ArrowDownRight size={36} />
         </div>

         <div className="pointer-events-none absolute inset-0 z-0 scale-0 rounded-full bg-black/50 transition-transform duration-700 ease-out group-hover:scale-100" />
      </motion.div>
   );
};

export default MagnetButton;
