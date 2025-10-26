'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import blogData from '@/data/blog.json';

export default function BlogSection() {
  const t = useTranslations('blog');

  return (
    <Box 
      id="blog" 
      sx={{ 
        py: 10, 
        backgroundColor: 'background.paper',
        scrollMarginTop: { xs: '70px', md: '80px' },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              {t('title')}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {t('subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {blogData.map((post, index) => (
            <Grid item xs={12} md={4} key={post.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    '&:hover': {
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%', // 16:9 aspect ratio
                      background: `linear-gradient(135deg, ${
                        index === 0
                          ? '#667eea, #764ba2'
                          : index === 1
                          ? '#f093fb, #f5576c'
                          : '#4facfe, #00f2fe'
                      })`,
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Chip label={post.category} size="small" color="primary" />
                      <Typography variant="caption" color="text.secondary">
                        {new Date(post.date).toLocaleDateString()}
                      </Typography>
                    </Box>

                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {post.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                      {post.excerpt}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="caption" color="text.secondary">
                        By {post.author}
                      </Typography>
                      <Button
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ fontWeight: 600 }}
                      >
                        {t('readMore')}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

