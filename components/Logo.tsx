'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function Logo() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        cursor: 'pointer',
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <AutoAwesomeIcon sx={{ fontSize: 32, color: 'primary.main' }} />
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        LuminaAI
      </Typography>
    </Box>
  );
}

