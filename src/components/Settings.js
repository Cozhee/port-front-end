import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import {CardActions} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"
import Modal from '@mui/material/Modal'
import FileUpload from '../components/FileUpload'
import { useState } from 'react'
import axios from 'axios'
import Snackbar from "@mui/material/Snackbar";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NewProjectModel from '../components/NewProjectModal'


function Settings({ user, projects }) {

    const id = user.id
    const [modalState, setModalState] = useState(false)
    const [selected, setSelected] = useState(null)
    const [name, setName] = useState(user.name)
    const [title, setTitle] = useState(user.title)
    const [githubLink, setGithubLink] = useState(user.githubLink)
    const [linkedIn, setLinkedIn] = useState(user.linkedIn)
    const [about, setAbout] = useState(user.about)

    const [open, setOpen] = useState(false)
    const [newOpen, setNewOpen] = useState(false)


    const updatedUser = {
        id,
        name,
        title,
        githubLink,
        linkedIn,
        about
    }

    const handleOpen = (project) => {
        setModalState(true)
        setSelected(project)
    }

    const handleClose = () => {
        setModalState(false)
        setSelected(null)
    }

    const handleUpdateAlert = () => {
        setOpen(false)
    }

    const handleInformationUpdate = async (obj, route) => {
        try {
            const id = obj.id
            await axios.put(`${process.env.REACT_APP_SERVER}/${route}/${id}`, obj)
            setModalState(false)
            setOpen(true)
        } catch(error) {
            console.error(error)
        }
    }

    const handleAddProject = (id) => {
        try {
            setNewOpen(true)
        } catch(error) {
            console.error(error)
        }
    }

    const handleCloseNewProjectModal = () => {
        setNewOpen(false)
    }

    return (

        <>
            <Container className="intro-settings" sx={{ marginTop: 15 }}>
                <Typography variant="overline" sx={{ textDecoration: 'underline', fontSize: '18px' }}>
                    Navbar
                </Typography>
                <Typography variant="body1">
                    Name
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Typography variant="body1">
                    Title
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Typography variant="body1">
                    Intro line:
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={3}
                    value={user.intro}
                />

                <Box mt={5}>
                    <Divider />
                </Box>


            </Container>



            <Container sx={{ marginTop: 5}}>
                <Typography variant="overline" sx={{ textDecoration: 'underline', fontSize: '18px' }}>
                    Links
                </Typography>
                <Typography variant="body1">
                    Github
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                />
                <Typography variant="body1">
                    LinkedIn
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={linkedIn}
                    onChange={(e) => setLinkedIn(e.target.value)}
                />

                <Box mt={5}>
                    <Divider />
                </Box>

            </Container>

            <Container sx={{ marginTop: 5}}>
                <Typography variant="overline" sx={{ textDecoration: 'underline', fontSize: '18px' }}>
                    About Me
                </Typography>
                <Typography variant="body1">
                    Body
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={6}
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                />
                <Typography variant="body1">
                    Resume (.pdf)
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={user.resume}
                />
                <FileUpload/>
                <Box mt={5}>
                    <Divider />
                </Box>

            </Container>

            <Container sx={{ marginTop: 5 }}>

                <Typography variant="overline" sx={{ textDecoration: 'underline', fontSize: '18px' }}>
                    Projects
                </Typography>
                <Button onClick={() => handleAddProject(user.id)}>
                    <AddCircleIcon/>
                </Button>
                <Grid container spacing={2}>
                    {projects.map(project => {
                        return (
                            <Grid key={project.id} item xs={12} sm={6} lg={3}>
                                <Card sx={{ maxWidth: 275 }}>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {project.title}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button color="success" onClick={() => handleOpen(project)} size="small">Edit Project Details</Button>
                                        <Button color="warning">Delete</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                    <Modal open={modalState} onClose={handleClose}>
                        <ProjectModalDisplay handleInformationUpdate={handleInformationUpdate} project={selected}/>
                    </Modal>
                    <Modal open={newOpen} onClose={handleCloseNewProjectModal}>
                        <NewProjectModel/>
                    </Modal>
                </Grid>
                <br/>
                <Button onClick={() => handleInformationUpdate(updatedUser, 'user')} variant="contained">Save</Button>
            </Container>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                message="User information updated! Check our your new homepage."
                onClose={handleUpdateAlert}
            />
        </>

    )
}

function ProjectModalDisplay({ project, handleInformationUpdate }) {

    const id = project.id
    const [title, setTitle] = useState(project.title)
    const [description, setDescription] = useState(project.description)
    const [githubLink, setGithubLink] = useState(project.githubLink)
    const [liveLink, setLiveLink] = useState(project.liveLink)
    const [purpose, setPurpose] = useState(project.purpose)
    const [problems, setProblems] = useState(project.problems)
    const [lessons, setLessons] = useState(project.lessons)
    const [displayDescription, setDisplayDescription] = useState(project.displayDescription)

    const obj = {
        id,
        title,
        description,
        githubLink,
        liveLink,
        purpose,
        problems,
        lessons,
        displayDescription
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxHeight: '85vh',
        minWidth: '80%',
        backgroundColor: 'background.paper',
        boxShadow: 24,
        p: 4,
        overflow: 'scroll'
    };

    return (
        <Box sx={style}>
            <Box my={5}>
                <Typography variant="overline" component="h2">
                    Project Title
                </Typography>
                <TextField
                    value={title}
                    fullWidth
                    variant="outlined"
                    size="small"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Project Description
                </Typography>
                <TextField
                    value={description}
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Github
                </Typography>
                <TextField
                    value={githubLink}
                    fullWidth
                    variant="outlined"
                    size="small"
                    onChange={(e) => setGithubLink(e.target.value)}
                />
                <Typography variant="overline">
                    Hosted Live
                </Typography>
                <TextField
                    value={liveLink}
                    fullWidth
                    variant="outlined"
                    size="small"
                    onChange={(e) => setLiveLink(e.target.value)}
                />
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Project Purpose
                </Typography>
                <TextField
                    value={purpose}
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    onChange={(e) => setPurpose(e.target.value)}
                />
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Project Problems
                </Typography>
                <TextField
                    value={problems}
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    onChange={(e) => setProblems(e.target.value)}
                />
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Lessons Learned
                </Typography>
                <TextField
                    value={lessons}
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    onChange={(e) => setLessons(e.target.value)}
                />
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Skills
                </Typography>
                <Typography>
                    {project.skills.map(skill => {
                        return (
                            <>
                                {skill + '  '}
                            </>

                        )
                    })}
                </Typography>
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Project Intro
                </Typography>
                <TextField
                    value={displayDescription}
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    onChange={(e) => setDisplayDescription(e.target.value)}
                />
            </Box>
            <Button onClick={() => handleInformationUpdate(obj, 'project')} variant="contained" >Update project</Button>
        </Box>
    )
}

export default Settings