'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
  Chip,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';

// Icons for services
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WebIcon from '@mui/icons-material/Web';
import ArticleIcon from '@mui/icons-material/Article';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ShareIcon from '@mui/icons-material/Share';
import ReceiptIcon from '@mui/icons-material/Receipt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DataObjectIcon from '@mui/icons-material/DataObject';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CampaignIcon from '@mui/icons-material/Campaign';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import DescriptionIcon from '@mui/icons-material/Description';
import VideocamIcon from '@mui/icons-material/Videocam';
import PollIcon from '@mui/icons-material/Poll';
import SmsIcon from '@mui/icons-material/Sms';
import GroupsIcon from '@mui/icons-material/Groups';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import InsightsIcon from '@mui/icons-material/Insights';

interface Service {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
  detailsKey: string;
  useCasesKey: string;
  problemsKey: string;
  idealForKey: string;
  savingsKey: string;
  gradient: string;
}

export default function SolutionSection() {
  const t = useTranslations('solution');
  const [showAll, setShowAll] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      titleKey: 'service1Title',
      descKey: 'service1Desc',
      detailsKey: 'service1Details',
      useCasesKey: 'service1UseCases',
      problemsKey: 'service1Problems',
      idealForKey: 'service1IdealFor',
      savingsKey: 'service1Savings',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      icon: <CalendarMonthIcon sx={{ fontSize: 40 }} />,
      titleKey: 'service2Title',
      descKey: 'service2Desc',
      detailsKey: 'service2Details',
      useCasesKey: 'service2UseCases',
      problemsKey: 'service2Problems',
      idealForKey: 'service2IdealFor',
      savingsKey: 'service2Savings',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
      titleKey: 'service3Title',
      descKey: 'service3Desc',
      detailsKey: 'service3Details',
      useCasesKey: 'service3UseCases',
      problemsKey: 'service3Problems',
      idealForKey: 'service3IdealFor',
      savingsKey: 'service3Savings',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      icon: <WebIcon sx={{ fontSize: 40 }} />,
      titleKey: 'service4Title',
      descKey: 'service4Desc',
      detailsKey: 'service4Details',
      useCasesKey: 'service4UseCases',
      problemsKey: 'service4Problems',
      idealForKey: 'service4IdealFor',
      savingsKey: 'service4Savings',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      icon: <ArticleIcon sx={{ fontSize: 40 }} />,
      titleKey: 'service5Title',
      descKey: 'service5Desc',
      detailsKey: 'service5Details',
      useCasesKey: 'service5UseCases',
      problemsKey: 'service5Problems',
      idealForKey: 'service5IdealFor',
      savingsKey: 'service5Savings',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    // {
    //   icon: <IntegrationInstructionsIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service6Title',
    //   descKey: 'service6Desc',
    //   detailsKey: 'service6Details',
    //   useCasesKey: 'service6UseCases',
    //   problemsKey: 'service6Problems',
    //   idealForKey: 'service6IdealFor',
    //   savingsKey: 'service6Savings',
    //   gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    // },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 40 }} />,
      titleKey: 'service7Title',
      descKey: 'service7Desc',
      detailsKey: 'service7Details',
      useCasesKey: 'service7UseCases',
      problemsKey: 'service7Problems',
      idealForKey: 'service7IdealFor',
      savingsKey: 'service7Savings',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    },
    {
      icon: <TelegramIcon sx={{ fontSize: 40 }} />,
      titleKey: 'service8Title',
      descKey: 'service8Desc',
      detailsKey: 'service8Details',
      useCasesKey: 'service8UseCases',
      problemsKey: 'service8Problems',
      idealForKey: 'service8IdealFor',
      savingsKey: 'service8Savings',
      gradient: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
    },
    {
      icon: <EventAvailableIcon sx={{ fontSize: 40 }} />,
      titleKey: 'service9Title',
      descKey: 'service9Desc',
      detailsKey: 'service9Details',
      useCasesKey: 'service9UseCases',
      problemsKey: 'service9Problems',
      idealForKey: 'service9IdealFor',
      savingsKey: 'service9Savings',
      gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
    },
    {
      icon: <ShareIcon sx={{ fontSize: 40 }} />,
      titleKey: 'service10Title',
      descKey: 'service10Desc',
      detailsKey: 'service10Details',
      useCasesKey: 'service10UseCases',
      problemsKey: 'service10Problems',
      idealForKey: 'service10IdealFor',
      savingsKey: 'service10Savings',
      gradient: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
    },
    // {
    //   icon: <ReceiptIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service11Title',
    //   descKey: 'service11Desc',
    //   detailsKey: 'service11Details',
    //   useCasesKey: 'service11UseCases',
    //   problemsKey: 'service11Problems',
    //   idealForKey: 'service11IdealFor',
    //   savingsKey: 'service11Savings',
    //   gradient: 'linear-gradient(135deg, #868f96 0%, #596164 100%)',
    // },
    // {
    //   icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service12Title',
    //   descKey: 'service12Desc',
    //   detailsKey: 'service12Details',
    //   useCasesKey: 'service12UseCases',
    //   problemsKey: 'service12Problems',
    //   idealForKey: 'service12IdealFor',
    //   savingsKey: 'service12Savings',
    //   gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    // },
    // {
    //   icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service13Title',
    //   descKey: 'service13Desc',
    //   detailsKey: 'service13Details',
    //   useCasesKey: 'service13UseCases',
    //   problemsKey: 'service13Problems',
    //   idealForKey: 'service13IdealFor',
    //   savingsKey: 'service13Savings',
    //   gradient: 'linear-gradient(135deg, #3f51b1 0%, #5a55ae 100%)',
    // },
    // {
    //   icon: <DataObjectIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service14Title',
    //   descKey: 'service14Desc',
    //   detailsKey: 'service14Details',
    //   useCasesKey: 'service14UseCases',
    //   problemsKey: 'service14Problems',
    //   idealForKey: 'service14IdealFor',
    //   savingsKey: 'service14Savings',
    //   gradient: 'linear-gradient(135deg, #13547a 0%, #80d0c7 100%)',
    // },
    // {
    //   icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service15Title',
    //   descKey: 'service15Desc',
    //   detailsKey: 'service15Details',
    //   useCasesKey: 'service15UseCases',
    //   problemsKey: 'service15Problems',
    //   idealForKey: 'service15IdealFor',
    //   savingsKey: 'service15Savings',
    //   gradient: 'linear-gradient(135deg, #0cebeb 0%, #20e3b2 100%)',
    // },
    // {
    //   icon: <CampaignIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service16Title',
    //   descKey: 'service16Desc',
    //   detailsKey: 'service16Details',
    //   useCasesKey: 'service16UseCases',
    //   problemsKey: 'service16Problems',
    //   idealForKey: 'service16IdealFor',
    //   savingsKey: 'service16Savings',
    //   gradient: 'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)',
    // },
    // {
    //   icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service17Title',
    //   descKey: 'service17Desc',
    //   detailsKey: 'service17Details',
    //   useCasesKey: 'service17UseCases',
    //   problemsKey: 'service17Problems',
    //   idealForKey: 'service17IdealFor',
    //   savingsKey: 'service17Savings',
    //   gradient: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
    // },
    // {
    //   icon: <InventoryIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service18Title',
    //   descKey: 'service18Desc',
    //   detailsKey: 'service18Details',
    //   useCasesKey: 'service18UseCases',
    //   problemsKey: 'service18Problems',
    //   idealForKey: 'service18IdealFor',
    //   savingsKey: 'service18Savings',
    //   gradient: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
    // },
    // {
    //   icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service19Title',
    //   descKey: 'service19Desc',
    //   detailsKey: 'service19Details',
    //   useCasesKey: 'service19UseCases',
    //   problemsKey: 'service19Problems',
    //   idealForKey: 'service19IdealFor',
    //   savingsKey: 'service19Savings',
    //   gradient: 'linear-gradient(135deg, #77a1d3 0%, #79cbca 100%)',
    // },
    // {
    //   icon: <VideocamIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service20Title',
    //   descKey: 'service20Desc',
    //   detailsKey: 'service20Details',
    //   useCasesKey: 'service20UseCases',
    //   problemsKey: 'service20Problems',
    //   idealForKey: 'service20IdealFor',
    //   savingsKey: 'service20Savings',
    //   gradient: 'linear-gradient(135deg, #667db6 0%, #0082c8 100%)',
    // },
    // {
    //   icon: <PollIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service21Title',
    //   descKey: 'service21Desc',
    //   detailsKey: 'service21Details',
    //   useCasesKey: 'service21UseCases',
    //   problemsKey: 'service21Problems',
    //   idealForKey: 'service21IdealFor',
    //   savingsKey: 'service21Savings',
    //   gradient: 'linear-gradient(135deg, #06beb6 0%, #48b1bf 100%)',
    // },
    // {
    //   icon: <SmsIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service22Title',
    //   descKey: 'service22Desc',
    //   detailsKey: 'service22Details',
    //   useCasesKey: 'service22UseCases',
    //   problemsKey: 'service22Problems',
    //   idealForKey: 'service22IdealFor',
    //   savingsKey: 'service22Savings',
    //   gradient: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)',
    // },
    // {
    //   icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service23Title',
    //   descKey: 'service23Desc',
    //   detailsKey: 'service23Details',
    //   useCasesKey: 'service23UseCases',
    //   problemsKey: 'service23Problems',
    //   idealForKey: 'service23IdealFor',
    //   savingsKey: 'service23Savings',
    //   gradient: 'linear-gradient(135deg, #485563 0%, #29323c 100%)',
    // },
    {
      icon: <RecordVoiceOverIcon sx={{ fontSize: 40 }} />,
      titleKey: 'service24Title',
      descKey: 'service24Desc',
      detailsKey: 'service24Details',
      useCasesKey: 'service24UseCases',
      problemsKey: 'service24Problems',
      idealForKey: 'service24IdealFor',
      savingsKey: 'service24Savings',
      gradient: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
    },
    // {
    //   icon: <InsightsIcon sx={{ fontSize: 40 }} />,
    //   titleKey: 'service25Title',
    //   descKey: 'service25Desc',
    //   detailsKey: 'service25Details',
    //   useCasesKey: 'service25UseCases',
    //   problemsKey: 'service25Problems',
    //   idealForKey: 'service25IdealFor',
    //   savingsKey: 'service25Savings',
    //   gradient: 'linear-gradient(135deg, #fd746c 0%, #ff9068 100%)',
    // },
  ];

  const initialDisplayCount = 6;
  const displayedServices = showAll ? services : services.slice(0, initialDisplayCount);

  const handleOpenModal = (index: number) => {
    setSelectedService(index);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <Box id="solution" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 }, px: { xs: 2, sm: 0 } }}>
            <Typography
              variant="h2"
              sx={{
                mb: { xs: 1.5, md: 2 },
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
              }}
            >
              {t('title')}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              {t('subtitle')}
            </Typography>
          </Box>
        </motion.div>

        {/* Services Grid */}
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          <AnimatePresence mode="sync">
            {displayedServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  style={{ width: '100%', display: 'flex' }}
                >
                  <Card
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'visible',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s',
                      minHeight: { md: '280px' },
                      cursor: 'pointer',
                      '&:hover': {
                        boxShadow: 6,
                        borderColor: 'primary.main',
                      },
                    }}
                    onClick={() => handleOpenModal(index)}
                  >
                    {/* Icon Box */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -30,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 80,
                        height: 80,
                        borderRadius: '16px',
                        background: service.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: 3,
                      }}
                    >
                      {service.icon}
                    </Box>

                    <CardContent
                      sx={{
                        pt: { xs: 6, md: 7 },
                        pb: { xs: 2, md: 3 },
                        px: { xs: 2, md: 3 },
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          mb: { xs: 1.5, md: 2 },
                          fontWeight: 600,
                          fontSize: { xs: '1.1rem', md: '1.25rem' },
                        }}
                      >
                        {t(service.titleKey)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: '0.9rem', md: '0.95rem' },
                          flexGrow: 1,
                          mb: 2,
                        }}
                      >
                        {t(service.descKey)}
                      </Typography>

                      {/* Learn More Button */}
                      <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.5 }}>
                        <InfoIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                        <Typography
                          variant="button"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                          }}
                        >
                          {t('learnMore')}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

        {/* Show More/Less Button */}
        <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 6 } }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => setShowAll(!showAll)}
              endIcon={showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              sx={{
                py: { xs: 1.5, md: 2 },
                px: { xs: 4, md: 6 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 600,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {showAll ? t('showLess') : t('showMore')} ({services.length - initialDisplayCount}+)
            </Button>
          </motion.div>
        </Box>

        {/* Service Detail Modal */}
        <Dialog
          open={selectedService !== null}
          onClose={handleCloseModal}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              maxHeight: '90vh',
            },
          }}
        >
          {selectedService !== null && (
            <>
              <DialogTitle
                sx={{
                  background: services[selectedService].gradient,
                  color: 'white',
                  position: 'relative',
                  pb: 3,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pr: 5 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      background: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {services[selectedService].icon}
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, fontSize: { xs: '1.3rem', md: '1.5rem' } }}>
                      {t(services[selectedService].titleKey)}
                    </Typography>
                  </Box>
                </Box>
                <IconButton
                  onClick={handleCloseModal}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'white',
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              <DialogContent sx={{ pt: 3, pb: 2 }}>
                {/* Description */}
                <Typography variant="body1" sx={{ mt: 3,mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                  {t(services[selectedService].detailsKey)}
                </Typography>

                <Divider sx={{ my: 3 }} />

                {/* Use Cases */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip label="01" size="small" color="primary" />
                    {t('useCasesTitle')}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '0.95rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}
                  >
                    {t(services[selectedService].useCasesKey)}
                  </Typography>
                </Box>

                {/* Problems It Solves */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip label="02" size="small" color="error" />
                    {t('problemsTitle')}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '0.95rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}
                  >
                    {t(services[selectedService].problemsKey)}
                  </Typography>
                </Box>

                {/* Ideal For */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip label="03" size="small" color="success" />
                    {t('idealForTitle')}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '0.95rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}
                  >
                    {t(services[selectedService].idealForKey)}
                  </Typography>
                </Box>

                {/* Estimated Savings */}
                {/* <Box
                  sx={{
                    p: 3,
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                    borderRadius: 2,
                    border: '2px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip label="💰" size="small" sx={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }} />
                    {t('savingsTitle')}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 600, mb: 1 }}>
                    {t(services[selectedService].savingsKey)}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic', fontSize: '0.85rem' }}>
                    {t('savingsNote')}
                  </Typography>
                </Box>*/}
              </DialogContent> 

              <DialogActions sx={{ px: 3, pb: 3 }}>
                <Button onClick={handleCloseModal} variant="contained" size="large" fullWidth sx={{ py: 1.5 }}>
                  {t('closeModal')}
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}
