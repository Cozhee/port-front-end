import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import {CardContent} from "@mui/material";
import Typography from '@mui/material/Typography'
import {CardMedia} from "@mui/material";
import {RiLiveFill} from 'react-icons/ri'
import {BsGithub} from 'react-icons/bs'
import Link from '@mui/material/Link'
import {CardActions} from "@mui/material";
import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button'

function Project({projects}) {

    const project = '{...Projects}'

    const ProjectCard = styled(Card)({
        display: 'flex',
        height: '100%',
        '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
        },
    });

    return (
        <>
            <Box maxWidth="sm" p={3} sx={{ mx: 'auto', marginBottom: 8 }} spacing={2}>
                <Typography variant="h5" sx={{ color: '#19323C', marginBottom: 1, textAlign: 'center' }}>
                    {project}
                </Typography>
                <Typography variant="subtitle2">
                    On display are the projects I have completed either as a personal project or for a client. With each project you have the opportunity to check out the live website or directly browse the source code.
                </Typography>
            </Box>

            <Container sx={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>

                <Grid container spacing={3}>
                    {projects.map(project => {

                        return (
                            <Grid key={project.title} item xs={12} md={6}>
                                <ProjectCard sx={{ display: 'flex', height: '100%', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto'}}>
                                            <Typography variant="h6">
                                                {project.title}
                                            </Typography>
                                            <Typography variant="p">
                                                {project.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link className="live-link" href={project.liveLink} sx={{ marginRight: 0.5}} >
                                                <RiLiveFill style={{ color: '#F2545B' }} size={25}/>
                                            </Link>
                                            <Link style={{ color: 'black' }} className="github-link" href={project.githubLink}>
                                                <BsGithub size={25}/>
                                            </Link>
                                            <Link style={{ color: 'black', textDecoration: 'none' }} className="github-link" href={project.title}>
                                                <Button>View Project</Button>
                                            </Link>
                                        </CardActions>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 200 }}
                                        src={project.img}
                                        alt="Live from space album cover"
                                    />
                                </ProjectCard>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default Project
