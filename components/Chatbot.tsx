'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Fab,
  Paper,
  Typography,
  TextField,
  IconButton,
  Avatar,
  Divider,
  CircularProgress,
  Backdrop,
  Container,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  mode?: 'widget' | 'fullscreen';
}

export default function Chatbot({ mode = 'widget' }: ChatbotProps) {
  const t = useTranslations('chatbot');
  const [isOpen, setIsOpen] = useState(mode === 'fullscreen');
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t('welcomeMessage'),
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isFullscreenMode = mode === 'fullscreen';

  // Generate or retrieve sessionId
  useEffect(() => {
    const STORAGE_KEY = 'lumina_chat_session_id';
    let existingSessionId = localStorage.getItem(STORAGE_KEY);
    
    if (!existingSessionId) {
      existingSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
      localStorage.setItem(STORAGE_KEY, existingSessionId);
    }
    
    setSessionId(existingSessionId);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-focus and hash detection
  useEffect(() => {
    if (isFullscreenMode) {
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      const hash = window.location.hash;
      if (hash === '#lumi-chat') {
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [isFullscreenMode]);

  // Focus input when widget opens
  useEffect(() => {
    if (isOpen && !isMaximized && !isFullscreenMode) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMaximized, isFullscreenMode]);

  const handleToggle = () => {
    if (!isFullscreenMode) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setIsMaximized(false);
      }
    }
  };

  const handleMaximizeToggle = () => {
    setIsMaximized(!isMaximized);
  };

  // Parse markdown links [text](url) and convert to clickable links
  const parseMessageLinks = (text: string) => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    
    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      
      const linkText = match[1];
      const url = match[2];
      parts.push(
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'inherit',
            textDecoration: 'underline',
            fontWeight: 600,
          }}
        >
          {linkText}
        </a>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : text;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessageText = inputValue;
    const userMessage: Message = {
      id: Date.now(),
      text: userMessageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://n8n.srv1022003.hstgr.cloud/webhook/lumina-ai-chat-superbot',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: userMessageText,
            sessionId: sessionId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get response from bot');
      }

      const data = await response.json();
      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.output || t('errorDefault'),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: t('errorNetwork'),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Chat UI Component (shared between both modes)
  const ChatUI = () => (
    <Paper
      elevation={isFullscreenMode ? 4 : 8}
      sx={{
        width: isFullscreenMode
          ? '100%'
          : isMaximized
          ? '100vw'
          : { xs: 'calc(100vw - 48px)', sm: 380 },
        height: isFullscreenMode
          ? { xs: 'calc(100vh - 180px)', md: 'calc(100vh - 200px)' }
          : isMaximized
          ? '100dvh'
          : 500,
        maxHeight: isFullscreenMode ? undefined : isMaximized ? '100dvh' : 500,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: isFullscreenMode ? 3 : isMaximized ? 0 : 3,
        overflow: 'hidden',
        minHeight: isFullscreenMode ? { xs: 'calc(100vh - 180px)', md: 'calc(100vh - 200px)' } : undefined,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: isFullscreenMode ? 2 : 1 }}>
          <Avatar
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              width: isFullscreenMode ? 48 : undefined,
              height: isFullscreenMode ? 48 : undefined,
            }}
          >
            <SmartToyIcon />
          </Avatar>
          <Box>
            <Typography variant={isFullscreenMode ? 'h6' : 'subtitle1'} sx={{ fontWeight: 600 }}>
              {t('assistantName')}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              {t('statusOnline')}
            </Typography>
          </Box>
        </Box>
        {!isFullscreenMode && (
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <IconButton
              onClick={handleMaximizeToggle}
              sx={{ color: 'white' }}
              aria-label={isMaximized ? t('minimize') : t('maximize')}
            >
              {isMaximized ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
            <IconButton onClick={handleToggle} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Messages */}
      <Box
        sx={{
          flexGrow: 1,
          minHeight: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
          p: isFullscreenMode ? 3 : 2,
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: isFullscreenMode ? 2 : 1.5,
                maxWidth: '75%',
                backgroundColor:
                  message.sender === 'user' ? 'primary.main' : 'background.paper',
                color: message.sender === 'user' ? 'white' : 'text.primary',
                borderRadius: 2,
                border: message.sender === 'bot' ? '1px solid' : 'none',
                borderColor: 'divider',
              }}
            >
              <Typography
                variant={isFullscreenMode ? 'body1' : 'body2'}
                sx={{ whiteSpace: 'pre-wrap' }}
              >
                {parseMessageLinks(message.text)}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  mt: isFullscreenMode ? 1 : 0.5,
                  opacity: 0.7,
                  fontSize: isFullscreenMode ? '0.75rem' : '0.7rem',
                }}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Typography>
            </Paper>
          </Box>
        ))}

        {/* Loading indicator */}
        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Paper
              elevation={0}
              sx={{
                p: isFullscreenMode ? 2 : 1.5,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <CircularProgress size={isFullscreenMode ? 20 : 16} />
              <Typography variant={isFullscreenMode ? 'body1' : 'body2'} color="text.secondary">
                {t('typing')}
              </Typography>
            </Paper>
          </Box>
        )}

        <div ref={messagesEndRef} />
      </Box>

      <Divider sx={{ flexShrink: 0 }} />

      {/* Input */}
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          display: 'flex',
          gap: 1,
          alignItems: 'flex-end',
          flexShrink: 0,
          ...(isMaximized && {
            paddingBottom: 'max(16px, env(safe-area-inset-bottom))',
          }),
        }}
      >
        <TextField
          fullWidth
          multiline
          maxRows={isFullscreenMode ? 4 : 3}
          placeholder={t('placeholder')}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          variant="outlined"
          disabled={isLoading}
          inputRef={inputRef}
          sx={{
            '& .MuiOutlinedInput-root': {
              padding: isFullscreenMode ? '12px 16px' : '8px 14px',
            },
          }}
        />
        <IconButton
          color="primary"
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || isLoading}
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            width: isFullscreenMode ? 56 : undefined,
            height: isFullscreenMode ? 56 : undefined,
            flexShrink: 0,
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
            '&.Mui-disabled': {
              backgroundColor: 'action.disabledBackground',
            },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );

  // Fullscreen mode
  if (isFullscreenMode) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          py: { xs: 2, md: 3 },
          minHeight: 0,
        }}
      >
        <ChatUI />
      </Container>
    );
  }

  // Widget mode
  return (
    <>
      {/* Backdrop */}
      <Backdrop
        open={isOpen}
        sx={{
          zIndex: 1299,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        onClick={handleToggle}
      />

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              bottom: isMaximized ? 0 : 100,
              right: isMaximized ? 0 : 24,
              top: isMaximized ? 0 : 'auto',
              left: isMaximized ? 0 : 'auto',
              zIndex: 1300,
            }}
          >
            <ChatUI />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      {(!isOpen || !isMaximized) && (
        <Fab
          color="primary"
          aria-label="chat"
          onClick={handleToggle}
          data-chatbot-trigger="true"
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1300,
            width: 64,
            height: 64,
            boxShadow: 4,
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: 6,
            },
            transition: 'all 0.3s',
          }}
        >
          {isOpen ? <CloseIcon sx={{ fontSize: 28 }} /> : <ChatIcon sx={{ fontSize: 28 }} />}
        </Fab>
      )}
    </>
  );
}

