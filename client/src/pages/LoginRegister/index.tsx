import React from 'react'
import { Box, Button, CardMedia, styled, Typography } from '@mui/material';
import { FormikHelpers } from 'formik';

import { login, register, loadUser } from '../../APICalls/auth';
import { useAuthContext } from '../../context/useAuthContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Container = styled(Box)(({theme}) => ({
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
    "&::before": {
        content: '""',
        position: 'absolute',
        width: '2000px',
        height: '2000px',
        borderRadius: '50%',
        background: 'linear-gradient(-45deg, #4481eb, #04befe)',
        top: '-10%',
        right: '48%',
        transform: 'translateY(-50%)',
        transition: '1.8s ease-in-out',
        zIndex: 6,
    },
    '&.sign-up-mode .sigin-signup': {
        left: '25%',
    },
    '&.sign-up-mode::before': {
        transform: 'translate(100%, -50%)',
        right: '52%',
    },
    '&.sign-up-mode .left-panel': {
        pointerEvents: 'none !important'
    },
    '&.sign-up-mode .right-panel': {
        pointerEvents: 'all'
    },
    '&.sign-up-mode .left-panel .content': {  
        transform: 'translateX(-800px)'
    },
    '&.sign-up-mode .right-panel .content': {  
        transform: 'translateX(0px)'
    },
    '&.sign-up-mode form.sign-up-form':{
        zIndex: 2,
        opacity: 1,
    },
    '&.sign-up-mode form.sign-in-form':{
        zIndex: 1,
        opacity: 0,
    },
    [theme.breakpoints.down('md')]:{
        minHeight: '800px',
        height: '100vh',
        '&::before': {
            width: '1500px',
            height: '1500px',
            left: '30%',
            bottom: '68%',
            transform: 'translateX(-50%)',
            right: 'initial',
            top: 'initial'
        },
        '&.sign-up-mode::before': {
            transform: 'translate(-50%, 100%)',
            bottom: '32%',
            right: 'initial',
        },
    }
}))

const FormsContainer = styled(Box)(() => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
}))


const Sign = styled(Box)(({theme}) => ({
   position: 'absolute',
   top: '50%',
   left: '75%',
   transform: 'translate(-50%, -50%)',
   width: '50%',
   display: 'grid',
   gridTemplateColumns: '1fr',
   padding: '0 5rem',
   transition: '1s 0.7s ease-in-out',
   overflow: 'hidden',
   zIndex: 5,
   '& form': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gridColumn: '1/2',
        gridRow: '1/2',
        transition: '0.2s 01s ease-in-out'
   },
   [theme.breakpoints.down('md')]:{
       width: '100%',
       left: '50%',
       top: '90%',
       transform: 'translate(-50%, -100%)',
       transition: '1s 0.8s ease-in-out'
   }
}))


const PanelContainer = styled(Box)(({theme})=> ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 2fr 1fr',
    }
}))

const Panel = styled(Box)(({theme})=> ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    textAlign: 'center',
    zIndex: 7,
    '& .content': {
        color: '#fff',
        transition: '.9s .6s ease-in-out',
    },
    '&.left-panel': {
        padding: '3rem 17% 2rem 12%',
        pointerEvents: 'all'
    },
    '&.right-panel': {
        pointerEvents: 'none',
        padding: '3rem 12% 2rem 17%',
        '& .content': {
            transform: 'translateX(800px)',
        },
    },
    [theme.breakpoints.down("md")]: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '2.5rem 8%',
        '&.left-panel': {
            gridRow: '1 / 2',
        },
        '&.right-panel': {
            gridRow: '3 / 4',
        },
    }
}))

const Content = styled(Box)(()=> ({
    color: '#fff'
}))

const LoginRegister = () => {
    const { updateLoginContext, loggedInUser } = useAuthContext()
    const loginHandleSubmit = (
        {username, password}: {username:string, password: string},
        { setSubmitting }: FormikHelpers<{username: string, password: string}>
    ) => {
        login(username, password).then(
            (data) => {
                if (data.auth_token){
                    loadUser(data.auth_token).then(
                        (data) => {
                            if (data.detail) {
                                console.log(data.detail)
                                setSubmitting(false)
                            }
                            else {
                                updateLoginContext(data)
                                setSubmitting(false)
                            }
                        }
                    )
                }
                else {
                    console.log("Error occured during login")
                    setSubmitting(false)
                }
            }
        )
    }

    const registerHandleSubmit = (
        {firstname, lastname, email, username, password}: {firstname: string, lastname: string, email: string, username: string, password: string},
        { setSubmitting }: FormikHelpers<{firstname: string, lastname: string, email: string, username: string, password: string}>
    ) => {
        register(firstname, lastname, username, email, password).then(
            (data) => {
                updateLoginContext(data)
                setSubmitting(false)
            }
        )
    }
    
    const container = React.useRef<HTMLDivElement>()

    const loginSwitch = ()=>{
        container.current?.classList.add('sign-up-mode')
    }
    const registerSwitch = ()=>{
        container.current?.classList.remove('sign-up-mode')
    }
    
    return (
        <Container ref={container}>
            <FormsContainer>
                <Sign className="sigin-signup">
                    <LoginForm handleSubmit={loginHandleSubmit} />
                    <RegisterForm handleSubmit={registerHandleSubmit} />
                </Sign>
            </FormsContainer>
            <PanelContainer>
                <Panel className='left-panel'>
                    <Content className='content'>
                        <Typography variant="h3">New here?</Typography>
                        <Typography component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam blanditiis nobis consectetur quas consequuntur modi!</Typography>
                        <Button variant="outlined" color="secondary" onClick={() => loginSwitch()}>Sign Up</Button>
                    </Content>
                    <CardMedia component="img" image="" />
                </Panel>

                <Panel className='right-panel'>
                    <Content className='content'>
                        <Typography variant="h3">One of us?</Typography>
                        <Typography component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam blanditiis nobis consectetur quas consequuntur modi!</Typography>
                        <Button variant="outlined" color="secondary" onClick={() => registerSwitch()}>Sign In</Button>
                    </Content>
                    <CardMedia component="img" image="" />
                </Panel>
            </PanelContainer>
        </Container>
    )
}

export default LoginRegister;
