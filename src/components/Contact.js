import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar'
import { useState } from 'react'
import Grid from '@mui/material/Grid'

function Contact() {

    const [open, setOpen] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [formErrors, setFormErrors] = useState(false)

    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const form = useRef()
    const sendEmail = (e) => {

        e.preventDefault();

        if (firstName && lastName && email && message) {
            setOpen(true)
            emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            setFormErrors(true)
            if(!firstName) setFirstNameError(true)
            if(!lastName) setLastNameError(true)
            if(!email) setEmailError(true)
            if(!message) setMessageError(true)
        }
    };

    const handleEmailAlertClose = () => {
        setOpen(false)
    }

    const handleFormErrorAlert = () => {
        setFormErrors(false)
    }

    const FormButton = styled(Button)({
        backgroundColor: '#3dd3b6',
        color: 'white',
        '&:hover': {
            backgroundColor: '#3dd3b6',
        },
    });

    const ContactTextField = styled(TextField)({
        color: 'purple'
    })

    const formTitle = 'Contact'

    return (

        <Container component="main" id="contact" style={{ marginTop: 200}}>
            <Grid container spacing={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                    >
                        <Typography variant="h4" mb={1} mt={5}>
                            {formTitle}
                        </Typography>
                        <Typography variant="subtitle2">
                            I look forward to hearing from you. Fill out the form below and I will respond back to you immediately.
                        </Typography>
                        <Box component="form" ref={form}>
                            <TextField
                                error={firstNameError}
                                margin="normal"
                                fullWidth
                                id="first-name"
                                label="First name"
                                variant="outlined"
                                color="secondary"
                                name="first-name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <TextField
                                error={lastNameError}
                                margin="normal"
                                fullWidth
                                id="last-name"
                                label="Last name"
                                variant="outlined"
                                color="secondary"
                                name="last-name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <TextField
                                error={emailError}
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email"
                                variant="outlined"
                                color="secondary"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                error={messageError}
                                margin="normal"
                                id="message"
                                fullWidth
                                label="Message"
                                multiline
                                rows={4}
                                color="secondary"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <FormButton
                                margin="normal"
                                type="submit"
                                fullWidth
                                onClick={sendEmail}
                            >
                                Submit
                            </FormButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src="/images/email.png"
                        sx={{
                            width: '100%'
                        }}
                    >

                    </Box>
                </Grid>
            </Grid>


            <Snackbar
                open={open}
                autoHideDuration={3000}
                message="Email sent"
                onClose={handleEmailAlertClose}
            />

            <Snackbar
                open={formErrors}
                autoHideDuration={4000}
                message="Please fill out all available fields"
                onClose={handleFormErrorAlert}
            />
        </Container>
    )
}

export default Contact