const NewArticles = () => {
  return (
    <section
      aria-label="New Articles"
      className="bg-very-dark-blue p-7 my-16 lg:my-0"
    >
      <h2 className="text-soft-orange text-4xl font-bold">New</h2>
      <article>
        <a href="/">
          <h3 className="text-white font-bold text-xl mt-7 mb-2 focus:text-soft-orange hover:text-soft-orange">
            Hydrogen VS Electric Cars
          </h3>
        </a>
        <p className="text-grayish-blue mb-7 leading-7">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </article>
      <hr className="border-0 h-px bg-dark-grayish-blue" />
      <article>
        <a href="/">
          <h3 className="text-white font-bold text-xl mt-7 mb-2 focus:text-soft-orange hover:text-soft-orange">
            The Downsides of AI Artistry
          </h3>
        </a>
        <p className="text-grayish-blue mb-7 leading-7">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </article>
      <hr className="border-0 h-px bg-dark-grayish-blue" />
      <article>
        <a href="/">
          <h3 className="text-white font-bold text-xl mt-7 mb-2 focus:text-soft-orange hover:text-soft-orange">
            Is VC Funding Drying Up?
          </h3>
        </a>
        <p className="text-grayish-blue mb-7 leading-7">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </article>
    </section>
  );
};

export default NewArticles;
