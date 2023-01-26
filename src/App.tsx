import { Header } from './components/Header/Header';
import { MainPage } from './pages/main/MainPage';
import { Results } from './pages/results/Results';

export const App = () => {
  return (
    <div>
      <Header />
      <MainPage />
      <Results />
    </div>
  );
}

