import Navbar from './components/Navbar'
import Home from './components/Home.js'
import ProjectDisplay from './components/ProjectDisplay'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Settings from './components/Settings'
import { useEffect, useState } from 'react'
const axios = require('axios');

function App() {

    const [projects, setProjects] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {

        async function fetchData() {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER}`)
            setProjects(data.projects)
            setUser(data.user)
        }
        fetchData()
    },[])


    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {projects &&
                        <>
                            <Route path="/" element={<Home user={user} projects={projects} />}/>
                            <Route path="/:project" element={<ProjectDisplay projects={projects}/>} />
                            <Route path="/settings" element={<Settings user={user} projects={projects}/> }/>
                        </>
                    }
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
  );
}

export default App;
