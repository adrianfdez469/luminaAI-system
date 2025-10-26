'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Fab,
  Paper,
  Typography,
  TextField,
  IconButton,
  Fade,
  Avatar,
  Divider,
  CircularProgress,
  Backdrop,
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

export default function ChatbotWidget() {
  const t = useTranslations('chatbot');
  const [isOpen, setIsOpen] = useState(false);
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

  // Generate or retrieve sessionId
  useEffect(() => {
    const STORAGE_KEY = 'lumina_chat_session_id';
    
    // Check if sessionId exists in localStorage
    let existingSessionId = localStorage.getItem(STORAGE_KEY);
    
    if (!existingSessionId) {
      // Generate new unique sessionId
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

  // Detect #lumi-chat hash and open chat automatically
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#lumi-chat') {
      setIsOpen(true);
      // Wait for chat to render, then focus input
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, []);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMaximized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, isMaximized]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMaximized(false); // Reset maximized state when closing
    }
  };

  const handleMaximizeToggle = () => {
    setIsMaximized(!isMaximized);
  };

  // Parse markdown links [text](url) and convert to clickable links
  const parseMessageLinks = (text: string) => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    
    // Regex to match markdown links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    
    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      
      // Add the link as an anchor tag
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
    
    // Add remaining text after the last link
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : text;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessageText = inputValue;
    
    // Add user message
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
      // Send message to n8n webhook
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
      });

      if (!response.ok) {
        throw new Error('Failed to get response from bot');
      }

      const data = await response.json();
      
      // Add bot response
      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.output || t('errorDefault'),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
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
            <Paper
              elevation={8}
              sx={{
                width: isMaximized ? '100vw' : { xs: 'calc(100vw - 48px)', sm: 380 },
                height: isMaximized ? '100dvh' : 500, // Use dynamic viewport height for mobile
                maxHeight: isMaximized ? '100dvh' : 500,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: isMaximized ? 0 : 3,
                overflow: 'hidden',
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
                  flexShrink: 0, // Prevent header from shrinking
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar sx={{ bgcolor: 'white', color: 'primary.main' }}>
                    <SmartToyIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {t('assistantName')}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>
                      {t('statusOnline')}
                    </Typography>
                  </Box>
                </Box>
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
              </Box>

              {/* Messages */}
              <Box
                sx={{
                  flexGrow: 1,
                  minHeight: 0, // Allow this area to shrink when keyboard appears
                  overflowY: 'auto',
                  overflowX: 'hidden',
                  p: 2,
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
                        p: 1.5,
                        maxWidth: '75%',
                        backgroundColor:
                          message.sender === 'user' ? 'primary.main' : 'background.paper',
                        color: message.sender === 'user' ? 'white' : 'text.primary',
                        borderRadius: 2,
                        border: message.sender === 'bot' ? '1px solid' : 'none',
                        borderColor: 'divider',
                      }}
                    >
                      <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                        {parseMessageLinks(message.text)}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          mt: 0.5,
                          opacity: 0.7,
                          fontSize: '0.7rem',
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
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 1.5,
                        backgroundColor: 'background.paper',
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <CircularProgress size={16} />
                      <Typography variant="body2" color="text.secondary">
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
                  flexShrink: 0, // Prevent input area from shrinking
                  ...(isMaximized && {
                    paddingBottom: 'max(16px, env(safe-area-inset-bottom))', // Handle iOS safe area
                  }),
                }}
              >
                <TextField
                  fullWidth
                  multiline
                  maxRows={3}
                  placeholder={t('placeholder')}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  variant="outlined"
                  disabled={isLoading}
                  inputRef={inputRef}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      padding: '8px 14px',
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

