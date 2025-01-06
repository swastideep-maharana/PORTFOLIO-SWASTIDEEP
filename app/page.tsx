"use client"; // This makes sure this component runs client-side

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { useEffect, useState } from "react";

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure any client-side code runs inside useEffect
  useEffect(() => {
    setIsClient(true); // This ensures the component only renders on the client
  }, []);

  if (!isClient) {
    return null; // Optionally, you can return a loading state here
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        {/* <Experience /> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
