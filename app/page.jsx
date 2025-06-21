import Services from '../components/Services';
import OnePost from '../components/OnePost';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header'
import About from '../components/About'
import Hero from '../components/Hero'
import '../app/globals.css'
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <Hero />
      <About />
      <Services />
      <OnePost />
      <Contact />
      <Footer />
    </main>
  );
}