
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Typography, Box } from '@mui/material';

const Home = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to Our Food App
                </Typography>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Button component={Link} to="/menu" variant="contained">Menu</Button>
                    <Button component={Link} to="/my-favorites" variant="contained">My Favorites</Button>
                    <Button component={Link} to="/meal-generator" variant="contained">Random Meal</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;