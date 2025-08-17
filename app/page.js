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
        <Hero />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default page;
