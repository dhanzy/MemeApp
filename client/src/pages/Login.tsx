import React from 'react'
import { Typography, Box, Button, Divider } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const StyledLoginPanel = styled(Box)(({ theme }) => ({
    
}))



const Login = () => {
    return (
        <Box sx={{display: 'flex', height: '100vh', padding:'20px'}}>
            <Box sx={{flex: 1}}>

            </Box>
            <Box sx={{flex: 2}}>
                <Typography sx={{textAlign: 'right'}}>Not a member?<Link to="/signup">Sign up now</Link></Typography>
                <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'100%' }}>
                    <form>
                        <Box>
                            <Typography variant="h3">Sign in to MemeApp</Typography>
                            <Box>
                                <Button variant="contained" color="primary">Sign in with Google</Button>
                            </Box>
                            <div>
                                <label htmlFor="email"></label>
                                <input type="text" id="email" />
                            </div>
                            <div>
                                <label htmlFor="password"></label>
                                <input type="password" id="password" />
                            </div>
                            <Button></Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default Login
