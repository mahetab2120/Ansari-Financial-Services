import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="relative overflow-x-hidden">

      <Header />

      {/* Padding top so navbar doesn’t overlap */}
      <main className="pt-32 space-y-32">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
