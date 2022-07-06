import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import {styled} from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import {CardActions} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"
import Modal from '@mui/material/Modal'
import { useState } from 'react'

function Settings() {

    const [modalState, setModalState] = useState(false)

    const handleOpen = () => setModalState(true)
    const handleClose = () => setModalState(false)


    const InputFields = styled(TextField)({
        variant: "outlined",
        maxWidth: '500px'
    })


    const fakeProject = {
        title: 'React Learning',
        description: 'Its about learning ReactIts about learning ReactIts about learning ReactIts about learning ReactIts about learning ReactIts about learning React',
        githubLink: 'https://github',
        liveLink: 'https://livelink',
        purpose: 'to get rich or die tryingto get rich or die tryingto get rich or die tryingto get rich or die tryingto get rich or die tryingto get rich or die tryingto get rich or die tryingto get rich or die tryingto get rich or die trying',
        problems: 'learning how to code with MaterialUIlearning how to code with MaterialUIlearning how to code with MaterialUIlearning how to code with MaterialUIlearning how to code with MaterialUIlearning how to code with MaterialUIlearning how to code with MaterialUI',
        lessons: 'I learned how to use MaterialUI... sortaI learned how to use MaterialUI... sortaI learned how to use MaterialUI... sortaI learned how to use MaterialUI... sortaI learned how to use MaterialUI... sortaI learned how to use MaterialUI... sortaI learned how to use MaterialUI... sortaI learned how to use MaterialUI... sortaI learned how to use MaterialUI... sorta',
        skills: ['React', 'Redux', 'Postgres'],
        intro: 'This project was super hardThis project was super hardThis project was super hardThis project was super hardThis project was super hardThis project was super hardThis project was super hard'
    }


    return (

        <>
            <Container className="intro-settings" sx={{ marginTop: 15}}>
                <Typography variant="overline" sx={{ textDecoration: 'underline', fontSize: '18px' }}>
                    Navbar
                </Typography>
                <Typography variant="body1">
                    Name
                </Typography>
                <InputFields
                    fullWidth
                    variant="outlined"
                    size="small"
                />
                <Typography variant="body1">
                    Title
                </Typography>
                <InputFields
                    fullWidth
                    variant="outlined"
                    size="small"
                />
                <Typography variant="body1">
                    Intro line:
                </Typography>
                <InputFields
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={3}
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
                <InputFields
                    fullWidth
                    variant="outlined"
                    size="small"
                />
                <Typography variant="body1">
                    LinkedIn
                </Typography>
                <InputFields
                    fullWidth
                    variant="outlined"
                    size="small"
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
                <InputFields
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={6}
                />
                <Typography variant="body1">
                    Resume (.pdf)
                </Typography>
                <InputFields
                    fullWidth
                    variant="outlined"
                    size="small"
                />

                <Box mt={5}>
                    <Divider />
                </Box>

            </Container>

            <Container sx={{ marginTop: 5 }}>

                <Typography variant="overline" sx={{ textDecoration: 'underline', fontSize: '18px' }}>
                    Projects
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ maxWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Tech Perspective
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={handleOpen} size="small">Edit Project Details</Button>
                            </CardActions>
                        </Card>
                        <Modal
                            open={modalState}
                            onClose={handleClose}
                        >
                            <ProjectModalDisplay project={fakeProject}/>
                        </Modal>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ maxWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Portfolio
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Edit Project Details</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

function ProjectModalDisplay({ project }) {

    const [title, setTitle] = useState(project.title)
    const [description, setDescription] = useState(project.description)
    const [githubLink, setGithubLink] = useState(project.githubLink)
    const [liveLink, setLiveLink] = useState(project.liveLink)
    const [purpose, setPurpose] = useState(project.purpose)
    const [problems, setProblems] = useState(project.problems)
    const [lessons, setLessons] = useState(project.lessons)
    const [intro, setIntro] = useState(project.intro)


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxHeight: '85vh',
        backgroundColor: 'background.paper',
        boxShadow: 24,
        p: 4,
        overflow: 'scroll'
    };

    return (
    <Box sx={style}>
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
        <Typography variant="overline">
            Skills
        </Typography>
        {project.skills.map(skill => {
            return (
                <Typography sx={{ mt: 2 }}>
                    {skill}
                </Typography>
            )
        })}
        <Typography variant="overline">
            Project Intro
        </Typography>
        <TextField
            value={intro}
            fullWidth
            variant="outlined"
            size="small"
            multiline
            rows={4}
            onChange={(e) => setIntro(e.target.value)}
        />
        <Button>Save</Button>
    </Box>
    )
}

export default Settings