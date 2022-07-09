import * as React from 'react'
import Appbar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'
import {styled} from "@mui/material/styles"

function Navbar() {

    const user = false

    const NavButton = styled(Button)({
        '&:hover': {
            backgroundColor: '#3dd3b6',
            color: 'white'
        },
    });

    const name = 'Cody'

    return (
        <Box sx={{ flexGrow: 1, marginBottom: '50px' }}>
            <Appbar sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h4" component="div"  sx={{ flexGrow: 1, color: '#19323C', fontWeight: 400, letterSpacing: '.05rem' }}>
                        { name }
                    </Typography>
                    <NavButton href="/#contact" sx={{ color: 'black' }}>Contact</NavButton>
                    <NavButton href="/#about" sx={{ color: 'black' }}>About</NavButton>
                    <NavButton href="/#projects" sx={{ color: 'black' }}>Projects</NavButton>
                    {user &&
                        <>
                            <NavButton href="/settings" sx={{ color: 'black' }}>Settings</NavButton>
                            <NavButton sx={{ color: 'black' }}>Logout</NavButton>
                        </>
                    }
                </Toolbar>
            </Appbar>
        </Box>
    )
}

export default Navbar