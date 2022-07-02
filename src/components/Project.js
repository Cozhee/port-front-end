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
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function Project() {

    const skill = 'React'

    return (
        <Container sx={{ marginBottom: 20 }}>
            <Grid container sx={{ justifyContent: 'center' }} spacing={3}>
                <Grid item xs={12} md={5}>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto'}}>
                                <Typography variant="h6">
                                    Tech Perspective
                                </Typography>
                                <Typography variant="p">
                                    This project features the inclusion of students into the tech world and their access to technology at an early age
                                </Typography>
                                <Box sx={{ marginTop: 3 }} component="div">
                                    <Link className="live-link" href="#" sx={{ marginRight: 2}} >
                                        <RiLiveFill style={{ color: '#F2545B' }} size={25}/>
                                    </Link>
                                    <Link style={{ color: 'black' }} className="github-link" href="#">
                                        <BsGithub size={25}/>
                                    </Link>
                                </Box>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={img}
                            alt="Live from space album cover"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto'}}>
                                <Typography variant="h6">
                                    Tech Perspective
                                </Typography>
                                <Typography variant="p">
                                    This project features the inclusion of students into the tech world and their access to technology at an early age
                                </Typography>
                                <Box sx={{ marginTop: 3 }} component="div">
                                    <Link className="live-link" href="#" sx={{ marginRight: 2}} >
                                        <RiLiveFill style={{ color: '#F2545B' }} size={25}/>
                                    </Link>
                                    <Link className="github-link" href="#">
                                        <BsGithub style={{ color: 'black' }} size={25}/>
                                    </Link>
                                </Box>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={img2}
                            alt="Live from space album cover"
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Project
