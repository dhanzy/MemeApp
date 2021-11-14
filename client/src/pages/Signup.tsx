import { Typography, Box, Button, Divider } from '@mui/material'
import { Link } from 'react-router-dom';
import React from 'react'

const Signup = () => {
    return (
        <Box sx={{display: 'flex', height: '100vh'}}>
            <Box sx={{flex: 1}}>

            </Box>
            <Box sx={{flex: 2, padding: '20px'}}>
                <Typography sx={{textAlign: 'right'}}>Already a member?<Link to="/login">Sign in now</Link></Typography>
                <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center' }}>
                    <form>
                        <Box>
                            <Typography>Sign up to MemeApp</Typography>
                            <Box>
                                <Button variant="contained" color="primary">Sign in with Google</Button>
                            </Box>
                            <Divider />
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default Signup;
