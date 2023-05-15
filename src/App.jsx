import Header from './components/Header';
import MainArticle from './components/MainArticle';

function App() {
  return (
    <div className="App xl:m-[10rem] xl:mt-[5rem] xl:mb-[8rem]">
      <Header />

      <main className="grid grid-cols-3 gap-x-6 gap-y-12">
        <MainArticle />
        <section className="bg-very-dark-blue p-7">
          <h2 className="text-soft-orange text-4xl font-bold">New</h2>
          <article>
            <a href="/">
              <h3 className="text-white font-bold text-xl mt-7 mb-2 hover:text-soft-orange">
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
              <h3 className="text-white font-bold text-xl mt-7 mb-2 hover:text-soft-orange">
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
              <h3 className="text-white font-bold text-xl mt-7 mb-2 hover:text-soft-orange">
                Is VC Funding Drying Up?
              </h3>
            </a>
            <p className="text-grayish-blue mb-7 leading-7">
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
