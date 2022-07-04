import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button'


function ProjectDisplay({project}) {

    // const projectName = window.location.pathname.slice(1).split('%20').join(' ')
    const projectName = 'Tech Perspective'
    const displayedProject = project.filter(content => content.title === projectName)
    console.log(displayedProject)

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
        color: '#19323C',
    }));

    return (
        <>
                <Grid container sx={{ alignItems: 'center', backgroundColor: '#19323C' }} p={5}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ color: '#F2545B'}}>
                            Tech Perspective
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
                            This is a React application that had bootstrap mixed in. This project was from a client that was unfinished and needed fixing up to make it live and available for students at Code Fellows. It required a lot of grunt work to clean up code and reduce an excessive amount of API calls to the server.
                        </Typography>
                        <Typography variant="h5" sx={{ color: '#F2545B'}} mt={5}>
                            Project Purpose and Goal
                        </Typography>
                        <Typography variant="body1" mt={1} sx={{ color: 'white'}}>
                            This project was created to track statistics about students entering the tech world and their inclusion and exposure to technology prior to engaging in formal education. After the collection of the results it was detrimental that an admin would be able to review the results in a graph format giving immediate feedback on specific questions.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                <Grid container sx={{ alignItems: 'center' }} mt={5}>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={displayedProject[0].img}
                            sx={{
                                width: '100%'
                            }}
                        >

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ color: '#19323C'}}>
                            Problems and Process
                        </Typography>
                        <Typography variant="body1" mt={2}>
                            One of the first issues I encountered was a very slow runtime. On load the application would fetch results for all of the active surveys even if you were never to view that specific survey. I ended up rewriting the express backend server to only make API calls when they were absolutely necessary. The app was primarily built to only support one active survey so I had to rewrite the architecture to allow the use of multiple individual surveys.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }} mt={5} >
                    <Grid item xs={12} md={8}>
                        <Typography variant="h5" sx={{ color: '#19323C'}}>
                            Lessons Learned
                        </Typography>
                        <Typography variant="body1" mt={1}>
                            I learned so much during this process but most of all I would say how to contribute on a single project as a team. Everything I have done up until this point was on my own. Learning how to commit to the same repo on github, merging the conflicts, and coming up with solutions to our problems were all such valuable moments. It was great to see how a few people could have multiple approaches to a problem. This really opened up my eyes on how developing an application is not a one track path and can be solved in so many different ways!
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