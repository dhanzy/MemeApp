import React from 'react'
import { Grid, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Sidebar from '../components/Sidebar';
import CardPost from '../components/CardPost';



const StyledSidePanel = styled(Box)(({ theme }) => ({
    width: '350px',
    position: 'fixed',
    overflowX: 'hidden',
    [theme.breakpoints.down('sm')]: {
        width: 'auto',
    }
}))

const Home = () => {
    
    return (
        <Container sx={{ my: 10 }}>
            <Grid container spacing={2}>
                <Grid item md={4} sm={2} sx={{ position: 'relative' }}>
                    <StyledSidePanel>
                        <Sidebar />
                    </StyledSidePanel>
                </Grid>
                <Grid item md={8} sm={10}>
                    <CardPost />
                    <CardPost />
                    <CardPost />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;
