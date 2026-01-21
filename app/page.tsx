import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Services />
      <Expertise />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
