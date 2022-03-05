import React from 'react'
import { AppBar, Button, Container, IconButton, Toolbar,  InputBase, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styled, alpha, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-router-dom';


import { useToggleModeContext } from '../context/modeContext';
import { useAuthContext } from '../context/useAuthContext';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    width: '100%',
    marginLeft: 0,
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1,1,1,0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transitions: theme.transitions.create('width'),
        width: '100%',
    }
}))


const Navbar = () => {
    const theme = useTheme()
    const colorMode = useToggleModeContext();
    const { loggedInUser } = useAuthContext()
    return (
        <AppBar>
            <Container maxWidth="lg">
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search..." />
                    </Search>
                    <Box sx={{ flexGrow: 1 }}/>
                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    {loggedInUser ? (
                        <>
                            <Button component={Link} color='inherit' to="/login" sx={{marginRight: '15px'}}>Upload</Button>
                            <Typography component="p">{loggedInUser?.user.username}</Typography>
                        </>
                    ) : (
                        <Button component={Link} to="/login" color='primary' variant="contained">Login</Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;
