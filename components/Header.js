import Link from "next/link";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useMemo } from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "About", to: "/about", id: 2 },
];

const HeaderLink = ({ href, name, cycleOpen }) => {
  const router = useRouter();

  const selected = useMemo(() => {
    if (router.pathname === "/" && href === "/") {
      return true;
    }
    if (router.pathname.indexOf(href) !== -1 && href !== "/") {
      return true;
    }
    return false;
  }, [router.pathname, href]);
  return (
    <Link
      className={`${
        selected ? "text-blue-500" : "text-white"
      } font-bold text-5xl`}
      href={href}
      onClick={cycleOpen}
    >
      {name}
    </Link>
  );
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const Header = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <header className="absolute w-full h-full flex z-10">
      <AnimatePresence>
        {open && (
          <motion.aside
            id="content"
            className="w-full h-full"
            initial={{ x: 5000 }}
            animate={{
              x: 0,
              background: "#000",
              opacity: 0.9,
              z: 999,
              transition: { ease: "easeInOut", duration: 0.75 },
            }}
            exit={{
              x: 5000,
              opacity: 0,
              transition: { delay: 0.2, duration: 0.75 },
            }}
          >
            <motion.div
              // id="header-content-1"
              // initial={{ x: 3000 }}
              // animate={{
              //   x: 0,
              //   transition: {
              //     delay: 0.25,
              //     duration: 1,
              //   },
              // }}
              // transition={{ delay: 0.1 }}
              // exit={{ x: 5000, transition: { duration: 1.25 } }}
              className="relative mx-auto space-y-12 lg:space-y-0 lg:space-x-12 h-full flex flex-col items-center lg:items-start lg:flex-row px-4 lg:px-12 xl:px-24 3xl:px-0 pt-32 lg:pt-64"
            >
              <motion.div className="lg:w-full">
                <div className="hidden ml-auto lg:w-1/4 lg:block">
                  <div className="flex flex-col text-white space-y-4">
                    <h3 className="text-2xl font-semibold text-white">
                      Social:
                    </h3>
                    <Link
                      className="flex items-center space-x-2"
                      rel="nofollow"
                      href={
                        "https://www.linkedin.com/company/uplift-digital-solutions/"
                      }
                    >
                      <span className="text-xl">LinkedIn</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-linkedin"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                        <line x1="8" y1="11" x2="8" y2="16"></line>
                        <line x1="8" y1="8" x2="8" y2="8.01"></line>
                        <line x1="12" y1="16" x2="12" y2="11"></line>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                      </svg>
                    </Link>
                    <Link
                      href={
                        "https://www.instagram.com/uplift.digitalsolutions/"
                      }
                      rel={"nofollow"}
                      className="flex w-full items-center space-x-2 space-between"
                    >
                      <span className="text-xl">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-instagram"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                        <circle cx="12" cy="12" r="3"></circle>
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                      </svg>
                    </Link>
                    <Link
                      href={"https://www.facebook.com/upliftdigitalsolutions/"}
                      rel="nofollow"
                      className="flex items-center space-x-2 space-between"
                    >
                      <span className="text-xl">Facebook</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-facebook"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
              <motion.div className="lg:w-full">
                <div className="space-y-4 text-center lg:text-left">
                  {links.map(({ name, to, id }) => (
                    <motion.div
                      key={id}
                      // href={to}
                      // variants={itemVariants}
                      className="sm:ml-auto w-auto"
                    >
                      <HeaderLink cycleOpen={cycleOpen} href={to} name={name} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      <div className="absolute w-full">
        <div className="w-full flex lg:grid grid-cols-12 justify-between items-center max-w-7xl mx-auto py-4 px-4 lg:px-12 xl:px-24 xl:py-8 2xl:px-0 z-20">
          <div className="col-span-3">
            <Logo text={"Next + Framer"} open={open} />
          </div>
          <motion.ul
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="hidden lg:flex items-center space-x-12 col-span-6 place-content-center"
          >
            <li>
              <Link
                href={"/about"}
                className="tracking-wider hover:text-primary transition-colors ease-in-out duration-300"
              >
                About
              </Link>
            </li>
          </motion.ul>
          <div className="flex items-center space-x-6 col-span-3 place-self-end">
            <motion.button
              animate={open ? { color: "white" } : { color: "black" }}
              className="z-[100]"
              onClick={cycleOpen}
            >
              <AnimatePresence>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    stroke="none"
                    d={open ? "M0 0h24v24H0z" : "M0 0h24v24H0z"}
                    fill="none"
                    transition={{ ease: "easeInOut", duration: 1 }}
                  ></motion.path>
                  {open ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </>
                  ) : (
                    <>
                      <line x1="4" y1="6" x2="20" y2="6"></line>
                      <line x1="4" y1="12" x2="20" y2="12"></line>
                      <line x1="4" y1="18" x2="20" y2="18"></line>
                    </>
                  )}
                </motion.svg>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
