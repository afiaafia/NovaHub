import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import FeaturesPreview from '../components/FeaturesPreview';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="home-page">
      {/* =================================
          HERO
      ================================== */}
      <Hero />

      {/* =================================
          TRUSTED BY
      ================================== */}
      <TrustedBy />

      {/* =================================
          FEATURES PREVIEW
      ================================== */}
      <FeaturesPreview />

      {/* =================================
          HOW IT WORKS
      ================================== */}
      <HowItWorks />

      {/* =================================
          PRICING
      ================================== */}
      <Pricing />

      {/* =================================
          ABOUT
      ================================== */}
      <About />

      {/* =================================
          BLOG
      ================================== */}
      <Blog />

      {/* =================================
          CONTACT
      ================================== */}
      <Contact />
    </div>
  );
};

export default Home;
