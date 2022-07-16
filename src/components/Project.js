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
import {GrWorkshop} from 'react-icons/gr'

function Project({projects}) {

    const project = 'Projects'

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
            <Box pt={5} id="projects" maxWidth="sm" sx={{ mx: 'auto' }} spacing={2}>
                <Box sx={{ padding: 5}}>
                    <Typography variant="h4" sx={{ marginBottom: 1, textAlign: 'center' }}>
                        {project}
                        <GrWorkshop size={25} style={{ marginLeft: 10 }} />
                    </Typography>
                    <Typography variant="subtitle2">
                        On display are the projects I have completed either as a personal project or for a client. With each project you have the opportunity to check out the live website or directly browse the source code.
                    </Typography>
                </Box>
            </Box>

            <Container sx={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>

                <Grid container spacing={3}>
                    {projects.map(project => {

                        return (
                            <Grid key={project.id} item xs={12} md={6}>
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
                                            <a className="live-link" href={project.liveLink} target="_blank" rel="noreferrer">
                                                <RiLiveFill style={{ color: '#F2545B' }} size={25}/>
                                            </a>
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
                                        src={project.img}
                                        sx={{ width: 300, objectFit: 'contain', display: { xs: 'none', sm: 'block' } }}
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
