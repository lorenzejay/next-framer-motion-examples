import Link from "next/link";
import { motion } from "framer-motion";

const Logo = ({ text, open }) => {
  const letters = Array.from(text);
  return (
    <Link href={"/"} className="z-[999]">
      <motion.span
        initial={{ color: "black", opacity: 0 }}
        animate={
          open
            ? {
                color: "white",
                opacity: [0, 1],
                transition: { delay: 1 },
              }
            : { color: "black", opacity: 1 }
        }
      >
        {letters.map((letter, i) => {
          return <motion.span key={i}>{letter}</motion.span>;
        })}
      </motion.span>
    </Link>
  );
};

export default Logo;
