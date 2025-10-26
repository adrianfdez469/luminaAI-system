'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import CodeIcon from '@mui/icons-material/Code';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations('about');

  const team = [
    {
      nameKey: 'person1Name',
      roleKey: 'person1Role',
      bioKey: 'person1Bio',
      funKey: 'person1Fun',
      linkedInKey: 'https://www.linkedin.com/in/adrian-fernandez-228994183/',
      icon: <CodeIcon sx={{ fontSize: 32 }} />,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      imagePlaceholder: 'AF',
      imageName: 'adrian.jpeg',
    },
    {
      nameKey: 'person2Name',
      roleKey: 'person2Role',
      bioKey: 'person2Bio',
      funKey: 'person2Fun',
      linkedInKey: 'https://www.linkedin.com/in/lisset-hernandez/',
      icon: <BusinessCenterIcon sx={{ fontSize: 32 }} />,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      imagePlaceholder: 'LH',
      imageName: 'liset.jpeg',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: (theme) =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)'
            : 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: { xs: '70px', md: '80px' },
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(102, 126, 234, 0.05)',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(240, 147, 251, 0.05)',
          filter: 'blur(60px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('title')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.2rem' },
                maxWidth: '700px',
                mx: 'auto',
                mb: 5,
              }}
            >
              {t('subtitle')}
            </Typography>

            
          </Box>
        </motion.div>

        {/* Team Members Grid */}
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch" justifyContent="center">
          {team.map((member, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ width: '100%', display: 'flex' }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    border: '2px solid transparent',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8,
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  {/* Header with gradient */}
                  <Box
                    sx={{
                      background: member.gradient,
                      p: { xs: 3, md: 4 },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      color: 'white',
                      position: 'relative',
                    }}
                  >
                    {/* Icon Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {member.icon}
                    </Box>

                    {/* Photo */}
                    <Avatar
                      sx={{
                        width: { xs: 120, md: 140 },
                        height: { xs: 120, md: 140 },
                        fontSize: { xs: '2.5rem', md: '3rem' },
                        fontWeight: 800,
                        mb: 2,
                        background: 'rgba(255, 255, 255, 0.25)',
                        border: '4px solid rgba(255, 255, 255, 0.5)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <Image
                        src={`/images/${member.imageName}`}
                        alt={t(member.nameKey)}
                        width={140}
                        height={140}
                        style={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                        }}
                        priority
                      />
                    </Avatar>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 0.5,
                        fontSize: { xs: '1.3rem', md: '1.5rem' },
                        textAlign: 'center',
                      }}
                    >
                      {t(member.nameKey)}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        opacity: 0.95,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        textAlign: 'center',
                        fontWeight: 500,
                      }}
                    >
                      {t(member.roleKey)}
                    </Typography>
                  </Box>

                  {/* Content */}
                  <Box sx={{ p: { xs: 3, md: 4 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        lineHeight: 1.8,
                        color: 'text.secondary',
                        mb: 3,
                        flexGrow: 1,
                      }}
                    >
                      {t(member.bioKey)}
                    </Typography>

                    {/* Fun Fact */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                      <Chip
                        label={t(member.funKey)}
                        sx={{
                          background: member.gradient,
                          color: 'white',
                          fontWeight: 600,
                          fontSize: { xs: '0.85rem', md: '0.9rem' },
                          py: 2.5,
                          px: 1,
                          '& .MuiChip-label': {
                            px: 2,
                          },
                        }}
                      />

                      {/* LinkedIn Button */}
                      <Button
                        variant="outlined"
                        startIcon={<LinkedInIcon />}
                        href={member.linkedInKey}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderWidth: 2,
                          fontWeight: 600,
                          fontSize: { xs: '0.85rem', md: '0.9rem' },
                          py: 1,
                          px: 3,
                          borderColor: '#0A66C2',
                          color: '#0A66C2',
                          '&:hover': {
                            borderWidth: 2,
                            background: '#0A66C2',
                            color: 'white',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s',
                        }}
                      >
                        {t('connectLinkedIn')}
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

