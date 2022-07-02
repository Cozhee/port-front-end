import Navbar from './components/Navbar'
import Intro from './components/Intro.js'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Project />
        <Contact />

        <Footer />
    </div>
  );
}

export default App;
