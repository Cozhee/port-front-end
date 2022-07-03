import Typography from '@mui/material/Typography'
import {Box} from "@mui/material";
import Grid from '@mui/material/Grid'
import Skill from '../components/Skill'

function Intro({skills}) {

    return (
        <Grid container spacing={2} sx={{ justifyContent: 'center', marginBottom: 10, paddingBottom: 20, height: '100vh', backgroundColor: '#F3F7F0' }}>
            <Grid item xs={12} md={6} sx={{ my: 'auto', marginLeft: 5 }}>
                <Typography variant="h4" sx={{ color: 'black' }}>
                    I am Cody, a <Box component="span" sx={{ color: '#F2545B'}}>software developer</Box> <br/> Passionate about coding and learning <br/>
                    <Skill skills={skills}/>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Intro