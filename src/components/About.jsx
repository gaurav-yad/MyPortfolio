import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full transition-all duration-100">
      <motion.div
        variants={fadeIn("right", "spring", 0.5, index, 0.75)}
        className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card`}
      >
        <div
          options={{
            max: 40,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary py-5 px-12 rounded-[20px] min-h-[280px] flex flex-col justify-evenly items-center"
        >

          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white-100 text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled full stack developer with experience in JavaScript and
        TypeScript, and expertise in frameworks like ReactJS and ExpressJS. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
