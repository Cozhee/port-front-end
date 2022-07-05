import Typography from '@mui/material/Typography'
import {Box} from "@mui/material";
import Grid from '@mui/material/Grid'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Contact from '../components/Contact'
import About from '../components/About'

function Home({skills, projects}) {

    return (
        <>

        <Grid container p={5} sx={{ justifyContent: 'center', marginBottom: 10, height: '100vh', backgroundColor: '#F3F7F0', paddingBottom: 20 }}>
            <Grid item xs={12} md={6} sx={{ margin: 'auto'}}>
                <Typography variant="h4" sx={{ color: 'black' }}>
                    I am a <Box component="span" sx={{ color: '#F2545B'}}>software developer</Box> <br/> Passionate about coding and learning <br/>
                    <Skill skills={skills}/>
                </Typography>
            </Grid>
        </Grid>

        <Project projects={projects}/>
        <About/>
        <Contact/>
        </>
    )
}

export default Home