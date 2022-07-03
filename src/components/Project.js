import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import {CardContent} from "@mui/material";
import Typography from '@mui/material/Typography'
import {CardMedia} from "@mui/material";
import img from '../images/git.png'
import img2 from '../images/tp1.png'
import {RiLiveFill} from 'react-icons/ri'
import {BsGithub} from 'react-icons/bs'
import Link from '@mui/material/Link'
import {CardActions} from "@mui/material";
import Divider from '@mui/material/Divider'

function Project() {

    const skill = 'React'
    const projects = '{...Projects}'

    return (
        <>
            <Box maxWidth="sm" sx={{ textAlign: 'center', mx: 'auto', marginBottom: 8 }} spacing={2}>
                <Typography variant="h5" sx={{ color: '#19323C', marginBottom: 1}}>
                    {projects}
                </Typography>
                <Typography variant="subtitle2">
                    On display is projects I have completed either as a personal project or for a client. With each project you have the opportunity to check out the live website or directly browse the source code.
                </Typography>
            </Box>

            <Container sx={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto'}}>
                                    <Typography variant="h6">
                                        Tech Perspective
                                    </Typography>
                                    <Typography variant="p">
                                        This project features the inclusion of students into the tech world and their access to technology at an early ad and their access to technology at an early ad and their access to technology at an early age
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link className="live-link" href="#" sx={{ marginRight: 0.5}} >
                                        <RiLiveFill style={{ color: '#F2545B' }} size={25}/>
                                    </Link>
                                    <Link style={{ color: 'black' }} className="github-link" href="#">
                                        <BsGithub size={25}/>
                                    </Link>
                                </CardActions>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 200, objectFit: 'contain' }}
                                image={img}
                                alt="Live from space album cover"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto'}}>
                                    <Typography variant="h6">
                                        Tech Perspective
                                    </Typography>
                                    <Typography variant="p">
                                        This project features the inclusion of students into the tech world and their access to technology at an early age
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link className="live-link" href="#" sx={{ marginRight: 1}} >
                                        <RiLiveFill style={{ color: '#F2545B' }} size={25}/>
                                    </Link>
                                    <Link style={{ color: 'black' }} className="github-link" href="#">
                                        <BsGithub size={25}/>
                                    </Link>
                                </CardActions>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 200 }}
                                image={img2}
                                alt="Live from space album cover"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto'}}>
                                    <Typography variant="h6">
                                        Tech Perspective
                                    </Typography>
                                    <Typography variant="p">
                                        This project features the inclusion of students into the tech world and their access to technology at an early age
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link className="live-link" href="#" sx={{ marginRight: 2}} >
                                        <RiLiveFill style={{ color: '#F2545B' }} size={25}/>
                                    </Link>
                                    <Link style={{ color: 'black' }} className="github-link" href="#">
                                        <BsGithub size={25}/>
                                    </Link>
                                </CardActions>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 200 }}
                                image={img}
                                alt="Live from space album cover"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Project
