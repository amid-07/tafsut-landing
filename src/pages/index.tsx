import Head from 'next/head';
import Hero from '../components/ui/Hero'
import Features from '../components/ui/Features'
import Testimonials from '../components/ui/Testimonials'
import Footer from '../components/ui/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>TAFSUT | Solution contre l'addiction</title>
        <meta name="description" content="Reprenez le contrôle de votre vie." />
      </Head>
      
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Footer />
        {/* Vous pourrez ajouter Testimonials et Footer plus tard */}
      </main>
    </>
  );
}