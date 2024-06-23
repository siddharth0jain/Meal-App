import React, { useState } from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button, IconButton, CircularProgress, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { getRandomMeal } from '../services/mealService';
import { useFavorites } from '../context/FavoritesContext';

const MealGenerator = () => {
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const generateRandomMeal = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getRandomMeal();
            setMeal(data.meals[0]);
        } catch (err) {
            setError('Failed to fetch a random meal. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const toggleFavorite = () => {
        if (favorites.some(fav => fav.idMeal === meal.idMeal)) {
            removeFavorite(meal.idMeal);
        } else {
            addFavorite(meal);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Random Meal Generator
            </Typography>
            <Button onClick={generateRandomMeal} variant="contained" sx={{ mb: 2 }}>
                Generate Random Meal
            </Button>
            {error && <Typography color="error">{error}</Typography>}
            <Box sx={{ mt: 2, minHeight: '300px' }}>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                        <CircularProgress />
                    </Box>
                ) : meal ? (
                    <Card>
                        <CardMedia
                            component="img"
                            height="300"
                            image={meal.strMealThumb}
                            alt={meal.strMeal}
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {meal.strMeal}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Category: {meal.strCategory}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Area: {meal.strArea}
                            </Typography>
                            <IconButton onClick={toggleFavorite} color="primary">
                                {favorites.some(fav => fav.idMeal === meal.idMeal) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                            </IconButton>
                        </CardContent>
                    </Card>
                ) : (
                    <Typography variant="body1" color="text.secondary">
                        Click the button to generate a random meal.
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default MealGenerator;