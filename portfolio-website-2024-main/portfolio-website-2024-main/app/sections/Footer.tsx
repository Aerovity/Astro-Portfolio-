import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <motion.section
      className=" h-[15vh] w-full  items-center justify-center bg-[#0E1016] pt-10  font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pb-0 lg:pt-6"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-[90%] flex-row items-center justify-center text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
        {/* Footer content removed */}
      </motion.div>
    </motion.section>
  );
};

export default Footer;
