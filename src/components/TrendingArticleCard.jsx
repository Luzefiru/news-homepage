const TrendingArticleCard = ({ cover, number, heading, description, href }) => {
  return (
    <article className="grid gap-6 grid-cols-3">
      <img alt="Retro Computers" src={cover} />
      <div className="col-span-2">
        <div className="text-grayish-blue font-bold text-4xl">{number}</div>
        <a href={href}>
          <h4 className="font-black text-very-dark-blue text-lg my-2 hover:text-soft-red">
            {heading}
          </h4>
        </a>
        <p className="text-dark-grayish-blue text-medium">{description}</p>
      </div>
    </article>
  );
};

export default TrendingArticleCard;
