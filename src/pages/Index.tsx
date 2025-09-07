import { Navigation } from "@/components/ui/navigation"
import { Hero } from "@/components/sections/Hero"
import { Equipment } from "@/components/sections/Equipment"
import { Services } from "@/components/sections/Services"
import { Footer } from "@/components/ui/footer"
import { Clients } from "@/components/sections/Clients"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Equipment />
        <Services />
        <Clients/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
