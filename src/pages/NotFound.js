import React from 'react';
import { Box, Typography, Button, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/system';

const theme = createTheme({
    palette: {
        background: {
            default: '#f4f4f4',
        },
        text: {
            primary: '#333',
        },
        primary: {
            main: '#1976d2',
        },
    },
});

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
}));

const NotFound = () => {
    return (
        <ThemeProvider theme={theme}>
            <StyledBox>
                <StyledTypography variant="h1">404</StyledTypography>
                <StyledTypography variant="h5">Not Found</StyledTypography>
                <StyledTypography variant="body1">Oops! Page not found.</StyledTypography>
                <Button variant="contained" color="primary" href="/">
                    Go Home
                </Button>
            </StyledBox>
        </ThemeProvider>
    );
};

export default NotFound;