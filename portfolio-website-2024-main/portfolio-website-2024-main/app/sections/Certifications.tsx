import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const Certifications = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pb-36 pt-16 md:pb-44 md:pt-20 lg:pb-56 lg:pt-20"
      id="certifications"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"CERTIFICATIONS"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
            <AnimatedBody text="● Machine Learning Specialization (Stanford University, DeepLearning.ai)" />
            
            <AnimatedBody
              delay={0.1}
              text="● Generative AI with Large Language Models (LLM) (AWS, DeepLearning.ai)"
            />

            <AnimatedBody
              delay={0.2}
              text="● Natural Language Processing (NLP) : Classification and Vector Space Models (DeepLearning.ai)"
            />

            <AnimatedBody
              delay={0.3}
              text="● Unsupervised Learning, Recommenders and Reinforcement Algorithms (Stanford University, DeepLearning.ai)"
            />

            <AnimatedBody
              delay={0.4}
              text="● Advanced Learning Algorithms: Neural Networks and Decision Trees (Coursera, Stanford University)"
            />

            <AnimatedBody
              delay={0.5}
              text="● Supervised Machine Learning: Regression and Classification (Stanford University, DeepLearning.ai)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
