import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import TrustPoints from "./components/TrustPoints";
import QuoteForm from "./components/QuoteForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <TrustPoints />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
