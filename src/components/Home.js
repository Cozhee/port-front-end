import Typography from '@mui/material/Typography'
import {Box} from "@mui/material";
import Grid from '@mui/material/Grid'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Contact from '../components/Contact'
import About from '../components/About'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import Button from '@mui/material/Button'

function Home({skills, projects}) {

    return (
        <>

        <Grid container spacing={2} p={2} sx={{ justifyContent: 'center', alignItems: 'center', height: '100vh', paddingBottom: 10 }}>
            <Grid item xs={12} md={10} lg={4} sx={{  display: { xs: 'none', sm: 'block'} }}>
                <Box
                    component="img"
                    src="/images/home-pic.png"
                    sx={{
                        width: '100%',
                        borderRadius: '20px'
                    }}
                >
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BsGithub href="https://github.com/Cozhee" target="_blank" size={35} style={{ color: '#24292e', marginRight: 10 }}/>
                    <BsLinkedin href="https://www.linkedin.com/in/davis-r-cody/" target="_blank" size={35} style={{ color: '#0b65c2', marginRight: 10 }}/>
                    <Button href="#" style={{ backgroundColor: '#4de09a', color: 'white' }}>
                        Contact me
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12} md={10} lg={6}>
                <Typography variant="h3" sx={{ color: 'black' }}>
                    My name is Cody!
                </Typography>
                <Typography variant="h4" sx={{ color: 'black' }}>
                    I am a <Box component="span" sx={{ color: '#F2545B'}}>software developer</Box> <br/> Passionate about coding and learning <br/>
                    <Skill skills={skills}/>
                </Typography>
            </Grid>
        </Grid>

        <About/>
        <Project projects={projects}/>
        <Contact/>
        </>
    )
}

export default Home
