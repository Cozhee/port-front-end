import Navbar from './components/Navbar'
import Intro from './components/Intro.js'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

    const skills = ['JavaScript', 'React', 'MaterialUI', 'Express', 'Node', 'Sequelize', 'Git', 'Auth0', 'Github', 'Postgres', 'Mongo', 'Heroku', 'Vue', 'Jest']

    return (
    <div className="App">
        <Navbar />
        <Intro skills={skills}/>
        <Project />
        <Intro skills={skills}/>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
