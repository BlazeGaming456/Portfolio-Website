"use client";

import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
  
  return (
    <div className="">
      <Navbar />
      <div className="min-w-screen">
        <Hero id='aboutme' />
        <Projects id='projects' />
      </div>
      <Footer id='contact' />
    </div>
  );
};

export default page;
