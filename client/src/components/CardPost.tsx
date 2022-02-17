import React from 'react';
import { Avatar, Card, CardContent, CardHeader, Typography, Box, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ReactPlayer from 'react-player/youtube';


const CardPost = () => {
    return (
        <Card sx={{ marginBottom: '20px' }}>
            <CardHeader avatar={
                <Avatar>T</Avatar>
            }
            title="talenstuff"
            subheader="This Guy is playing with smoke"
            />
            <Box sx={{ display: 'flex', padding: '0px 15px', justifyContent: 'center', alignItems: 'flex-end' }}>
                <ReactPlayer url="https://youtu.be/nD-Zu6aayS0"/>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                    <IconButton>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton>
                        <ShareIcon />
                    </IconButton>
                </Box>
            </Box>
            <CardContent>
                <Typography>

                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardPost
