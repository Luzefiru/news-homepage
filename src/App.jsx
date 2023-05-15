import Header from './components/Header';
import MainArticle from './components/MainArticle';
import NewArticles from './components/NewArticles';
import TrendingArticles from './components/TrendingArticles';

function App() {
  return (
    <div className="App mb-14 lg:mx-[4rem] lg:mt-[3rem] lg:mb-[4rem] xl:mx-[10rem] xl:mt-[5rem] xl:mb-[8rem]">
      {/* <Header /> */}
      <main className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12 p-4 lg:p-0">
        <MainArticle />
        <NewArticles />
        <TrendingArticles />
      </main>
    </div>
  );
}

export default App;
