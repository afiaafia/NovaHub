import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import FeaturesPreview from '../components/FeaturesPreview';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <FeaturesPreview />
      <HowItWorks />
      <Pricing />
      <About />
      <Blog />
      <Contact />
    </>
  );
}
