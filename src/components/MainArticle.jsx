import MainCover from '../assets/images/image-web-3-desktop.jpg';

const MainArticle = () => {
  return (
    <article aria-label="Headline Article" className="col-span-2">
      <img alt="Geometric Shapes" src={MainCover} />
      <div className="grid grid-cols-2 mt-8 gap-4">
        <h1 className="font-black text-6xl text-very-dark-blue">
          The Bright Future of Web 3.0?
        </h1>
        <div className="relative">
          <p className="text-dark-grayish-blue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a
            className="absolute bottom-0 uppercase tracking-[0.25rem] font-semibold bg-soft-red hover:bg-very-dark-blue py-3 px-9 text-white"
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
