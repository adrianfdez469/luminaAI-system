'use client';

import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslations, useLocale } from 'next-intl';
import Logo from './Logo';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Logo />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {t('description')}
            </Typography>
            <Box sx={{ mt: 2 }}>

              
              <IconButton
                aria-label="Facebook"
                color="primary"
                href={t('facebookLink')}
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                aria-label="Instagram"
                color="primary"
                href={t('instagramLink')}
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
              
              <IconButton
                aria-label="LinkedIn"
                color="primary"
                href={t('linkedinLink')}
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {t('links')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#home" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                {t('home')}
              </Link>
              <Link href="#solution" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                {t('services')}
              </Link>
              {/* <Link href="#blog" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                Blog
              </Link> */}
              <Link href="#contact" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                {t('contact')}
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {t('legal')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href={`/${locale}/privacy`} color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                {t('privacy')}
              </Link>
              <Link href={`/${locale}/terms`} color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                {t('terms')}
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            align="center"
            sx={{ mb: 2, px: { xs: 2, md: 4 } }}
          >
            {t('gdprNotice')} <Link href={`/${locale}/privacy`} color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
              {t('gdprNoticeForMoreDetailsLink')}
            </Link> {t('gdprNotice23')}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            © {currentYear} LuminaAI. {t('rights')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

