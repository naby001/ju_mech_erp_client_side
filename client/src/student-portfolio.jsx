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
  useMediaQuery
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PersonalInfoForm from "./forms/personal-info-form";
import EnrollmentDetailsForm from "./forms/enrollment-details-forms";
import AcademicBackgroundForm from "./forms/academic-background-form";
import AcademicInfoForm from "./forms/academic-info-form";
import { KeyboardArrowLeft, KeyboardArrowRight, Save } from "@mui/icons-material";

// Create a theme
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
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '20px',
        },
      },
    },
  },
});

const steps = [
  'Personal Information',
  'Enrollment Details',
  'Academic Background',
  'Academic Information'
];

export default function StudentPortfolio() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFormChange = (sectionData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...sectionData
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    // Here you would typically send the data to your backend
    alert("Portfolio submitted successfully!");
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfoForm onChange={handleFormChange} />;
      case 1:
        return <EnrollmentDetailsForm onChange={handleFormChange} />;
      case 2:
        return <AcademicBackgroundForm onChange={handleFormChange} />;
      case 3:
        return <AcademicInfoForm onChange={handleFormChange} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Paper elevation={3} className="mb-8">
          <Typography variant="h4" component="h1" gutterBottom align="center" className="mb-4">
            Student Portfolio Information System
          </Typography>
          
          <Stepper activeStep={activeStep} alternativeLabel={!isMobile} orientation={isMobile ? "vertical" : "horizontal"} className="mb-8">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          <Box className="mt-4">
            {activeStep === steps.length ? (
              <Box className="text-center">
                <Typography className="mb-4">
                  All steps completed - your portfolio is ready for submission.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={handleSubmit}
                  startIcon={<Save />}
                  className="mt-4"
                >
                  Submit Portfolio
                </Button>
              </Box>
            ) : (
              <Box>
                <Box className="mb-8">
                  {getStepContent(activeStep)}
                </Box>
                <Box className="flex justify-between mt-8">
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    startIcon={<KeyboardArrowLeft />}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    endIcon={<KeyboardArrowRight />}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
