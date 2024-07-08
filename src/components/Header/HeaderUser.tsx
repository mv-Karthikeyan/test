"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Button,
    Box,
    Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link href="/" passHref>
                    Home
                </Link>
            </MenuItem>
            <MenuItem>
                <Link href="/about" passHref>
                    About
                </Link>
            </MenuItem>
            <MenuItem>
                <Link href="/contact" passHref>
                    Contact
                </Link>
            </MenuItem>
        </Menu>
    );

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography fontWeight='700' variant="h6" sx={{ flexGrow: 1 }}>
                        <Link href="/" passHref>
                            <h6 className="flex items-center gap-1 text-3xl">
                                <span>groko</span>
                            </h6>
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button color="inherit">
                            <Link href="/contact" passHref>
                                Login
                            </Link>
                        </Button>
                        <Button color="primary" variant="contained" className='rounded-full'>
                            <Link href="/contact" passHref>
                                Join
                            </Link>
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleMobileMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
            {renderMobileMenu}
        </AppBar>
    );
};

export default Header;
