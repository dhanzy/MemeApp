import React from 'react';
import { Typography, TextField, Button, Box, FormControl, styled, CircularProgress } from '@mui/material';
import { Facebook, Google } from '@mui/icons-material';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

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


interface ILogin {
    handleSubmit: ({username, password}:{username: string, password: string},
        {setStatus, setSubmitting}: FormikHelpers<{username: string, password: string}>) => void;
}



const index: React.FC<ILogin> = ({handleSubmit}) => {
    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema = {Yup.object().shape({
                username: Yup.string().required("Username is required"),
                password: Yup.string().required("Password is required").max(100, "Password is too long").min(6, "Password is too short")
            })
            }
            onSubmit={handleSubmit}
        >
        {({handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
            <Form className="sign-in-form" onSubmit={handleSubmit}>
                <Typography className="title" variant="h2">Sign In</Typography>
                <InputField>
                    <TextField type="text" name="username" placeholder="Username" value={values.username} onChange={handleChange} helperText={touched.username ? errors.username : ''} error={touched.username && Boolean(errors.username)}  />
                </InputField>
                <InputField>
                    <TextField type="password" name="password" placeholder="password" value={values.password} onChange={handleChange} helperText={touched.password ? errors.password : ''} error={touched.password && Boolean(errors.password)} />
                </InputField>
                <Button color="secondary" variant="contained" className="btn" type="submit">
                    { isSubmitting ? <CircularProgress style={{ color: 'white' }} /> :  'Login' }
                </Button>
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
        )}
        </Formik>
    )
}

export default index
