import { NavLink } from "react-router";
import { motion } from "motion/react";

const About: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 gap-4">
      <motion.h1
        animate={{ rotate: -360 }}
        className="text-6xl font-bold text-gray-800"
      >
        Setting
      </motion.h1>
      <button className="btn">
        <NavLink to="/">click to Home</NavLink>
      </button>
    </div>
  );
};

export default About;
