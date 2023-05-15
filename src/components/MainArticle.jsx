import MainCover from '../assets/images/image-web-3-desktop.jpg';

const MainArticle = () => {
  return (
    <article
      aria-label="Headline Article"
      className="lg:col-span-2 lg:grid xl:block"
    >
      <img
        className="object-cover aspect-square lg:h-full lg:object-cover lg:aspect-auto xl:h-auto xl:object-contain"
        alt="Geometric Shapes"
        src={MainCover}
      />
      <div className="grid lg:grid-cols-2 mt-8 gap-4">
        <h1 className="font-black text-5xl lg:text-6xl text-very-dark-blue">
          The Bright Future of Web 3.0?
        </h1>
        <div className="relative grid gap-8 lg:block">
          <p className="text-dark-grayish-blue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a
            className="w-fit lg:absolute lg:bottom-0 uppercase tracking-[0.25rem] font-semibold bg-soft-red hover:bg-very-dark-blue py-3 px-9 text-white"
            href="/"
          >
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

export default MainArticle;
