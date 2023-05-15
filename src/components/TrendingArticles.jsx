import TrendingArticleCard from './TrendingArticleCard';
import Article1Cover from '../assets/images/image-retro-pcs.jpg';
import Article2Cover from '../assets/images/image-top-laptops.jpg';
import Article3Cover from '../assets/images/image-gaming-growth.jpg';

const TrendingArticles = () => {
  return (
    <section
      aria-label="Trending Articles"
      className="col-span-full grid gap-y-6 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-0"
    >
      <TrendingArticleCard
        cover={Article1Cover}
        number="01"
        heading="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades?"
        href="/"
      />
      <TrendingArticleCard
        cover={Article2Cover}
        number="02"
        heading="Top 10 Laptops of 2022"
        description="Our best picks for various needs and budgets."
        href="/"
      />
      <TrendingArticleCard
        cover={Article3Cover}
        number="03"
        heading="The Growth of Gaming"
        description="How the pandemic has sparked fresh opportunities."
        href="/"
      />
    </section>
  );
};

export default TrendingArticles;
