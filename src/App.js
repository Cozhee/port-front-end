import Navbar from './components/Navbar'
import Intro from './components/Intro.js'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Contact />

        <Footer />
    </div>
  );
}

export default App;
