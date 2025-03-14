"use client";

import { useState } from "react";
import { 
  Box, 
  Stepper, 
  Step, 
  StepLabel, 
  Button, 
  Typography, 
  Paper,
  Container,
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { KeyboardArrowLeft, KeyboardArrowRight, Save } from "@mui/icons-material";
import PersonalInfoForm from "../forms/personal-info-form";
import EnrollmentDetailsForm from "../forms/enrollment-details-forms";
import AcademicBackgroundForm from "../forms/academic-background-form";
import AcademicInfoForm from "../forms/academic-info-form";
import CoCurricularForm from "../forms/co-curricular-form";
import MiscellaneousForms from "../forms/miscellaneous-forms";
import ProgressionForm from "../forms/progression-form";
import Navbar from "../components/Navbar";

// Custom Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 14, // Slightly smaller font
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          //padding: '20px',
         // borderRadius: "16px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});

const steps = [
  "Personal Information",
  "Enrollment Details",
  "Academic Background",
  "Academic Information",
  "Co-Curricular Activities",
  "Miscellaneous Information",
  "Progression/Placement/Examinations",
];

export default function StudentPortfolio() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleFormChange = (sectionData) => setFormData((prev) => ({ ...prev, ...sectionData }));
  const handleSubmit = () => alert("Portfolio submitted successfully!");

  const getStepContent = (step) => {
    switch (step) {
      case 0: return <PersonalInfoForm onChange={handleFormChange} />;
      case 1: return <EnrollmentDetailsForm onChange={handleFormChange} />;
      case 2: return <AcademicBackgroundForm onChange={handleFormChange} />;
      case 3: return <AcademicInfoForm onChange={handleFormChange} />;
      case 4: return <CoCurricularForm onChange={handleFormChange} />;
      case 5: return <MiscellaneousForms onChange={handleFormChange} />;
      case 6: return <ProgressionForm onChange={handleFormChange} />;
      default: return "Unknown step";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Navbar */}
     <Navbar/>

      {/* Form Container */}
      <Container maxWidth="md" sx={{ mt: 12, display: "flex", justifyContent: "center" }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Paper elevation={6} sx={{ p: 4, borderRadius: "16px", textAlign: "center" }}>
            {/* Title */}
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#333" }}>
              Student Portfolio Information System
            </Typography>

            {/* Stepper */}
            <Stepper 
              activeStep={activeStep} 
              alternativeLabel={!isMobile} 
              orientation={isMobile ? "vertical" : "horizontal"} 
              sx={{ mb: 3 }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {/* Form Content */}
            <motion.div 
              key={activeStep} 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }}
            >
              {activeStep === steps.length ? (
                <Box textAlign="center">
                  <Typography sx={{ mb: 3 }}>All steps completed - your portfolio is ready for submission.</Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleSubmit}
                    startIcon={<Save />}
                    sx={{ px: 3, py: 1.5, borderRadius: "8px" }}
                  >
                    Submit Portfolio
                  </Button>
                </Box>
              ) : (
                <Box>
                  <Box sx={{ mb: 4 }}>{getStepContent(activeStep)}</Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      startIcon={<KeyboardArrowLeft />}
                      sx={{ borderRadius: "8px", px: 2, py: 1 }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      endIcon={<KeyboardArrowRight />}
                      sx={{ borderRadius: "8px", px: 3, py: 1.5 }}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Box>
                </Box>
              )}
            </motion.div>
          </Paper>
        </motion.div>
      </Container>
    </ThemeProvider>
  );
}
