import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Card, CardContent, CardMedia, Typography, IconButton, CircularProgress } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { filterByCategory } from '../services/mealService';
import { useFavorites } from '../context/FavoritesContext';

const CategoryMeals = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { category } = useParams();
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                setLoading(true);
                const data = await filterByCategory(category);
                setMeals(data.meals);
            } catch (err) {
                setError('Failed to fetch meals. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchMeals();
    }, [category]);

    const toggleFavorite = (meal) => {
        if (favorites.some(fav => fav.idMeal === meal.idMeal)) {
            removeFavorite(meal.idMeal);
        } else {
            addFavorite(meal);
        }
    };

    if (loading) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <Typography color="error">{error}</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                {category} Meals
            </Typography>
            <Grid container spacing={3}>
                {meals.map((meal) => (
                    <Grid item xs={12} sm={6} md={4} key={meal.idMeal}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={meal.strMealThumb}
                                alt={meal.strMeal}
                            />
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    {meal.strMeal}
                                </Typography>
                                <IconButton onClick={() => toggleFavorite(meal)} color="primary">
                                    {favorites.some(fav => fav.idMeal === meal.idMeal) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CategoryMeals;