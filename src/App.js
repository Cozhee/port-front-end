import Navbar from './components/Navbar'
import Home from './components/Home.js'
import ProjectDisplay from './components/ProjectDisplay'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {

    const skills = ['JavaScript', 'React', 'MaterialUI', 'Express', 'Node', 'Sequelize', 'Git', 'Auth0', 'Github', 'Postgres', 'Mongo', 'Heroku', 'Vue', 'Jest']

    const projects = [
        {
            "title": "React State",
            "description": "Side effects which include my picture not going all the way over to the side",
            "img" : "../images/testimage2.png",
            "githubLink": "https://github.com/Cozhee",
            "liveLink": "https://github.com/Cozhee",
            "skills": ['React', 'Express', 'Netlify', 'Sequelize']
        },
        {
            "title": "Tech Perspective",
            "description": "Survey application used to record the inclusion results from students in the tech industry",
            "img" : "../images/testimage.png",
            "githubLink": "https://github.com/Cozhee",
            "liveLink": "https://github.com/Cozhee",
            "skills": ['React', 'Express', 'Netlify', 'Heroku']
        },
        {
            "title": "This portfolio",
            "description": "Dynamic portfolio application created to display unique information from each authenticated user",
            "img" : "../images/testimage3.png",
            "githubLink": "https://github.com/Cozhee",
            "liveLink": "https://github.com/Cozhee",
            "skills": ['React', 'Express', 'Sequelize', 'MaterialUI', 'React Router', 'Heroku', 'Netlify']
        },
        {
            "title": "Invoice Tracker",
            "description": "Records input and output data for businesses tracking work for clients",
            "img" : "../images/tp3.png",
            "githubLink": "https://github.com/Cozhee",
            "liveLink": "https://github.com/Cozhee",
            "skills": ['React', 'Express', 'Netlify', 'Heroku']
        }
    ]


    return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home skills={skills} projects={projects} />}/>
            <Route path="/project" element={<ProjectDisplay project={projects}/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
