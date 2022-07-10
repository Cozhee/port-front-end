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
            "img": "../images/testimage.png",
            "img2": "../images/testimage3.png",
            "githubLink": "https://github.com/Cozhee",
            "liveLink": "https://tech-perspective-301d85.netlify.app/",
            "skills": ['React', 'MongoDB', 'Netlify', 'Heroku', 'Express', 'Bootstrap'],
            "displayDescription": "This is a React application that had bootstrap mixed in. This project was from a client that was unfinished and needed fixing up to make it live and available for students at Code Fellows. It required a lot of grunt work to clean up code and reduce an excessive amount of API calls to the server.",
            "purpose": "This project was created to track statistics about students entering the tech world and their inclusion and exposure to technology prior to engaging in formal education. After the collection of the results it was detrimental that an admin would be able to review the results in a graph format giving immediate feedback on specific questions.",
            "problems": "One of the first issues I encountered was a very slow runtime. On load the application would fetch results for all of the active surveys even if you were never to view that specific survey. I ended up rewriting the express backend server to only make API calls when they were absolutely necessary. The app was primarily built to only support one active survey so I had to rewrite the architecture to allow the use of multiple individual surveys.",
            "lessons": "I learned so much during this process but most of all I would say how to contribute on a single project as a team. Everything I have done up until this point was on my own. Learning how to commit to the same repo on github, merging the conflicts, and coming up with solutions to our problems were all such valuable moments. It was great to see how a few people could have multiple approaches to a problem. This really opened up my eyes on how developing an application is not a one track path and can be solved in so many different ways!"
        },
        {
            "title": "My Portfolio",
            "description": "Dynamically add and remove data from an admin panel to display your work",
            "img": "../images/homepage.png",
            "img2": "../images/contact.png",
            "githubLink": "https://github.com/Cozhee/port-front-end",
            "liveLink": "https://davisrcody.netlify.app",
            "skills": ['React', 'Express', 'MaterialUI', 'Node', 'Sequelize', 'Netlify'],
            "displayDescription": "Portfolio website to put on display my best work",
            "purpose": "I have always seen portfolio pages that is just full of static data. My mission was to incorporate a dashboard page where you have the power to update your projects, titles, and all the data associated with the application from one single place without having to edit any files internally.",
            "problems": "Creating the skills page displayed on the home page was a real challenge. You can't see from the viewers perspective but each badge along with the image and color scheme is dynamically rendered. From the admin settings page you specifically enter the skill you have and the badge is only then styled based on the skill. Mobile Layout was a bit of a hurdle but once I figured out one section the concepts were easy to apply across the whole webpage.",
            "lessons": "When I was first creating this project my architecture was off. As the application grew larger I could start to see how I was creating components that were not reusable. I was creating components and mapping inside of those components, rather than mapping and creating the components feeding them dynamic data. Seeing this from a wider perspective really helped me to understand how to make react components truly reusable."
        }
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
