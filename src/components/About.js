import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'


function About({ user }) {

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
        <Container id="about" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 10, marginBottom: 20}}>
            <Container sx={{ color: 'black' }}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    {about}
                </Typography>
                <Typography variant="body1" mt={2}>
                    {user.about}
                </Typography>
                <ResumeButton download="Resume" href="Resume.pdf">
                    Download Resume
                </ResumeButton>
            </Container>
        </Container>
    )
}

export default About