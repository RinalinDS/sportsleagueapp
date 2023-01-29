import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';
import { MainPage } from './pages/main/MainPage';
import { Results } from './pages/results/Results';
import { RootStateType } from './store';
import { useSelector } from 'react-redux';
import { AuthState, setIsLoggedIn } from './store/auth-reducer';
import { useAppSelector } from './hooks/useAppSelector';

export const App = () => {
  const {isLoggedIn} = useAppSelector<AuthState>(state => state.auth)

  return (
    <div>
      <Header />

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

