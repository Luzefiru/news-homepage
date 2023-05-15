import Header from './components/Header';
import MainArticle from './components/MainArticle';
import NewArticles from './components/NewArticles';
import TrendingArticles from './components/TrendingArticles';

function App() {
  return (
    <div className="App xl:m-[10rem] xl:mt-[5rem] xl:mb-[8rem]">
      <Header />

      <main className="grid grid-cols-3 gap-x-6 gap-y-12">
        <MainArticle />
        <NewArticles />
        <TrendingArticles />
      </main>
    </div>
  );
}

export default App;
