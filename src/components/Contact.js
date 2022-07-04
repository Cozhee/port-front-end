import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

function Contact() {

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#19323C',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#A93F55',
        }
    });


    const FormButton = styled(Button)({
        backgroundColor: '#19323C',
        color: 'white',
        '&:hover': {
            backgroundColor: '#19323C',
        },
    });

    const formTitle = '{ Contact }'

    return (
        <Container component="main" maxWidth="sm">
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}
            >
                <Typography variant="h5" mb={1}>
                    {formTitle}
                </Typography>
                <Typography variant="subtitle2">
                    I look forward to hearing from you. Fill out the form below and I will respond back to you immediately.
                </Typography>
                <Box component="form">
                    <CssTextField
                        margin="normal"
                        fullWidth
                        id="first-name"
                        label="First name"
                        variant="outlined"
                        color="warning"
                    />
                    <CssTextField
                        margin="normal"
                        fullWidth
                        id="last-name"
                        label="Last name"
                        variant="outlined"
                        color="warning"
                    />
                    <CssTextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email"
                        variant="outlined"
                        color="warning"
                    />
                    <CssTextField
                        margin="normal"
                        id="outlined-multiline-static"
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        color="warning"
                    />
                    <FormButton
                        margin="normal"
                        type="submit"
                        fullWidth
                    >
                        Submit
                    </FormButton>
                </Box>
            </Box>
        </Container>
    )
}

export default Contact