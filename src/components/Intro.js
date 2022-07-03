import Typography from '@mui/material/Typography'
import {Box} from "@mui/material";
import Grid from '@mui/material/Grid'
import img from '../images/logo512.png'
import Skill from '../components/Skill'
import Divider from '@mui/material/Divider';

function Intro() {


    return (
        <Grid container spacing={2} sx={{ justifyContent: 'center', marginBottom: 10, paddingBottom: 20, height: '100vh', backgroundColor: '#19323C' }}>
            {/*<Grid item xs={12} sm={4}>*/}
            {/*    <Box sx={{ display: { sm: 'none', md: 'block'}} }>*/}
            {/*        <img alt="me" src={img} />*/}
            {/*    </Box>*/}
            {/*</Grid>*/}
            <Grid item xs={12} sm={5} sx={{ my: 'auto', marginLeft: 5 }}>
                <Typography variant="h4" sx={{ color: 'white' }}>
                    I am Cody, a <Box component="span" sx={{ color: '#F2545B'}}>software developer</Box> <br/> Passionate about coding and learning <br/>
                    <Skill />
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Intro