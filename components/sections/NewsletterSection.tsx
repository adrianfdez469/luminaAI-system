'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

interface NewsletterFormData {
  email: string;
}

export default function NewsletterSection() {
  const t = useTranslations('newsletter');
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    console.log('Newsletter subscription:', data);
    setShowSuccess(true);
    reset();

    // TODO: Implement actual newsletter service integration
    // await fetch('/api/newsletter', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              mx: { xs: 2, sm: 0 },
              textAlign: 'center',
              border: '2px solid',
              borderColor: 'primary.main',
              borderRadius: 3,
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
            }}
          >
            <Box
              sx={{
                width: { xs: 70, md: 80 },
                height: { xs: 70, md: 80 },
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'primary.main',
                color: 'white',
                margin: '0 auto',
                mb: { xs: 2, md: 3 },
              }}
            >
              <MailOutlineIcon sx={{ fontSize: { xs: 32, md: 40 } }} />
            </Box>

            <Typography 
              variant="h3" 
              sx={{ 
                mb: { xs: 1.5, md: 2 }, 
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
              }}
            >
              {t('title')}
            </Typography>

            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                mb: { xs: 3, md: 4 }, 
                maxWidth: 600, 
                mx: 'auto',
                fontSize: { xs: '0.95rem', md: '1rem' },
                lineHeight: 1.6
              }}
            >
              {t('subtitle')}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  maxWidth: 500,
                  mx: 'auto',
                }}
              >
                <TextField
                  fullWidth
                  placeholder={t('emailPlaceholder')}
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  sx={{
                    backgroundColor: 'background.paper',
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    minWidth: { xs: '100%', sm: 140 },
                    py: 1.75,
                    fontWeight: 600,
                  }}
                >
                  {t('submit')}
                </Button>
              </Box>
            </form>
          </Paper>
        </motion.div>

        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setShowSuccess(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            {t('success')}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

