import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const AboutMe = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" paragraph>
                    Welcome to my food app! I'm passionate about cooking and sharing delicious meals with others.
                </Typography>
                <Typography variant="body1" paragraph>
                    This app is designed by Siddharth Jain to help you discover new recipes, save your favorites, and even generate random meal ideas when you're feeling uninspired.
                </Typography>
                <Typography variant="body1">
                    Feel free to explore the menu, add meals to your favorites, and let the meal generator surprise you with new culinary adventures!
                </Typography>
            </Paper>
        </Container>
    );
};

export default AboutMe;