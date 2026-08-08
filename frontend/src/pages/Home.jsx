import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import FeaturesPreview from '../components/FeaturesPreview';

const Home = () => {
  return (
    <div className="home-page">
      {/* =================================
          HERO SECTION
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
    </div>
  );
};

export default Home;
