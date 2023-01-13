import './App.css';
import { CustomInput } from './components/CustomInput/CustomInput';
import { MainPage } from './pages/main/MainPage';

export const App = () => {


  return (
    <div style={{minHeight: '100vh', background: 'lightgreen'}}>
      <MainPage />
    </div>
  );
}

