'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DescriptionIcon from '@mui/icons-material/Description';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import TableChartIcon from '@mui/icons-material/TableChart';

export default function ProblemSection() {
  const t = useTranslations('problem');

  const problems = [
    { icon: <DescriptionIcon />, text: t('point1') },
    { icon: <ContentCopyIcon />, text: t('point2') },
    { icon: <EmailIcon />, text: t('point3') },
    { icon: <TableChartIcon />, text: t('point4') },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, px: { xs: 2, sm: 0 } }}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: { xs: 1.5, md: 2 }, 
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' }
              }}
            >
              {t('title')}
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' } }}
            >
              {t('subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {problems.map((problem, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2, md: 3 },
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, md: 2 },
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-4px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 48, md: 56 },
                      height: { xs: 48, md: 56 },
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      flexShrink: 0,
                    }}
                  >
                    {problem.icon}
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 500,
                      fontSize: { xs: '0.95rem', md: '1rem' }
                    }}
                  >
                    {problem.text}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 6 }, px: { xs: 2, sm: 0 } }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                gap: { xs: 1.5, md: 2 },
                p: { xs: 2, md: 3 },
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'rgba(255, 152, 0, 0.08)'
                    : 'rgba(255, 171, 0, 0.12)',
                color: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'rgba(230, 81, 0, 0.9)'
                    : 'rgba(255, 213, 153, 0.95)',
                borderRadius: 2,
                border: '1px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'rgba(255, 152, 0, 0.2)'
                    : 'rgba(255, 171, 0, 0.25)',
              }}
            >
              <AccessTimeIcon sx={{ fontSize: { xs: 32, md: 40 } }} />
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600,
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                {t('resume')}
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

