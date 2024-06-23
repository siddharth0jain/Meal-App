const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getRandomMeal = async () => {
    const response = await fetch(`${API_BASE_URL}/random.php`);
    return response.json();
};

export const getAllCategories = async () => {
    const response = await fetch(`${API_BASE_URL}/categories.php`);
    return response.json();
};

export const filterByCategory = async (category) => {
    const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`);
    return response.json();
};
