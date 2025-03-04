import { NavLink } from "react-router";
import { motion } from "motion/react";
import { useCountStore } from "../store";

const Home: React.FC = () => {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.inc);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 gap-4">
      <motion.h1
        animate={{ rotate: 360 }}
        className="text-6xl font-bold text-gray-800"
      >
        Home
      </motion.h1>
      <button className="btn">
        <NavLink to="/setting">click to Setting</NavLink>
      </button>
      <button className="btn btn-secondary" onClick={increment}>
        <span>count: {count}</span>
      </button>
    </div>
  );
};

export default Home;
