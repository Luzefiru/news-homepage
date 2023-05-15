import Header from './components/Header';
import MainCover from './assets/images/image-web-3-desktop.jpg';

function App() {
  return (
    <div className="App xl:m-[10rem] xl:mt-[5rem] xl:mb-[8rem]">
      <Header />
      <main className="grid grid-cols-3 gap-x-6 gap-y-12">
        <article className="col-span-2">
          <img alt="Geometric Shapes" src={MainCover} />
          <div className="grid grid-cols-2 mt-8 gap-4">
            <h1 className="font-black text-6xl text-very-dark-blue">
              The Bright Future of Web 3.0?
            </h1>
            <div className="relative">
              <p className="text-dark-grayish-blue">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
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
        <section>
          <h2>New</h2>
          <article>
            <a href="/">
              <h3>New Hydrogen VS Electric Cars</h3>
            </a>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <hr />
          <article>
            <a href="/">
              <h3>The Downsides of AI Artistry</h3>
            </a>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
          <hr />
          <article>
            <a href="/">
              <h3>Is VC Funding Drying Up?</h3>
            </a>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </section>
        <section className="col-span-full">
          <article>
            <div>01</div>
            <a href="/">
              <h4>Reviving Retro PCs</h4>
            </a>
            <p>What happens when old PCs are given modern upgrades?</p>
          </article>
          <article>
            <div>02</div>
            <a href="/">
              <h4>Top 10 Laptops of 2022</h4>
            </a>
            <p>Our best picks for various needs and budgets.</p>
          </article>
          <article>
            <div>03</div>
            <a href="/">
              <h4>The Growth of Gaming</h4>
            </a>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
