import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export default function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '20vh',
            }}
        >
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: '#F3F7F0',
                    justifyContent: 'center'
                }}
            >
                <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Link href="https://www.linkedin.com/in/davis-r-cody/" m={2}>
                            <BsLinkedin size={25} style={{ color: '#0b65c2' }}/>
                        </Link>
                        <Link href="https://github.com/Cozhee" m={2}>
                            <BsGithub size={25} style={{ color: '#24292e' }}/>
                        </Link>
                </Container>
            </Box>
        </Box>
    );
}