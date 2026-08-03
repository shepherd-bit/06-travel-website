import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import PropertyType from './components/PropertyType';
import Consultants from './components/Consultants';
import Community from './components/Community';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Offers />
        <PropertyType />
        <Consultants />
        <Community />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}