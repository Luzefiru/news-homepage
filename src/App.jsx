import Header from './components/Header';
import MainArticle from './components/MainArticle';
import SideArticles from './components/SideArticles';

function App() {
  return (
    <div className="App xl:m-[10rem] xl:mt-[5rem] xl:mb-[8rem]">
      <Header />

      <main className="grid grid-cols-3 gap-x-6 gap-y-12">
        <MainArticle />
        <SideArticles />
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
