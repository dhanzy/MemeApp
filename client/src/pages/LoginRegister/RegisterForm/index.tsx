import React from 'react';
import { Typography, TextField, Button, Box, FormControl, styled, CircularProgress } from '@mui/material';
import { Facebook, Google } from '@mui/icons-material';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

const Form = styled('form')(() => ({
    zIndex: 1,
    opacity: 0,
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

interface IRegister {
    handleSubmit: (
        {firstname, lastname, email, username, password}: {firstname: string, lastname: string, email: string, username: string, password: string},
        { setSubmitting }: FormikHelpers<{firstname: string, lastname: string, email: string, username: string, password: string}>
    ) => void;
}


const index: React.FC<IRegister> = ({handleSubmit}) => {
    return (
        <Formik 
            initialValues={{firstname: '', lastname: '', email: '', username: '', password: ''}}
            validationSchema = {Yup.object().shape({
                firstname: Yup.string().required("First Name is required"),
                lastname: Yup.string().required("Last Name is required"),
                email: Yup.string().required("Email is required").email("Email is not valid"),
                username: Yup.string().required("Username is required"),
                password: Yup.string().required("Password is required").max(100, "Password is too long").min(6, "Password is too short")
            })}
            onSubmit={handleSubmit}
        >
        {({handleSubmit, handleChange, values, touched, errors, isSubmitting}) => (
            <Form className="sign-up-form" onSubmit={handleSubmit}>
                <Typography className="title" variant="h2">Sign Up</Typography>
                <InputField>
                    <TextField type="text" placeholder="First Name" name="firstname" onChange={handleChange} value={values.firstname} helperText={touched.firstname ? errors.firstname : ''} error={touched.firstname && Boolean(errors.firstname)} />
                </InputField>
                <InputField>
                    <TextField type="text" placeholder="Last Name" name="lastname" onChange={handleChange} value={values.lastname} helperText={touched.lastname ? errors.lastname : ''} error={touched.lastname && Boolean(errors.lastname)}  />
                </InputField>
                <InputField>
                    <TextField type="text" placeholder="Email" name="email" onChange={handleChange} value={values.email} helperText={touched.email ? errors.email : ''} error={touched.email && Boolean(errors.email)}  />
                </InputField>
                <InputField>
                    <TextField type="text" placeholder="Username" name="username" onChange={handleChange} value={values.username} helperText={touched.username ? errors.username : ''} error={touched.username && Boolean(errors.username)}  />
                </InputField>
                <InputField>
                    <TextField type="password" placeholder="password" name='password' onChange={handleChange} value={values.password} helperText={touched.password ? errors.password : ''} error={touched.password && Boolean(errors.password)}  />
                </InputField>
                <Button color="secondary" variant="contained" className="btn" type="submit">
                    { isSubmitting ? <CircularProgress /> : 'Register' }
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
