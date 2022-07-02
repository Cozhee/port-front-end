import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Img = styled('img')({

})

function About() {
    return (
        <Paper sx={{
            maxWidth: '75%',
            margin: 'auto'
        }}>
            <Grid container spacing={2}>
                <Grid item>
                    <Button>
                        About me
                    </Button>
                </Grid>
                <Grid xs={12} container>

                </Grid>
            </Grid>
        </Paper>
    )
}

export default About