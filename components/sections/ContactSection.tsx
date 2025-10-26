'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Alert,
  Snackbar,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

interface FormData {
  name: string;
  email: string;
  message: string;
  date?: string;
}

export default function ContactSection() {
  const t = useTranslations('contact');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setShowError(false);

    try {
      // Send data to n8n webhook
      const response = await fetch('https://n8n.srv1022003.hstgr.cloud/webhook/send-email-to-lumina', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Show success message
      setShowSuccess(true);

      // Reset form
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '447949282054'; // +44 07949282054
    const message = encodeURIComponent('Hi! I\'m interested in your AI automation services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: { xs: 6, md: 10 }, 
        backgroundColor: 'background.default',
        scrollMarginTop: { xs: '70px', md: '80px' }, // Offset for fixed header
      }}
    >
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
              sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }, mb: 2 }}
            >
              {t('subtitle')}
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
            >
              {t('chooseMethod')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {/* WhatsApp Option */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ height: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  minHeight: { xs: 'auto', md: 580 },
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '2px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                    borderColor: '#25D366',
                  },
                }}
                onClick={handleWhatsAppClick}
              >
                <CardContent
                  sx={{
                    p: { xs: 3, md: 4 },
                    textAlign: 'center',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: '#25D366',
                      mb: 3,
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: 48, color: 'white' }} />
                  </Box>
                  
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      color: 'text.primary',
                    }}
                  >
                    {t('whatsappTitle')}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    {t('whatsappDesc')}
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      bgcolor: '#25D366',
                      color: 'white',
                      py: 1.5,
                      px: 4,
                      fontSize: '1rem',
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: '#20BA5A',
                      },
                    }}
                  >
                    {t('whatsappButton')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Email Form Option */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ height: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  minHeight: { xs: 'auto', md: 580 },
                  display: 'flex',
                  flexDirection: 'column',
                  border: '2px solid',
                  borderColor: 'divider',
                }}
              >
                <CardContent 
                  sx={{ 
                    p: { xs: 3, md: 4 }, 
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'primary.main',
                        mb: 2,
                      }}
                    >
                      <EmailIcon sx={{ fontSize: 48, color: 'white' }} />
                    </Box>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                        color: 'text.primary',
                      }}
                    >
                      {t('formTitle')}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      color="text.secondary"
                    >
                      {t('formDesc')}
                    </Typography>
                  </Box>

                  <form 
                    onSubmit={handleSubmit(onSubmit)}
                    style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
                  >
                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label={t('nameLabel')}
                          placeholder={t('namePlaceholder')}
                          size="small"
                          {...register('name', { required: 'Name is required' })}
                          error={!!errors.name}
                          helperText={errors.name?.message}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label={t('emailLabel')}
                          placeholder={t('emailPlaceholder')}
                          type="email"
                          size="small"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label={t('messageLabel')}
                          placeholder={t('messagePlaceholder')}
                          multiline
                          rows={4}
                          size="small"
                          {...register('message', { required: 'Message is required' })}
                          error={!!errors.message}
                          helperText={errors.message?.message}
                        />
                      </Grid>

                      <Grid item xs={12} sx={{ mt: 'auto' }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          disabled={isSubmitting}
                          endIcon={!isSubmitting && <SendIcon />}
                          sx={{
                            py: 1.5,
                            fontSize: '1rem',
                            fontWeight: 600,
                          }}
                        >
                          {isSubmitting ? t('sending') : t('submit')}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

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

        <Snackbar
          open={showError}
          autoHideDuration={6000}
          onClose={() => setShowError(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setShowError(false)}
            severity="error"
            sx={{ width: '100%' }}
          >
            {t('error')}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

