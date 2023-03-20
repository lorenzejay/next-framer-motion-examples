import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={router.asPath}
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{
          opacity: [1, 1, 0],
          x: -5000,
          transition: { duration: 0.7 },
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
