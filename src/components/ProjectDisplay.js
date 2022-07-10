import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button'


function ProjectDisplay({projects}) {

    const projectName = window.location.pathname.slice(1).split('%20').join(' ')
    const displayedProject = projects.filter(content => content.title === projectName)

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
        color: '#19323C',
    }));

    return (
        <>
                <Grid container sx={{ alignItems: 'center', backgroundColor: '#19323C' }} p={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ color: '#F2545B'}}>
                            {displayedProject[0].title}
                        </Typography>
                        <Typography variant="overline" sx={{ color: '#F2545B'}}>
                            STACK
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            {displayedProject[0].skills.map(skill => {
                                return (
                                    <Item>{skill}</Item>
                                )
                            })}
                        </Stack>
                        <Typography variant="body2" mt={2} sx={{ color: 'white'}}>
                            {displayedProject[0].displayDescription}
                        </Typography>
                        <Typography variant="h5" sx={{ color: '#F2545B'}} mt={5}>
                            Project Purpose and Goal
                        </Typography>
                        <Typography variant="body1" mt={1} sx={{ color: 'white'}}>
                            {displayedProject[0].purpose}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} mt={5}>
                        <Box
                            component="img"
                            src={displayedProject[0].img}
                            sx={{
                                width: '100%'
                            }}
                        >

                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ alignItems: 'center' }} p={2}>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={displayedProject[0].img2}
                            sx={{
                                width: '100%'
                            }}
                        >

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} mt={5}>
                        <Typography variant="h5" sx={{ color: '#19323C'}}>
                            Problems and Process
                        </Typography>
                        <Typography variant="body1" mt={2}>
                            {displayedProject[0].problems}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }} mt={5} p={2}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h5" sx={{ color: '#19323C'}}>
                            Lessons Learned
                        </Typography>
                        <Typography variant="body1" mt={1}>
                            {displayedProject[0].lessons}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container mt={5}>
                    <Grid xs={12} item sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button href="/">Back to Home</Button>
                    </Grid>
                </Grid>
        </>

    )
}

export default ProjectDisplay