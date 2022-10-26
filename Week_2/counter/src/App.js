import './App.css';
import './Header.css';
import './Main.css';
import './Footer.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';




const App = () => {
  return (
    <div>
      <Header name="Alexander" />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
