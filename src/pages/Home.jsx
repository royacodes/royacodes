import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import KnowledgeHub from "../components/KnowledgeHub";
import Playground from "../components/Playground";
import Resources from "../components/Resources";
import About from "../components/About";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <KnowledgeHub />
      <Playground />
      <Resources />
      <About />
      <Testimonials />
    </main>
  );
}
