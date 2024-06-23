import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFavorites } from '../context/FavoritesContext';

const MyFavorites = () => {
    const { favorites, removeFavorite } = useFavorites();

    if (favorites.length === 0) {
        return (
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    My Favorites
                </Typography>
                <Typography>You haven't added any favorites yet.</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                My Favorites
            </Typography>
            <Grid container spacing={3}>
                {favorites.map((meal) => (
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
                                <IconButton onClick={() => removeFavorite(meal.idMeal)} color="primary">
                                    <FavoriteIcon />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MyFavorites;