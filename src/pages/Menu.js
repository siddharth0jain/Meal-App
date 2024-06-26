import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../services/mealService';

const Menu = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                const data = await getAllCategories();
                const filteredCategories = data.categories.filter(category => category.strCategory.toLowerCase() !== 'beef');
                setCategories(filteredCategories);
                setShowAlert(true);
            } catch (err) {
                setError('Failed to fetch categories. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

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
            {showAlert && (
                <Alert severity="info" onClose={() => setShowAlert(false)} sx={{ mb: 2 }}>
                    Welcome to the menu! Please note that beef items have been respectfully removed for religious preferences.
                </Alert>
            )}
            <Typography variant="h4" component="h1" gutterBottom>
                Menu Categories
            </Typography>
            <Grid container spacing={3}>
                {categories.map((category) => (
                    <Grid item xs={12} sm={6} md={4} key={category.idCategory}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    {category.strCategory}
                                </Typography>
                                <Button component={Link} to={`${category.strCategory}`} variant="outlined" sx={{ mt: 2 }}>
                                    View Meals
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Menu;