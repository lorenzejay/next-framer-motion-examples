import { Layout } from "@/components/Layout";
import React from "react";

const About = () => {
  return (
    <div className="min-h-[88vh] 3xl:min-h-[94vh] xl:overflow-hidden pt-32 3xl:pt-64">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <h1 className="text-4xl lg:text-7xl">About</h1>
      </div>
    </div>
  );
};

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
