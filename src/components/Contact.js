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

function Contact() {

    const [open, setOpen] = useState(false)

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        setOpen(true)
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleEmailAlertClose = () => {
        setOpen(false)
    }

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
                <Box component="form" ref={form}>
                    <CssTextField
                        margin="normal"
                        fullWidth
                        id="first-name"
                        label="First name"
                        variant="outlined"
                        color="warning"
                        name="first-name"
                    />
                    <CssTextField
                        margin="normal"
                        fullWidth
                        id="last-name"
                        label="Last name"
                        variant="outlined"
                        color="warning"
                        name="last-name"
                    />
                    <CssTextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email"
                        variant="outlined"
                        color="warning"
                        name="email"
                    />
                    <CssTextField
                        margin="normal"
                        id="outlined-multiline-static"
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        color="warning"
                        name="message"
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


            <Snackbar
                open={open}
                autoHideDuration={3000}
                message="Email sent"
                onClose={handleEmailAlertClose}
            />

        </Container>
    )
}

export default Contact