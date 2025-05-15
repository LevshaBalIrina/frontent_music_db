import './App.css';
import { Footer } from '../common/components/Footer/Footer';
import { Header } from '../common/components/Header/Header';
import { Main } from './Main';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
