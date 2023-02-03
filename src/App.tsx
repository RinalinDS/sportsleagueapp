import { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { RoutesComponent } from './components/Routes/Routes';
import { useAppDispatch } from './hooks/useAppDispatch';
import { setIsLoggedIn } from './store/auth-reducer';

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const flag = localStorage.getItem('isLoggedIn')
    flag && dispatch(setIsLoggedIn(true))
  }, [])

  return (
    <div>
      <Header />
      <RoutesComponent />
    </div>
  );
}

