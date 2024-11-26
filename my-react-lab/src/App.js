import './App.css';
import Greeting from './components/greeting';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <div className='App'>
    <Greeting />
    <Header />
    <Content />
    <Footer />
    </div>
  );
}

export default App;
