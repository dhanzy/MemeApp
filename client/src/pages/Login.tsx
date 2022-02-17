import React from 'react'
import { Typography, Box, Button, FormControl, TextField, Checkbox, CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const StyledLoginPanel = styled(Box)(({ theme }) => ({
    
}))

const CustomFormControl = styled(FormControl)(({theme}) => ({
    marginBottom: '1rem',
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
                        <Button fullWidth>Sign In with Google</Button>
                        <CustomFormControl fullWidth>
                            <TextField label="Email" type="email" name="email"/>
                        </CustomFormControl>
                        <CustomFormControl fullWidth>
                            <TextField label="Password" type="password" name="password" />
                        </CustomFormControl>
                        <CustomFormControl fullWidth>
                            <Checkbox /> Save Details
                        </CustomFormControl>
                        <Button variant="contained" color="primary" sx={{ marginBottom: '1.5rem' }} type="submit">
                            Login
                        </Button>
                        <Box>
                            <Typography component="p">You don't have an account? <Link to="/signup">Sign Up</Link></Typography>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default Login
