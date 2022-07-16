import * as React from 'react'
import Appbar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'
import {styled} from "@mui/material/styles"
import Container from '@mui/material/Container'
import Link from "@mui/material/Link"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import {HiMenu} from 'react-icons/hi'
import {BsFillFilePersonFill} from 'react-icons/bs'
import {MdOutlineWork} from 'react-icons/md'

function Navbar() {

    const user = false

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem key={'About'}>
                    <ListItemIcon>
                        <BsFillFilePersonFill size={25} color="#4de09a"/>
                    </ListItemIcon>
                    <Link href="#about" sx={{ textDecoration: 'none', color: 'black' }}>
                        <ListItemText primary={'About'}/>
                    </Link>
                </ListItem>
                <ListItem key={'Projects'}>
                    <ListItemIcon>
                        <MdOutlineWork size={25} color="orange"/>
                    </ListItemIcon>
                    <Link href="#projects" sx={{ textDecoration: 'none', color: 'black' }}>
                        <ListItemText primary={'Projects'} />
                    </Link>
                </ListItem>
                <ListItem key={'Contact'}>
                    <ListItemIcon>
                        <MailIcon style={{ color: '#186ee0' }}/>
                    </ListItemIcon>
                    <Link href="#contact" sx={{ textDecoration: 'none', color: 'black' }}>
                        <ListItemText primary={'Contact'} />
                    </Link>
                </ListItem>
            </List>
        </Box>
    );

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
                <Container>
                    <Toolbar>
                        <Typography variant="h4" component="div"  sx={{ flexGrow: 1, color: '#19323C', fontWeight: 400, letterSpacing: '.05rem' }}>
                            { name }
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
                            <NavButton href="/#contact" sx={{ color: 'black' }}>Contact</NavButton>
                            <NavButton href="/#about" sx={{ color: 'black' }}>About</NavButton>
                            <NavButton href="/#projects" sx={{ color: 'black' }}>Projects</NavButton>
                            {user &&
                                <>
                                    <NavButton href="/settings" sx={{ color: 'black' }}>Settings</NavButton>
                                    <NavButton sx={{ color: 'black' }}>Logout</NavButton>
                                </>
                            }
                        </Box>
                        <Box sx={{ display: { sm: 'none' }}}>
                            <React.Fragment key={'right'}>
                                <Button onClick={toggleDrawer('right', true)}><HiMenu size={25} color="#4de09a"/></Button>
                                <SwipeableDrawer
                                    anchor={'right'}
                                    open={state['right']}
                                    onClose={toggleDrawer('right', false)}
                                    onOpen={toggleDrawer('right', true)}
                                >
                                    {list('right')}
                                </SwipeableDrawer>
                            </React.Fragment>
                        </Box>
                    </Toolbar>
                </Container>
            </Appbar>
        </Box>
    )
}

export default Navbar










