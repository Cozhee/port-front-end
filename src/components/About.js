import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'


function About() {

    const ResumeButton = styled(Button)({
        backgroundColor: 'white',
        color: '#3dd3b6',
        marginTop: '20px',
        '&:hover': {
            backgroundColor: '#3dd3b6',
            color: 'white'
        }

    })

    const about = 'A Little About Myself'

    return (
        <Container id="about" maxWidth sx={{ display: 'flex', height: '60vh', justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
            <Container sx={{ color: 'black', padding: 5 }}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    {about}
                </Typography>
                <Typography variant="body1" mt={2}>
                    My journey into software development started while I was in the middle of the south China sea on a deployment with the Navy. A ship can only be so large and while I was on one of the largest in the world, you really run out of things to do quickly. Browsing the ship library I found a book called, "Learn Python The Hard Way". I started to type out these code blocks and solve these code challenges and before I even realized it I was hooked. I wasn't able to set the book down.
                </Typography>
                <Typography variant="body1" mt={2}>
                    Now I am here. A software developer who still has motivation to learn and understand the deep fundamentals with programming and the many concepts. Being able to conceptually understand how code works is a skill I believe to be very important. Writing clean and organized code is always my end goal. If you enjoy my work please reach out and lets connect!
                </Typography>
                <Typography variant="body1" mt={2}>
                    If you enjoyed getting to know me and you're interest in the work I may provide, please download my resume and take a look!
                </Typography>
                <ResumeButton download="Resume" href="Resume.pdf">
                    Download Resume
                </ResumeButton>
            </Container>
        </Container>
    )
}

export default About