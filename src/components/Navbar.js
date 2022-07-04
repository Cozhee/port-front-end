import * as React from 'react'
import Appbar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'
import {styled} from "@mui/material/styles";

function Navbar() {

    const NavButton = styled(Button)({
        '&:hover': {
            backgroundColor: '#F2545B',
            color: 'white'
        },
    });

    const name = '{ Cody Davis }'

    return (
        <Box sx={{ flexGrow: 1, marginBottom: '63px' }}>
            <Appbar sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <Typography variant="h4" component="div"  sx={{ flexGrow: 1, color: '#19323C', fontWeight: 400, letterSpacing: '.1rem' }}>
                        { name }
                    </Typography>
                    <NavButton sx={{ color: 'black' }}>Login</NavButton>
                    <NavButton sx={{ color: 'black' }}>Logout</NavButton>
                    <NavButton sx={{ color: 'black' }}>Profile</NavButton>
                    <NavButton sx={{ color: 'black' }}>Contact</NavButton>
                </Toolbar>
            </Appbar>
        </Box>
    )
}

export default Navbar