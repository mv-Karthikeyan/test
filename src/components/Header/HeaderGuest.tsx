"use client";

import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Container, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const HeaderGuest = () => {
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
        <Link href="/" passHref>
          About
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/" passHref>
          Contact
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/" passHref>
          Login
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/" passHref>
          Logout
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar className='headerGuest' position="fixed">
      <Container>
        <Toolbar>
          <Typography fontWeight='700' variant="h6" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <div className="flex items-center gap-1 text-3xl">
                <Image className='me-3' src="/logo.svg" alt="groko logo" width={34} height={34} />
                <span>groko</span>
              </div>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit">
              <Link href="/" passHref>
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/about" passHref>
                About
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/contact" passHref>
                Contact  &nbsp; |
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/" passHref>
                Login
              </Link>
            </Button>
            <Button color="primary" variant="contained" className='px-6 rounded-full font-bold join'>
              <Link href="/" passHref>
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

export default HeaderGuest;
