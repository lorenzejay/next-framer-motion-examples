import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.main} min-h-[88vh] 3xl:min-h-[94vh] space-y-24 max-w-7xl mx-auto pt-32 3xl:pt-64`}
      >
        <div
          className={`flex justify-between items-center px-4 lg:px-12 xl:px-24 2xl:px-0`}
        >
          <p className="backdrop-blur-sm bg-white/30 p-4 rounded-md bg-white/">
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <Link
              className="flex"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </Link>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
