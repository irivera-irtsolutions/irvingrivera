import Background from "./components/Background";
import Contact from "./components/Contact";
import FeaturedWork from "./components/FeaturedWork";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowIWork from "./components/HowIWork";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
        <HowIWork />
        <Background />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
