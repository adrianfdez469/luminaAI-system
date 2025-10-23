'use client';

import React from 'react';
import { Box, Container, Typography, Paper, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LockIcon from '@mui/icons-material/Lock';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

export default function TrustSection() {
  const t = useTranslations('trust');

  const badges = [
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 28 }} />,
      label: t('badge1'),
      color: '#10B981',
    },
    {
      icon: <LockIcon sx={{ fontSize: 28 }} />,
      label: t('badge2'),
      color: '#6366F1',
    },
    {
      icon: <CloudDoneIcon sx={{ fontSize: 28 }} />,
      label: t('badge3'),
      color: '#8B5CF6',
    },
  ];

  return (
    <Box
      id="trust"
      sx={{
        py: { xs: 6, md: 8 },
        background: (theme) =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)'
            : 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: '50%',
          background: 'rgba(99, 102, 241, 0.05)',
          filter: 'blur(80px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={4}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.9)'
                  : 'rgba(30, 41, 59, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid',
              borderColor: 'divider',
              textAlign: 'center',
            }}
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  width: { xs: 80, md: 100 },
                  height: { xs: 80, md: 100 },
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  margin: '0 auto',
                  mb: 3,
                  boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)',
                }}
              >
                <SecurityIcon sx={{ fontSize: { xs: 40, md: 50 }, color: 'white' }} />
              </Box>
            </motion.div>

            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 1.5,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('title')}
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 500,
              }}
            >
              {t('subtitle')}
            </Typography>

            {/* Main Text */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.8,
                color: 'text.primary',
                maxWidth: '900px',
                mx: 'auto',
                mb: 5,
                px: { xs: 1, md: 2 },
              }}
            >
              {t('mainText')}
            </Typography>

            {/* Badges */}
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
              {badges.map((badge, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Chip
                      icon={badge.icon}
                      label={badge.label}
                      sx={{
                        py: 3,
                        px: 2,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        fontWeight: 600,
                        background: `${badge.color}15`,
                        color: badge.color,
                        border: `2px solid ${badge.color}40`,
                        '& .MuiChip-icon': {
                          color: badge.color,
                        },
                        '& .MuiChip-label': {
                          px: 1.5,
                        },
                        transition: 'all 0.3s',
                        '&:hover': {
                          background: badge.color,
                          color: 'white',
                          transform: 'translateY(-4px)',
                          boxShadow: `0 8px 24px ${badge.color}40`,
                          '& .MuiChip-icon': {
                            color: 'white',
                          },
                        },
                      }}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

