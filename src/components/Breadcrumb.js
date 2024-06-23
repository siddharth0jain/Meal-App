import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
                mt: 2,
                mb: 2,
                padding: '8px 16px',
                fontSize: '0.875rem',
                color: 'white',
                '& .MuiBreadcrumbs-separator': {
                    color: 'rgba(255, 255, 255, 0.6)',
                },
            }}
        >
            <Link
                component={RouterLink}
                to="/"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                }}
            >
                <HomeIcon sx={{ mr: 0.5, fontSize: '1.25rem' }} />
                Home
            </Link>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <Typography
                        key={to}
                        sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontWeight: 500,
                        }}
                    >
                        {value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ')}
                    </Typography>
                ) : (
                    <Link
                        component={RouterLink}
                        to={to}
                        key={to}
                        sx={{
                            color: 'white',
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        {value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ')}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default Breadcrumb;