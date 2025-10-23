'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
  useMediaQuery,
  Breadcrumbs,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useThemeMode } from '@/lib/ThemeProvider';
import Logo from './Logo';

export default function Header() {
  const t = useTranslations('nav');
  const tBreadcrumbs = useTranslations('breadcrumbs');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleTheme } = useThemeMode();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = (): Array<{
    label: string;
    href: string;
    icon?: React.ReactNode;
  }> | null => {
    const paths = pathname.split('/').filter((x) => x && x !== locale);
    
    // Don't show breadcrumbs on home page
    if (paths.length === 0) return null;

    const breadcrumbItems: Array<{
      label: string;
      href: string;
      icon?: React.ReactNode;
    }> = [
      {
        label: tBreadcrumbs('home'),
        href: `/${locale}`,
        icon: <HomeIcon sx={{ fontSize: '1.2rem' }} />,
      },
    ];

    paths.forEach((path) => {
      breadcrumbItems.push({
        label: tBreadcrumbs(path) || path,
        href: `/${locale}/${path}`,
      });
    });

    return breadcrumbItems;
  };

  const breadcrumbs = generateBreadcrumbs();

  const navItems = [
    { label: t('home'), href: '#home' },
    { label: t('services'), href: '#solution' },
    { label: t('about'), href: '#about' },
    { label: t('contact'), href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newLocale = event.target.value;
    // Remove the current locale from the pathname and add the new one
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
      }
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ py: 2 }}>
        <Logo />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => handleNavClick(item.href)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* CTA Button in Mobile Menu */}
        <ListItem disablePadding sx={{ px: 2, py: 1 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleNavClick('#audit')}
            sx={{
              fontWeight: 600,
              py: 1.5,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
              },
            }}
          >
            {t('auditCTA')} ✨
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: `1px solid ${theme.palette.divider}`,
          backdropFilter: 'blur(20px)',
          backgroundColor:
            mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(30, 41, 59, 0.8)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link href={`/${locale}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: 'text.primary',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                {/* CTA Button - Free Audit */}
                <Button
                  variant="contained"
                  onClick={() => handleNavClick('#audit')}
                  sx={{
                    ml: 1,
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                      boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('auditCTA')} ✨
                </Button>
              </Box>
            )}

            {/* Right side actions */}
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {/* Language Selector */}
              <Select
                value={locale}
                onChange={handleLanguageChange}
                size="small"
                sx={{
                  minWidth: 80,
                  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                }}
                startAdornment={<LanguageIcon sx={{ mr: 0.5, fontSize: '1.2rem' }} />}
              >
                <MenuItem value="en">EN</MenuItem>
                <MenuItem value="es">ES</MenuItem>
              </Select>

              {/* Theme Toggle */}
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

              {/* Mobile menu button */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Breadcrumbs */}
      {breadcrumbs && (
        <Box
          sx={{
            backgroundColor: mode === 'light' ? 'rgba(248, 249, 250, 0.8)' : 'rgba(15, 23, 42, 0.8)',
            borderBottom: `1px solid ${theme.palette.divider}`,
            py: 1.5,
          }}
        >
          <Container maxWidth="lg">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              sx={{
                '& .MuiBreadcrumbs-separator': {
                  color: 'text.secondary',
                },
              }}
            >
              {breadcrumbs.slice(0, -1).map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <MuiLink
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: 'text.secondary',
                      fontSize: { xs: '0.85rem', md: '0.9rem' },
                      '&:hover': {
                        color: 'primary.main',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </MuiLink>
                </Link>
              ))}
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  color: 'text.primary',
                  fontWeight: 600,
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                }}
              >
                {breadcrumbs[breadcrumbs.length - 1]?.label}
              </Typography>
            </Breadcrumbs>
          </Container>
        </Box>
      )}

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

