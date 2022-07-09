import Navbar from './components/Navbar'
import Home from './components/Home.js'
import ProjectDisplay from './components/ProjectDisplay'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Settings from './components/Settings'

function App() {

    const skills = ['JavaScript', 'React', 'MaterialUI', 'Express', 'Node', 'Sequelize', 'Git', 'Auth0', 'Github', 'Postgres', 'Mongo', 'Heroku', 'Vue', 'Jest']

    const projects = [
        {
            "title": "Tech Perspective",
            "description": "Survey application used to record the inclusion results from students in the tech industry",
            "img" : "../images/testimage.png",
            "img2": "../images/testimage3.png",
            "githubLink": "https://github.com/Cozhee",
            "liveLink": "https://tech-perspective-301d85.netlify.app/",
            "skills": ['React', 'MongoDB', 'Netlify', 'Heroku', 'Express', 'Bootstrap']
        },
    ]


    return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home skills={skills} projects={projects} />}/>
                <Route path="/:project" element={<ProjectDisplay projects={projects}/>} />
                <Route path="/settings" element={<Settings/> }/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
