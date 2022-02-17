import React from 'react';
import { Typography, TextField, Button, Box, FormControl, styled } from '@mui/material';
import { Facebook, Google } from '@mui/icons-material';


const Form = styled('form')(() => ({
    zIndex: 2,
    '& .title': {
        fontSize: '2.2rem',
        marginBottom: '10px',
    },
    '& .btn': {
        width: '150px',
        height: '49px'
    },
    '& .social-text': {
        padding: '.7rem 0',
        fontSize: '1rem',
    }
}))

const InputField = styled(FormControl)(() => ({
    margin: '10px 0px',
    maxWidth: '380px'
}))

const SocialMedia = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center'
}))



const index = () => {
    return (
        <Form className="sign-in-form" action="">
            <Typography className="title" variant="h2">Sign In</Typography>
            <InputField>
                <TextField type="text" placeholder="Email" />
            </InputField>
            <InputField>
                <TextField type="password" placeholder="password" />
            </InputField>
            <Button color="secondary" variant="contained" className="btn" type="submit">Login</Button>
            <Typography className="social-text" component="p">Or sign in with social platforms</Typography>
            <SocialMedia>
                <Button color="secondary" href="#" className="social-icon">
                    <Google />
                </Button>
                <Button color="secondary" href="#" className="social-icon">
                    <Facebook />
                </Button>
                <Button href="#" className="social-icon"></Button>
                <Button href="#" className="social-icon"></Button>
            </SocialMedia>
        </Form>
    )
}

export default index
