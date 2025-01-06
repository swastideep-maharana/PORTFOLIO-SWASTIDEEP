import { useEffect, useState } from "react"; // Import necessary hooks
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to make sure this runs only on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render the content after the component has mounted on the client
  if (!isClient) {
    return null; // Prevent SSR errors
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
