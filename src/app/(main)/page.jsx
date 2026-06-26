import FeatureAnimal from "@/components/shared/feature_animal/FeatureAnimal";
import HeroSection from "@/components/shared/home/Heor";
import TraditionInsights from "@/components/shared/home/Guided";
import HeritageBreeds from "@/components/shared/home/heritageBreed";


const HomePage = async () => {
  return (
    <div>
      <HeroSection/>
      <FeatureAnimal/>
      <TraditionInsights/>
      <HeritageBreeds/>
    </div>
  )
};

export default HomePage;
