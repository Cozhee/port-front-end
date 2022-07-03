import * as React from 'react'
import Appbar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'

function Navbar() {

    const name = '{ Cody Davis }'

    return (
        <Box sx={{ flexGrow: 1, marginBottom: '80px' }}>
            <Appbar sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <Typography variant="h4" component="div"  sx={{ flexGrow: 1, color: '#19323C', fontWeight: 400, letterSpacing: '.1rem' }}>
                        { name }
                    </Typography>
                    <Button sx={{ color: 'black' }}>Login</Button>
                    <Button sx={{ color: 'black' }}>Logout</Button>
                    <Button sx={{ color: 'black' }}>Profile</Button>
                    <Button sx={{ color: 'black' }}>Contact</Button>
                </Toolbar>
            </Appbar>
        </Box>
    )
}

export default Navbar