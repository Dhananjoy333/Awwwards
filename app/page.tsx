import Hero from '@/app/_components/Hero'
import About from './_components/About';
import Navbar from './_components/Navbar';

export default function Home() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  );
}
