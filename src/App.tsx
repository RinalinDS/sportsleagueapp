import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';
import { MainPage } from './pages/main/MainPage';
import { Results } from './pages/results/Results';

export const App = () => {
  const [isLoggedIn, setIsLoggenIn] = useState(false)
  const onClickHandler = () => {
    setIsLoggenIn(!isLoggedIn)
  }

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onClickHandler={onClickHandler} />

      {
        isLoggedIn ?
          <>
            <MainPage />
            <Results />
          </>
          :
          <Login />
      }
    </div>
  );
}

