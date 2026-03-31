import Hero from '@/app/_components/Hero'
import About from './_components/About';
import Navbar from './_components/Navbar';
import Features from './_components/Features';
import Story from './_components/Story';
import Contact from './_components/Contact';
import Footer from './_components/Footer';

export default function Home() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
  );
}
